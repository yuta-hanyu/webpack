import { hellow } from "./sub.js"
import Worker from "./worker/worker"
// import Worker from "worker-loader!./Worker.js"

document.querySelector("#submit").addEventListener("click", () => {
  // console.log("ssss")
  // hellow(document.querySelector("#input").value)
  // console.log(document.querySelector("#input").value)
  // const message = "hoge"
  // console.log(md5(message))

  const worker = new Worker()

  worker.addEventListener(
    "message",
    (e) => {
      console.log("Workerから受け取ったデータは: ", e.data)
    },
    false
  )

  worker.postMessage(document.querySelector("#input").value)
})
