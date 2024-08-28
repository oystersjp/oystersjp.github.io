import p5 from 'p5'
import { debounce } from './utils'

type Options = {
  selector: HTMLElement
  colors: { line: string; background: string }
}

export class Effect {
  options: Options

  constructor(options: Options) {
    this.options = options
  }

  #createSketch(p: p5, { node }: { node: HTMLElement }) {
    // VRTを考慮して同じパターンが出力されるようにSeed値を設定する
    p.noiseSeed(100)

    p.setup = () => {
      const { colors } = this.options

      p.createCanvas(node.offsetWidth, node.offsetHeight)
      p.background(colors.background)

      p.stroke(colors.line)
      p.smooth()
      p.noFill()

      if (this.#disableAnimation) {
        p.noLoop()
      }
    }

    p.draw = (() => {
      const maxAngle = 1100
      const step = p.TWO_PI * 3 * 0.1 ** 2
      const speed = step * 0.1 ** 5
      const offset = {
        y: 0,
        z: 0
      }
      const spacing = 5

      return () => {
        p.clear()
        p.translate(p.width, 0)

        p.beginShape()
        for (let angle = 0; angle < maxAngle; angle += step) {
          // 対数螺旋を描く
          const radian = p.pow(1.06, angle)
          const x = (spacing + radian) * p.cos(angle)
          const y = (spacing + radian) * p.sin(angle)

          // `PLAY WITH US` と常に重ならないようにする
          // 見た目的に好みだったので、アニメーションでたまに重なるケースは考慮しない
          if (p.width * 0.5 < x && p.height * 0.4 < y) break

          const noise = p.noise(angle, offset.y, offset.z) + 1
          p.curveVertex(x * noise, y * noise)

          offset.y -= 2 * speed
          offset.z += 2 * speed
        }
        p.endShape()
      }
    })()
  }

  #init() {
    const { selector: node } = this.options
    const p = new p5((p) => this.#createSketch(p, { node }), node)

    return {
      resize: () => p.resizeCanvas(node.offsetWidth, node.offsetHeight),
      animate: (mode: 'stop' | 'start') => {
        if (this.#disableAnimation) return
        mode === 'stop' ? p.noLoop() : p.loop()
      }
    }
  }

  get #disableAnimation() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  draw() {
    const { resize, animate } = this.#init()

    // ウィンドウがリサイズされたらエフェクトもリサイズする
    window.addEventListener('resize', debounce(resize, 800))
    // 画面外に表示された場合はアニメーションを止める
    new IntersectionObserver((entries) =>
      animate(entries[0].isIntersecting ? 'start' : 'stop')
    ).observe(this.options.selector)
  }
}
