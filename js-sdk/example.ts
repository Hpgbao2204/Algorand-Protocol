const algosdk = require('algosdk');

const generateAccount = algosdk.generateAccount();
const passphase = algosdk.secretKeyToMnemonic(generateAccount.sk);

console.log("Address: ", generateAccount.addr);
console.log("Passphase: ", passphase);