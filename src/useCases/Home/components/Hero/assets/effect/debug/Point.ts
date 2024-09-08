import p5 from 'p5'

export class Point {
  #p: p5
  x: number
  y: number
  theta: number

  constructor(p: p5, { x, y, theta }: Record<'x' | 'y' | 'theta', number>) {
    this.#p = p

    this.x = x
    this.y = y
    this.theta = theta

    p.fill('rgba(50, 150, 50, 0.95)')
  }

  circle(p: p5) {
    p.strokeWeight(1)
    p.circle(this.x, this.y, 8)
  }

  label(p: p5) {
    p.noStroke()
    p.textSize(8)
    p.textFont('monospace')
    p.textAlign('left', 'center')

    p.text(
      [
        `θ=${this.theta}`,
        `x=${p.round(this.x, 2)}`,
        `y=${p.round(this.y, 2)}`
      ].join('\n'),
      this.x + 12,
      this.y
    )
  }

  display() {
    this.circle(this.#p)
    this.label(this.#p)
  }
}
