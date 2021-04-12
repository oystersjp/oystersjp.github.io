import { productList } from '@/components/Products/ProductList'

const Products: React.FC = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="title text-center">
              <h2>作ってきたもの</h2>
              <div className="border-meghna"></div>
            </div>
          </div>
          {productList.map((product) => (
            <article
              className="col-lg-4 col-md-6 col-12 clearfix mb-4"
              key={product.title}
            >
              <div className="post-block">
                <div className="media-wrapper">
                  <img
                    className="img-fluid"
                    alt={product.alt}
                    src={require(`@/public${product.imagePath}`)}
                  />
                </div>
                <div className="content">
                  <h3>
                    {product.title}
                    {product.url !== null && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer noreferrer"
                      >
                        <span className="text-hide">{product.title}へ</span>
                        <i className="tf-ion-android-open"></i>
                      </a>
                    )}
                  </h3>
                  <p>
                    {product.content}
                    {product.tags.length !== 0 && (
                      <span className="d-block mt-2">
                        {product.tags.map((tag) => (
                          <span
                            className="badge badge-secondary products-tags"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
