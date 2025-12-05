const hre = require("hardhat");

async function main() {
  const presale = await hre.ethers.deployContract("GLRPresale", [
    "0x303721A47d9E47A6b6491Db50128A75C63673ceC"  // GLR token adresin
  ]);

  await presale.waitForDeployment();

  console.log("Presale kontratı:", await presale.getAddress());
}

main();