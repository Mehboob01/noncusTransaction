var ethers = require('ethers');  
var url = 'https://virulent-rough-haze.ethereum-sepolia.quiknode.pro/dbe2556e8a5d584218d37aeac062f39106431e69/';
var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
var privateKey = "0x011111111101244444411144222111445544d4455a44411122211211121221";
var wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);
tx = {
  to: "0xb5fc14ee4DBA399F9043458860734Ed33FdCd96E",
  value: ethers.utils.parseEther("0.05"),
  chainId: 11155111,
  nonce: 11
}
customHttpProvider.estimateGas(tx).then(function(estimate) {
    tx.gasLimit = estimate;
    tx.gasPrice = ethers.utils.parseUnits("3.14085197", "gwei");
    wallet.signTransaction(tx).then((signedTX)=>{
    customHttpProvider.sendTransaction(signedTX).then(console.log);
    });
});