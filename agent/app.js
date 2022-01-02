const Web3 = require('web3');
const url = process.env.RPC_IP || "http://127.0.0.1:8545";
console.log('connected url: ', url)

const web3 = new Web3(new Web3.providers.WebsocketProvider(url));

setInterval(async() => {
  let b = await web3.eth.getBlockNumber();
  console.log(b);
}, 4000)