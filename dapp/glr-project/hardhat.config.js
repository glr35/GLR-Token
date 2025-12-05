require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: ["a60f74d11d04e2853819cd02a18e91aa6574f827c228904ec0ac5da939f4daf5"],
    },
  },
};