import fs from 'fs'
import path from 'path'

const content = fs.readFileSync(path.resolve(__dirname, 'sonar-sweep.input.txt'), 'utf-8')
const data = content.split(/\n/).map((value) => Number(value))

let counter = 0
let prevValue = data[0]

for (const value of data) {
  if (value > prevValue) {
    counter++
  }
  prevValue = value
}

console.log('>>> counter', counter)
