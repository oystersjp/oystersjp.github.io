import { FC } from 'react'

const Hero: FC = () => (
  <section
    className="hero-area"
    style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
  >
    <div className="block w-100">
      <h1 className="text-uppercase mb-1">Play With Us!!</h1>
      <p>若手ものづくり集団</p>
    </div>
  </section>
)

export default Hero
