const { ethers } = require("hardhat");

async function main() {
  console.log("GLR Token deploy ediliyor...");

  const GLRToken = await ethers.getContractFactory("GLRToken");
  const token = await GLRToken.deploy(); // constructor yok → parametre yok

  await token.waitForDeployment();

  console.log("GLR Token başarıyla deploy edildi!");
  console.log("Kontrat adresi:", token.target);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Deploy hatası:", err);
    process.exit(1);
  });