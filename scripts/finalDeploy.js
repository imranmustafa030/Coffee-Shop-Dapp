const hre = require("hardhat");

async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
    const contract = await hre.ethers.deployContract("coffee");
    // const contract = await coffee.deployContract(); //instance of contract
    
    await contract.waitForDeployment();
    console.log("Address of contract:", await contract.getAddress());
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });