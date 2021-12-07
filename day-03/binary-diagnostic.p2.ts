import fs from 'fs'
import path from 'path'

const content = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const data = content.split(/\n/).filter(Boolean)

function toDecimal(value: string) {
  return parseInt(value, 2)
}

function getRating(list: string[], greater: boolean) {
  let offset = 0

  while (list.length !== 1) {
    const f1: string[] = []
    const f2: string[] = []

    for (let index = 0; index < list.length; index++) {
      const bit = list[index].split('')[offset]

      if (bit === '0') {
        f1.push(list[index])
      } else {
        f2.push(list[index])
      }
    }

    if (f1.length === f2.length || f1.length < f2.length) {
      list = greater ? f2 : f1
    } else {
      list = greater ? f1 : f2
    }

    offset++
  }

  return toDecimal(list[0])
}

const oxygenRating = getRating(data, true)
const co2Rating = getRating(data, false)

const result = oxygenRating * co2Rating

console.log('>>> result', result)
