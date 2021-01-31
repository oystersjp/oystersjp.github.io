// TODO: ファイルから読み込む
const memberList = [
  {
    name: 'Oyster Taro',
    image: '/images/ogp.jpg',
    twitter: 'twitter',
    github: 'oystersjp',
    website: 'http://oystersjp.github.io'
  },
  {
    name: 'Oyster Hanako',
    image: '/images/ogp.jpg',
    twitter: 'twitter',
    github: 'oystersjp',
    website: 'http://oystersjp.github.io'
  }
]

// TODO: memberListをpropsで受け取る
export function MemberList(): JSX.Element {
  return (
    <section id="team" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="title text-center wow fadeInUp"
              data-wow-duration="500ms"
            >
              <h2>
                メンバー<span className="color"></span>
              </h2>
              <div className="border-meghna" />
            </div>
          </div>

          {memberList.map((member) => (
            <div
              key={member.name}
              className="col-lg-4 col-md-4 col-12 wow fadeInDown mb-2"
              data-wow-duration="500ms"
            >
              <div className="team-member media p-3">
                {/* TODO: inlineCSSをやめる */}
                {/* TODO: next/imageを使う */}
                <img
                  src={member.image}
                  style={{ objectFit: 'cover' }}
                  className="border rounded-circle align-self-center lozad mr-3"
                  width={72}
                  height={72}
                  alt={`${member.name}の画像`}
                />

                <div className="member-meta media-body text-truncate align-self-center p-0">
                  <h4
                    className="h6 font-weight-bold text-truncate m-0"
                    style={{ maxWidth: '100%' }}
                  >
                    {member.name}
                  </h4>

                  {/* TODO: linkの配列を分離 */}
                  {(member.twitter || member.github || member.website) && (
                    <ul className="list-inline mt-2 mb-0" role="group">
                      {[
                        {
                          href: `https://twitter.com/${member.twitter}`,
                          title: 'twitter',
                          icon: 'tf-ion-social-twitter'
                        },
                        {
                          href: `https://github.com/${member.github}`,
                          title: 'Github',
                          icon: 'tf-ion-social-github'
                        },
                        {
                          href: member.website,
                          title: 'ウェブサイト',
                          icon: 'tf-ion-ios-world'
                        }
                      ].map((link) => (
                        <li key={link.href} className="list-inline-item">
                          <a
                            href={link.href}
                            className="btn btn-outline-dark py-0 px-1"
                            title={link.title}
                            rel="noreferrer noreferrer"
                            target="_blank"
                          >
                            <i className={link.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MemberList
