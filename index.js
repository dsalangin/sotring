const fs = require('fs');
const {spawn} = require('child_process');

const sort = spawn('sort', ['in.txt']);
const writer = fs.createWriteStream('out.txt');

sort.stdout.pipe(writer);

sort.on('exit', function (code) {
  if (code) {
    console.log(`Ошибка сортировки. Код: ${code}.`);
  }
});

writer.on('error', (err) => {
  console.log(`Error: ${err}`);
});

writer.on('close', () => {
  console.log('Процесс завершен');
});