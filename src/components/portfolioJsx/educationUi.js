import { useSelector } from "react-redux";
import "../portfolioCss/style.css"
let EducationUi = () => {

    let edudetails = useSelector((state) => state.education);
    let {schoolName10,schoolMarks10,schoolName12,schoolMarks12,CollegeName,degree,collegeMarks,skills,currCompany,courseWork} = edudetails;
    return (
        <>
            <main id="main" style={{backgroundColor:"#5aacb7" ,width:"65%" ,height:"100%" , position:"fixed",right:"0",top:"53px"}}>
                <section id="about" className="about">
                    <div className="container" style={{width:"100%"}}>


                        <div className="row">
                            <div className="section-title">
                                <h2 style={{color:"white"}}>Educational background</h2>
                            </div>
                            <div className="col-lg-12 pt-4  content">
                                <h3> {skills}</h3>
                                {/* <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p> */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>SchoolName class-10:</strong> <span>{schoolName10}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>schoolMarks class-10</strong> <span>{schoolMarks10}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>SchoolName class-12:</strong> <span>{schoolName12}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>schoolMarks class-12:</strong> <span>{schoolMarks12}</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>CollegeName:</strong> <span>{CollegeName}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{degree}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>College-Marks:</strong> <span>{collegeMarks}</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-12">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Skills:</strong> <span>{skills}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>currCompany/student:</strong> <span>{currCompany}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>CourseWork:</strong> <span>{courseWork}</span></li>
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