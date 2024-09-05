import p5 from 'p5'

export class Frame {
  #p: p5

  constructor(p: p5) {
    this.#p = p
  }

  display() {
    const p = this.#p

    p.textSize(8)
    p.textFont('monospace')

    p.fill(200, 50, 50)
    p.noStroke()
    const diameter = 6

    const left = { x: -p.width, label: '-p.width' }
    const right = { x: 0, label: '0' }
    const top = { y: 0, label: '0' }
    const bottom = { y: p.height, label: 'p.height' }

    // 左上
    p.rect(left.x, top.y, diameter)
    p.textAlign('left', 'top')
    p.text(`(${left.label}, ${top.label})`, left.x + diameter, top.y + diameter)

    // 右上
    p.textAlign('right', 'top')
    p.rect(right.x - diameter, top.y, diameter)
    p.text(`(${right.x}, ${top.label})`, right.x - diameter, top.y + diameter)

    // 右下
    p.rect(right.x - diameter, bottom.y - diameter, diameter)
    p.textAlign('right', 'bottom')
    p.text(
      `(${right.x}, ${bottom.label})`,
      right.x - diameter,
      bottom.y - diameter
    )

    // 左下
    p.textAlign('left', 'bottom')
    p.rect(left.x, bottom.y - diameter, diameter)
    p.text(
      `(${left.label}, ${bottom.label})`,
      left.x + diameter,
      bottom.y - diameter
    )
  }
}
