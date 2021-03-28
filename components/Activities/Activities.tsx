import Activity from "@/types/Activity"

const Activities: React.FC<{activityList: Activity[]}> = (props) => (
  <section id="activities" className="section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div
            className="title text-center wow fadeInDown"
            style={{ visibility: 'visible', animationName: 'fadeInDown' }}
          >
            <h2>活動内容</h2>
            <div className="border-meghna"></div>
          </div>
        </div>
        {props.activityList.map((activity) => 
                <article
                className="col-lg-4 col-md-6 col-12 clearfix wow fadeInUp mb-4"
                data-wow-duration="500ms"
                style={{
                  visibility: 'visible',
                  animationDuration: '500ms',
                  animationName: 'fadeInUp'
                }}
              >
                <div className="post-block">
                  <div className="media-wrapper">
                    <img
                      className="img-fluid lozad"
                      alt={activity.alt}
                      src={require(`@/public${activity.imagePath}`)} 
                      data-loaded="true"
                      width = {600}
                      height = {400}
                      style = {{}}
                    />
                  </div>
                  <div className="content">
                    <h3>{activity.title}</h3>
                    <p>{activity.content}</p>
                    <a
                      className="btn btn-transparent"
                      href={activity.url}
                      target="_blank"
                      rel="noreferrer noreferrer"
                    >
                      {activity.linkTitle} <i className="tf-ion-android-open"></i>
                    </a>
                  </div>
                </div>
              </article>
        )}
      </div>
    </div>
  </section>
)

export default Activities
