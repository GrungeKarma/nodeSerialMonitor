//import dependencies 
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

// the path variable is a command line argument 
const port = new SerialPort({ path: argv[2], baudRate: 9600 })

//delimiter cleans up output with a return and a new line
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

//console logs data
parser.on('data', (line) => {
  console.log(line)
}
);