import "./css/style.css"
import { useSelector } from "react-redux";
let ResumeUi = () => {

  let details = useSelector((state) => state.details);
  let { email, phone, city, state,fname,description } = details;

  details = useSelector((state) => state.resume);
  let { projects, professionalExperience } = details;
  city += ", ";
  return (
    <>
      <section id="resume" class="resume" style={{ height: "100%", width: "50%" }}>
        <div class="container" style={{ height: "100%", width: "100%" }}>

          <div class="section-title">
            <h2>Resume</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>{fname}</h4>
                <p><em>{description}</em></p>
                <ul>
                  <li>{city + state}</li>
                  <li>{phone}</li>
                  <li>{email}</li>
                </ul>
              </div>

            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title"> Personal Projects</h3>
              <div class="resume-item">
                <h4>{projects[0].name}</h4>
                <h5>{projects[0].timePeriod}</h5>
                <p><em>{projects[0].technology}</em></p>
                <ul>
                  {
                    projects[0].description.split(".").map((st) => {
                      return <li> {st}</li>
                    })
                  }
                </ul>
              </div>
              <div class="resume-item">
                <h4>{projects[1].name}</h4>
                <h5>{projects[1].timePeriod}</h5>
                <p><em>{projects[1].technology}</em></p>
                {/* <p>{projects[1].description}</p> */}
                <ul>
                  {
                    projects[1].description.split(".").map((st) => {
                      return <li> {st}</li>
                    })
                  }
                </ul>
              </div>
              {
                  (professionalExperience.position !== "") ?
                    <div> <h3 class="resume-title"> Professional Experience</h3>
                      <div class="resume-item">
                        <h4> {professionalExperience.position}</h4>
                        <h5> {professionalExperience.timePeriod}</h5>
                        <h5> {professionalExperience.companyName}</h5>
                        <p><em>{professionalExperience.technology}</em></p>
                        <ul>
                          {
                            professionalExperience.description.split(".").map((st) => {
                              return <li> ${st}</li>
                            })
                          }
                        </ul>
                      </div>
                    </div> : ""
                }
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ResumeUi;