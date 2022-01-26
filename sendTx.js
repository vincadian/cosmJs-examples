/*
 * This example allows you to send a simple tx
 * on the osmosis blockchain with the stargate lib
 * @atmon3r - 2022
 */

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, SigningStargateClient, StargateClient } from "@cosmjs/stargate";

// 
const mnemonic = "";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
  mnemonic, {
    prefix: 'micro'
  }
);
const [firstAccount] = await wallet.getAccounts();

const rpcEndpoint = "https://rpc-microtick.keplr.app";
const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

const recipient = "micro13jawsn574rf3f0u5rhu7e8n6sayx5gkwq5ay0h";
const amount = {
  denom: "utick",
  amount: "10000", // 0.01 tick
};
const fee = {
  amount: [
    {
      denom: "utick",
      amount: "2000", // 0.001 tick
    },
  ],
  gas: "180000", // 180k
};
const result = await client.sendTokens(
  firstAccount.address, 
  recipient, 
  [amount], 
  fee, 
  "Have fun with your coins"
);

assertIsDeliverTxSuccess(result); 
console.log(result)
