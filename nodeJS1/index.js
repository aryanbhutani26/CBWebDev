console.log('HI');
const fs = require('fs')
fs.writeFileSync('hello.txt','hello world')

// const readed = fs.readFileSync('hello.txt')
// console.log(readed)

// fs.appendFileSync('hello.txt','how are you')
// fs.appendFileSync('hello.txt',' bbg')

fs.cpSync('hello.txt','hello2.txt')

fs.unlinkSync('hello2.txt')
// fs.rmSync('hello.txt')

// fs.mkdirSync('nodeJS2')
// fs.rmSync('nodeJS2')

fs.rename('hello.txt', 'hello2.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });