import { useSelector } from "react-redux";
import "./css/style.css"
let EducationUi = () => {

    let edudetails = useSelector((state) => state.education);
    let {schoolName10,schoolMarks10,schoolName12,schoolMarks12,CollegeName,Degree,collegeMarks,skills,currCompany,courseWork} = edudetails;
    return (
        <>
            <main id="main" style={{width:" 50%"}}>
                <section id="about" class="about">
                    <div class="container">

                        <div class="section-title">
                            <h2>Educational background</h2>
                        </div>

                        <div class="row">
                            {/* <div class="col-lg-4" data-aos="fade-right">
                                <img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
                            </div> */}
                            <div class="col-lg-12 pt-4  content">
                                <h3> {skills}</h3>
                                {/* <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p> */}
                                <div class="row">
                                    <div class="col-lg-12">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>SchoolName Class-10:</strong> <span>{schoolName10}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>schoolMarks class-10</strong> <span>{schoolMarks10}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>SchoolName Class-12:</strong> <span>{schoolName12}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>schoolMarks class-12:</strong> <span>{schoolMarks12}</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-12">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>CollegeName:</strong> <span>{CollegeName}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{Degree}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>College-Marks:</strong> <span>{collegeMarks}</span></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-12">
                                        <ul>
                                            <li><i class="bi bi-chevron-right"></i> <strong>Skills:</strong> <span>{skills}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>currCompany/student:</strong> <span>{currCompany}</span></li>
                                            <li><i class="bi bi-chevron-right"></i> <strong>CourseWork:</strong> <span>{courseWork}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
            )
}

export default EducationUi;