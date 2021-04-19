import { Member } from '@/types/Member'
import SocialAccountList from './SocialAccountList'

export function MemberList({ members }: { members: Member[] }): JSX.Element {
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

          {members.map((member) => (
            <div
              key={member.name}
              className="col-lg-4 col-md-4 col-12 wow fadeInDown mb-2"
              data-wow-duration="500ms"
            >
              <div className="team-member media p-3">
                <img
                  src={require(`@/public${member.image}?width=144&height=144`)}
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
                  <SocialAccountList member={member} />
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
