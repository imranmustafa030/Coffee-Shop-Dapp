# Coffee Shop Dapp

Welcome to the Coffee Shop Dapp repository! This project is a fully decentralized web application where users can come, pay for coffee, and enjoy their beverages. It utilizes technologies such as Solidity, JavaScript (React), Hardhat, Web3, and smart contracts to provide a seamless experience for coffee enthusiasts.

## Features

- **Decentralized Payments**: Users can pay for their coffee using cryptocurrencies, eliminating the need for traditional payment methods.
- **Smart Contracts**: The application employs smart contracts, powered by Solidity, to handle transactions securely and transparently.
- **User-Friendly Interface**: The user interface is built with React, providing an intuitive and engaging experience for customers.
- **Netlify Deployment**: The Coffee Shop Dapp is hosted on Netlify, ensuring easy accessibility for users.

## Getting Started

To set up the project locally, follow these instructions:

### Prerequisites

- Node.js (v14 or higher)
- npm package manager
- MetaMask or any Ethereum wallet extension installed in your browser

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/imranmustafa030/Coffee-Shop-Dapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd coffee-shop-dapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file at the root of the project and provide the necessary environment variables. Refer to the `.env.example` file for the required variables.

5. Compile the smart contracts:

   ```bash
   npx hardhat compile
   ```

6. Deploy the contracts to the desired network:

   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

7. Start the development server:

   ```bash
   npm start
   ```

8. Open your browser and visit `http://localhost:3000` to access the Coffee Shop Dapp locally.

## Contributing

Contributions to the Coffee Shop Dapp are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Make sure to follow the existing coding style and commit message conventions.

Before contributing, please review our [Code of Conduct](CODE_OF_CONDUCT.md).

## Acknowledgments

We would like to thank the following resources and projects for their valuable contributions:

- Solidity: https://github.com/ethereum/solidity
- React: https://github.com/facebook/react
- Hardhat: https://github.com/nomiclabs/hardhat
- Web3.js: https://github.com/ChainSafe/web3.js

## Contact

Thank you for your interest in the Coffee Shop Dapp! We hope you enjoy your virtual coffee experience.


- https://coffee-shop-dapp.netlify.app/

