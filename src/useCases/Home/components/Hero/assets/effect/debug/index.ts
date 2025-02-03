import type p5 from 'p5'
import { Frame } from './Frame.ts'
import { Point } from './Point.ts'

export const create = () => {
  let enable = true

  return {
    bindEvents: (p: p5) => {
      p.mouseClicked = () => {
        enable = !enable
      }
    },
    callbacks: {
      afterDraw: (p: p5) => enable && new Frame(p).display(),
      afterDrawVertex: (
        p: p5,
        options: ConstructorParameters<typeof Point>['1']
      ) => enable && new Point(p, options).display()
    }
  }
}
