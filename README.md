GLR Token — ERC-20 Token on Base Mainnet

GLR Token is a fully functional ERC-20 token deployed on Base Mainnet, integrated with Uniswap V3 liquidity and a custom frontend DApp for wallet connection and balance display.

⸻

🚀 Features
	•	✔️ ERC-20 compliant smart contract
	•	✔️ Deployed on Base Mainnet
	•	✔️ Verified contract
	•	✔️ Liquidity pool created on Uniswap V3 (0.3%)
	•	✔️ Custom DApp for wallet connection & balance viewing
	•	✔️ Fully compatible with MetaMask and Web3

  📂 Project Structure
  
  GLR-Token/
│
├── contracts/          # GLR.sol — ERC-20 smart contract
├── scripts/            # Deployment scripts
├── artifacts/          # Compiler output (auto-generated)
├── cache/              # Hardhat cache
│
├── dapp/               # Frontend (HTML/JS)
│   └── index.html      # Token balance checker UI
│
├── guler-dapp/         # Additional frontend folder (unused or experimental)
│
├── hardhat.config.js   # Hardhat configuration
├── package.json
└── README.md


📜 Smart Contract

GLR token is implemented using OpenZeppelin ERC-20 standards.

Contract Address (Base Mainnet)

🧪 Deployment (Hardhat)
npx hardhat compile
npx hardhat run scripts/deploy.js --network base

🌐 Frontend DApp (dapp/index.html)

The DApp allows users to:
	•	Connect MetaMask
	•	Read their GLR balance
	•	Interact with Base Mainnet

Technologies used:
	•	HTML / JavaScript
	•	Ethers.js
	•	MetaMask API

⸻

🦄 Uniswap Liquidity Pool

A liquidity position has been created on Uniswap V3 (0.3% fee tier) with the following pair:

ETH / GLR

⸻

👩‍💻 Developer

Güler Göçmen
Computer Engineering • İzmir, Turkey
GitHub: https://github.com/glr35

