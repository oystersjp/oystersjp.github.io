import p5 from 'p5'
import { debounce } from '../utils'
import { Frame } from './debug/Frame.ts'
import { Point } from './debug/Point.ts'

type Options = {
  selector: HTMLElement
  colors: { line: string; background: string }
  enableDebug?: boolean
}

export class Effect {
  options: Required<Options>

  constructor(options: Options) {
    this.options = { enableDebug: false, ...options }
  }

  #createSketch(p: p5, { node }: { node: HTMLElement }) {
    // VRTを考慮して同じパターンが出力されるようにSeed値を設定する
    p.noiseSeed(100)

    p.setup = () => {
      const { colors } = this.options

      p.createCanvas(node.offsetWidth, node.offsetHeight)
      p.background(colors.background)

      if (this.#disableAnimation) {
        p.noLoop()
      }
    }

    p.draw = (() => {
      const { colors } = this.options
      const step = p.TWO_PI * 3 * 0.1 ** 2
      const speed = step * 0.1 ** 5
      const offset = {
        y: 0,
        z: 0
      }
      const spacing = 5
      const { drawEdgeCoord, drawPoint } = this.#debug(
        p,
        this.options.enableDebug
      )

      return () => {
        p.clear()
        p.translate(p.width, 0)

        p.beginShape()
        for (let theta = 0; theta < p.width; theta += step) {
          // 対数螺旋を描く
          const radian = p.pow(1.06, theta)
          const noise = p.noise(theta, offset.y, offset.z) + 1

          const x = p.round((spacing + radian) * p.cos(theta) * noise, 2)
          const y = p.round((spacing + radian) * p.sin(theta) * noise, 2)

          // 画面外の場合は描画を終了する
          if (x < -p.width && p.height < y) break

          p.curveVertex(x, y)
          drawPoint({ x, y, theta })

          offset.y -= 2 * speed
          offset.z += 2 * speed
        }

        p.stroke(colors.line)
        p.strokeWeight(1)
        p.smooth()
        p.noFill()
        p.endShape()

        drawEdgeCoord()
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

  #debug(p: p5, enable: boolean) {
    p.mouseClicked = enable
      ? () => {
          enable = !enable
          return false
        }
      : () => {}

    return {
      drawEdgeCoord: () => enable && new Frame(p).display(),
      drawPoint: (options: ConstructorParameters<typeof Point>['1']) =>
        enable && new Point(p, options).display()
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
