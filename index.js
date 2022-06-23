console.log("building a moni losing game");
const web3 = require("@solana/web3.js");
const connection = new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
console.log(connection);
const userWallet = web3.Keypair.generate();
console.log(userWallet);
 web3.SystemPrgram.transfer({
  fromPubkey:new web3.PublicKey(from.publicKey.toString()),
  toPubkey:new web3.PublicKey(to.publicKey.toString()),
  lamports:web3.LAMPORTS_PER_SOL
 })
;
