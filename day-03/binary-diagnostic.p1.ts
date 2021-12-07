import fs from 'fs'
import path from 'path'

const content = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf-8')
const data = content.split(/\n/)

const freq: [number, number][] = []

for (const row of data) {
  const bits = row.split('')
  for (let index in bits) {
    const nextFreq = freq[index] ?? [0, 0]
    if (bits[index] === '0') {
      nextFreq[0] += 1
    } else {
      nextFreq[1] += 1
    }
    freq[index] = nextFreq
  }
}

function toDecimal(value: string) {
  return parseInt(value, 2)
}

const gammaRate = toDecimal(freq.map(([v1, v2]) => (v1 > v2 ? 0 : 1)).join(''))
const epsilonRate = toDecimal(freq.map(([v1, v2]) => (v1 > v2 ? 1 : 0)).join(''))

const result = gammaRate * epsilonRate

console.log('>>> result', result)
