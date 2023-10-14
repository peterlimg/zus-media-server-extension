import {createWasm} from './index.js';

console.log('in wasm before create Wasm')

let goWasm

const createWasm2 = async (domain) => {
  const config = [
    '0afc093ffb509f059c55478bc1a60351cef7b4e9c008a53a6cc8241ca8617dfe',
    `https://${domain}/dns`,
    'bls0chain',
    50,
    50,
    3,
    `https://0box.${domain}`,
    // 'https://0box.msac.testnet-0chain.net',
    "vult-app",
    3,
  ]

  goWasm = await createWasm()
  console.log('goWasm:', goWasm)

  await goWasm.sdk.init(... config)
  return goWasm
}

const getWasm = async (domain) => {
  // if (!goWasm) {
    console.log("create wasm...")
    await createWasm2({domain: domain})
  // }

  // if (wallet && goWasm.walletId != wallet.id && wallet.keys) {
  // const { privateKey, publicKey } = wallet.keys
  // const bls = await getBls()
  // await goWasm.setWallet(
  //     bls,
  //     wallet.id,
  //     privateKey,
  //     publicKey,
  //     wallet?.mnemonic
  // )
  // }

  return goWasm
}

export {
  getWasm
}
