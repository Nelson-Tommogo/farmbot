import { useState, useEffect } from "react";
import { canisterId, createActor } from "declarations/FarmBot";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  // Fetch messages on load
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const actor = createActor(canisterId);
    const msgs = await actor.getMessages();
    setMessages(msgs);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const actor = createActor(canisterId);
    await actor.sendMessage(input);
    
    // Get FarmBot's reply
    const reply = await actor.getReply(input);
    await actor.sendMessage(`FarmBot: ${reply}`); // Format bot reply
    
    fetchMessages();
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const connectWallet = async () => {
    // TODO: Integrate Internet Identity
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* --- Top Bar --- */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            🌱 FarmBot
          </h1>
          <button
            onClick={connectWallet}
            className={`px-4 py-2 rounded-lg ${isConnected ? "bg-green-800" : "bg-white text-green-600"}`}
          >
            {isConnected ? "Connected" : "Connect Wallet"}
          </button>
        </div>
      </header>

      {/* --- Main Chat --- */}
      <main className="flex-1 container mx-auto p-4 overflow-y-auto">
        <div className="bg-white rounded-lg shadow-md h-[60vh] p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[80%] ${msg.user.includes("FarmBot") ? "bg-green-100 self-start" : "bg-blue-100 self-end ml-auto"}`}
              >
                <strong>{msg.user}:</strong> {msg.text.replace("FarmBot: ", "")}
              </div>
            ))}
          </div>

          {/* --- Input Area --- */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about crops, pests, weather..."
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={sendMessage}
              className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-green-800 text-white p-4 text-center">
        <p>Need help? Visit <a href="#" className="underline">Farmer’s Guide</a></p>
        <p className="text-sm mt-1">© 2024 FarmBot | Built on ICP</p>
      </footer>
    </div>
  );
}

export default App;