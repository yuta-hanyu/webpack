import * as md5 from "../md5"

self.addEventListener(
  "message",
  (e) => {
    const message = "hoge"
    console.log(md5(message))
    console.log(111)
    self.postMessage(e.data)
  },
  false
)
