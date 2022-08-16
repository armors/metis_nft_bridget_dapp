const fs = require('fs')
const path = require('path')
const request = require('request')

const file = 'data/ERC721B.sol'

const param = {
  url: 'https://raw.githubusercontent.com/PolarysDAC/polarys-metis-contract/main/contracts/ERC721B.sol',
  method: 'get'
}

console.log('update start...')

// eslint-disable-next-line handle-callback-err
const callback = (error, response, body) => {
  const filename = path.join(__dirname, file)
  if (fs.existsSync(filename)) {
    console.log('file is exists, delete old file...')
    fs.unlinkSync(filename)
  }
  console.log('save data to file: ' + filename)
  fs.writeFileSync(filename, body)
}

// eslint-disable-next-line handle-callback-err
request(param, callback)
