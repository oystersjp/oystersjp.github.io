import { memoryList } from './MemoryList'

const Memories: React.FC = () => {
  return (
    <section id="memories" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="title text-center wow fadeInDown"
              style={{ visibility: 'visible', animationName: 'fadeInDown' }}
            >
              <h2>思い出</h2>
              <div className="border-meghna"></div>
            </div>
          </div>
          {memoryList.map((memory) => (
            <article
              className="col-lg-4 clearfix wow fadeInUp"
              data-category=""
              style={{ visibility: 'visible', animationName: 'fadeInUp' }}
              key={memory.title}
            >
              <div className="post-block mb-4">
                <div className="media-wrapper">
                  <img
                    className="img-fluid lozad"
                    alt={memory.alt}
                    src={require(`@/public${memory.imagePath}?width=600&height=400`)}
                    width={350}
                    height={233.33}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Memories
