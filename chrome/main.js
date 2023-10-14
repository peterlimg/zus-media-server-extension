import { getWasm } from './wasm.js';

getWasm("dev.zus.network").then(goWasm => {
  // console.log("get Wasm:", goWasm)
  goWasm.sdk.InitHW();
})
console.log("Called!");
