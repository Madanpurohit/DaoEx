/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.9",
  networks: {
    BSC: {
      url: "https://speedy-nodes-nyc.moralis.io/cc498045fde82f5dbf16a908/bsc/testnet",
      accounts: [
        "1b93845bdae8dd06e46182984027a0b48550c078a452ff73a98624dfe96ecf47",
      ],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "88ICTM91UMARQUQEKAQ7SB58U3FMHDMYMC",
  },
};
