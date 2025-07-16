# AeroX

A simple ERC-20 token deployed on the Sepolia testnet.

# 🔗 Contract Details

Name: AeroX

Symbol: AEROX

Decimals: 18

Total Supply: 1,000,000 AEROX

Sepolia Address: 0x2401497657e2dFd81e3B6Eb0287Dbbf059552969

Verified on Sepolia Etherscan: View Source & ABI

# 🚀 Getting Started

Prerequisites

Node.js (v16+)

npm or yarn

Git

Clone the Repository
```bash
git clone https://github.com/your-username/AeroXToken.git
cd AeroXToken
```
Install Dependencies
```bash
npm install
# or
# yarn install
```
Environment Variables

Create a .env file in the project root:
```bash
cp .env.example .env
```
Fill in your values:
```bash
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```
# Compile & Deploy

Compile contracts
```bash
npx hardhat compile
```
Deploy to Sepolia
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
Verify on Etherscan
```bash
npx hardhat verify --network sepolia 0xYourContractAddress 1000000000000000000000000
```
# 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.


