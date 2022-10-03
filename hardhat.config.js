/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

const PRIVATE_KEY =process.env.PRIVATE_KEY;
const ALCHEMY_URL = process.env.ALCHEMY_URL;
const ETHERSCAN_API=process.env.ETHERSCAN_API;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork:'goerli',
  networks:{
    hardhat:{},
    goerli:{
      url: ALCHEMY_URL,
      // gasPrice: 5 *1e18,
      // chainId: 5,
      accounts:[PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_API
  }
};
