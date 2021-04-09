import { CSSProperties } from 'react'
import { ABOUT_ITEMS, SLIDES } from './constants'

const useSlides = () => {
  return SLIDES.map((filename) => ({
    key: filename,
    image: require(`${filename}?width=750&height=500`)
  }))
}

const useAboutItems = () => {
  return ABOUT_ITEMS
}

const About: React.FC = () => {
  const slides = useSlides()
  const aboutItems = useAboutItems()

  return (
    <>
      <div className="section section-bg" />
      <section className="section about-2 padding-0" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 padding-0">
              <div className="about-slide">
                {slides.map((slide, index) => (
                  <img
                    key={slide.key}
                    style={
                      {
                        '--index': index,
                        '--length': slides.length
                      } as CSSProperties
                    }
                    className="about-slide__item"
                    src={slide.image}
                    width="375"
                    height="250"
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block js-about-content-block">
                <h2>若手ものづくり集団 Oysters</h2>
                <p>
                  Play With
                  Us!!をモットーに活動する若手(?)エンジニアの集団です。
                </p>
                <p>
                  Play With
                  Us!!には「Oystersはどんなことでも楽しければ目的達成！」という意味が込められています。
                </p>
                <div className="row">
                  {aboutItems.map((item) => (
                    <div key={item.title} className="col-lg-6">
                      <div className="media">
                        <div className="align-self-start mr-3">
                          <i className={item.icon} />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">{item.title}</h4>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section section-bg" />
    </>
  )
}

export default About
