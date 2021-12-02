import fs from 'fs'
import path from 'path'

const content = fs.readFileSync(path.resolve(__dirname, 'dive.input.txt'), 'utf-8')
const steps = content
  .split(/\n/)
  .filter(Boolean)
  .map((instruction) => {
    const [direction, rawValue] = instruction.split(/\s/)
    const value = Number(rawValue)

    switch (direction) {
      case 'forward':
        return { x: value }
      case 'down':
        return { y: value }
      case 'up':
        return { y: -value }
      default:
        throw new Error(`Unexpected direction: "${direction}".`)
    }
  })

const grid = { x: 0, y: 0, aim: 0 }

for (const step of steps) {
  if (step?.x) {
    grid.x += step.x
    grid.y += grid.aim * step.x
  } else if (step?.y) {
    grid.aim += step.y
  }
}

const target = grid.x * grid.y

console.log('>>> target', target)
