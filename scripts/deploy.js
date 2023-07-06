// const hre = require("hardhat");

// async function getBalances(address) {
//   const balanceBigInt = await hre.ethers.provider.getBalance(address);
//   return hre.ethers.utils.formatEther(balanceBigInt);
// }

// async function consoleBalances(addresses) {
//   let counter = 0;
//   for (const address of addresses) {
//     console.log(`Address ${counter}, balance:`, await getBalances(address));
//     counter++;
//   }
// }

// async function consoleMemos(memos) {
//   for (const memo of memos) {
//     const timestamp = memo.timestamp;
//     const nameo = memo.name;
//     const from = memo.from;
//     const message = memo.message;
//   }
//   console.log(
//     `At ${timestamp}, name ${nameo}, address ${from},message ${message}`
//   );
// }

// async function main() {
//   const [owner, from1, from2, from3] = await hre.ethers.getSigners();
//   const coffee = await hre.ethers.getContractFactory("coffee");
//   const contract = await coffee.deploy(); //intance of contract

//   await contract.deployed();
//   console.log("Address of contract:", contract.address);

//   const addresses = [
//     owner.address,
//     from1.address,
//     from2.address,
//     from3.address,
//   ];
//   console.log("Before buying Coffee");
//   await consoleBalances(addresses);

//   const amount = { value: hre.ethers.utils.parseEther("1") };
//   await contract
//     .connect(from1)
//     .buyCoffee("from1", "I Like this coffee", amount);
//   await contract
//     .connect(from2)
//     .buyCoffee("from2", "I Like this coffee", amount);
//   await contract
//     .connect(from3)
//     .buyCoffee("from3", "I Like this coffee", amount);

//   console.log("After buying Coffee");
//   await consoleBalances(addresses);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// ----------------------------------------
const hre = require("hardhat");
async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.formatEther(balanceBigInt);
}

async function cosoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter} balance:`, await getBalances(address));
    counter++;
  }
}
async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;
    console.log(
      `At ${timestamp},name ${name},address ${from},message ${message}`
    );
  }
}
async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const contract = await hre.ethers.deployContract("coffee");
  // const contract = await coffee.deployContract(); //instance of contract
  
  await contract.waitForDeployment();
  console.log("Address of contract:", await contract.getAddress());

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before buying coffee");
  await cosoleBalances(addresses);

  // const amount = { value: hre.ethers.utils.parseEther("1", "ether") };
  const amount = { value: hre.ethers.parseEther("1", "ether") };

  await contract.connect(from1).buyCoffee("from1", "Very nice Coffee", amount);
  await contract.connect(from2).buyCoffee("from2", "Very nice course", amount);
  await contract
    .connect(from3)
    .buyCoffee("from3", "Very nice information", amount);

  console.log("After buying Coffee");
  await cosoleBalances(addresses);

  const memos = await contract.getMemos();
  await consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// -------------------------------------------