import Logo from '@/components/Logo/Logo'
import Link from 'next/link'

const Footer: React.FC<{ logoText: string }> = (props) => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-one">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="500ms">
          <div className="col-xl-12">
            <div className="copyright text-center">
              <p>
                <Link href="/">
                  <a title={props.logoText}>
                    <Logo />
                  </a>
                </Link>
              </p>
              <p className="small mb-1">
                Design And Developed by{' '}
                <a href="http://www.themefisher.com/">Themefisher Team</a>.
              </p>
              <p className="small mt-0">&copy; 2019-{year} Oysters</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
