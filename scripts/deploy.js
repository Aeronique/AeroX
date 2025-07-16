// scripts/deploy.js

// 1. Pull in the Hardhat Runtime Environment (which now includes ethers)
const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  // 2. Grab your deployer account
  const [deployer] = await ethers.getSigners();
  console.log("Deploying AeroX with account:", deployer.address);

  // 3. Build the supply using ethers.utils.parseUnits
  const initialSupply = ethers.utils.parseUnits("1000000", 18);

  // 4. Compile & deploy
  const Token = await ethers.getContractFactory("AeroXToken");
  const token = await Token.deploy(initialSupply);

  // 5. Wait for it to be mined
  await token.deployed();
  console.log("AeroXToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

