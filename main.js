
//import dependencies 
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

// use applicable path variable
const port = new SerialPort({ path: '/dev/ttyACM0', baudRate: 9600 })

//delimiter cleans up output with a return and a new line
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

//console logs
parser.on('data', (line) => {
  console.log(line)
}
);