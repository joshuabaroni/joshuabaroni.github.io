var worker = new Worker('worker.js')
worker.postMessage('Hellloooo')

addEventListener(message)
// web "Worker" is a JS thread running off of the main thread
// communicate through these messages
// no access to APIs or setTimeout


// node version of threading below
const {spawn} = require('child_process')

spawn('git', ['stuff'])