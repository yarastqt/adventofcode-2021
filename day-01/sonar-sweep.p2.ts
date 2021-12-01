import fs from 'fs'
import path from 'path'

const content = fs.readFileSync(path.resolve(__dirname, 'sonar-sweep.input.txt'), 'utf-8')
const data = content.split(/\n/).map((value) => Number(value))

let counter = 0
let prevValue = data[0] + data[1] + data[2]
let index = 0

while (true) {
  const value = data[index + 0] + data[index + 1] + data[index + 2]

  if (isNaN(prevValue) || isNaN(value)) {
    break
  }

  if (value > prevValue) {
    counter++
  }

  prevValue = value
  index++
}

console.log('>>> counter', counter)
