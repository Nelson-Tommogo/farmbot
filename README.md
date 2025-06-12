# 🌾 FarmBot

**FarmBot** is an AI-powered, blockchain-enabled chatbot built on the **Internet Computer Protocol (ICP)**. It provides farmers with real-time access to agricultural insights, market information, nearby agrovet locations, weather updates, and more—all through a secure, decentralized platform.

---

## 🚀 Features

- 🤖 **AI Chatbot Support**  
  Get instant answers to farming questions, crop management, pest control, and livestock care.

- 🌐 **ICP Powered**  
  Built on the Internet Computer Protocol, FarmBot runs fully on-chain, ensuring scalability, data integrity, and decentralization.

- 📍 **Agrovet & Service Locator**  
  Discover nearby agrovets, equipment rental services, and extension officers using location-based services.

- ☁️ **Weather Forecast Integration**  
  Access real-time and forecasted weather data tailored to your farm’s location.

- 📊 **Market Price Insights**  
  Stay updated with the latest prices for crops, livestock, and farm inputs.

- 🛡️ **Blockchain-secured Data**  
  All interactions and critical records are stored on-chain, ensuring transparency and data ownership.

---

## 📦 Tech Stack

| Component        | Technology             |
|------------------|------------------------|
| Backend (Smart Contract) | Motoko (ICP Canisters)      |
| Frontend         | React.js               |
| AI Integration   | OpenAI API / Custom NLP |
| Weather Data     | OpenWeatherMap API     |
| Maps & Geolocation | Mapbox / Leaflet.js     |
| Blockchain       | Internet Computer Protocol (DFINITY) |

---

## 🛠️ Getting Started

### Prerequisites

- [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/developer-environment)
- Node.js & npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/farmbot.git
cd farmbot

# Install backend dependencies
dfx start --background
dfx deploy

# Install frontend dependencies
cd frontend
npm install

# Run the frontend
npm run dev
