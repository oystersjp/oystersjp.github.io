const Contact: React.FC = () => (
  <section
    id="contact"
    className="call-to-action section-sm bg-1 overly"
    style={{ backgroundImage: "url('/images/content/bg.jpeg')" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="call-to-action__content">
            <h2 className="mb-4">Oystersの活動に興味がある方へ</h2>
            <p className="mb-3">
              有意義な交流が出来るように、エンジニアリングや個人開発にモチベーションがある人をご招待しています
              <br />
              興味がある方はメンバーの誰か、または{' '}
              <a href="https://twitter.com/pinkumohikan">
                <i className="tf-ion-social-twitter"></i>@pinkumohikan
              </a>{' '}
              へご連絡下さい
            </p>
            <a
              href="https://twitter.com/pinkumohikan"
              className="btn btn-main page-scroll text-lowercase"
              target="_blank"
              rel="noreferrer noreferrer"
            >
              <i className="tf-ion-social-twitter"></i>@pinkumohikan
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
