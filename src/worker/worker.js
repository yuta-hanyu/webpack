// import * as md5 from "../md5"
import { hellow } from "../sub.js"

onmessage = (e) => {
  console.log(hellow(e.data))
  // hellow(e.data)
  postMessage(hellow(e.data))
}
