import { useSelector } from "react-redux";
import "../portfolioCss/style.css"
let AboutUi1 = () => {
    let details = useSelector((state) => state.details);
    let img=useSelector(state=>state.userImage)
    let {email, phone, city, state, age,birthday,description ,tech} = details;
    return (
        <>

            <main id="main" style={{backgroundColor:"#5aacb7" ,width:"65%" ,height:"100%" , position:'fixed',
          right:"0",
          top:"53px",}}>
                <section id="about" className="about">
                    <div className="container" style={{width:"100%"}}>

                        <div className="row">
                        <div className="section-title">
                            <h2 style={{color:"white"}}>About</h2>
                            <p>{description}</p>
                        </div>

                            <div className="col-lg-4" data-aos="fade-right">
                                <img src={img} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                <h3>{tech}</h3>
                                {/* <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p> */}
                                <div className="row">
                                    <div className="col-lg-10">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{birthday}</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> */}
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{phone}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{city+","+state}</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-10">
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{age}</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{}</span></li> */}
                                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{email}</span></li>
                                            {/* <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> */}
                                        </ul>
                                    </div>
                                </div>
                                {/* <p>
                                    
                                </p> */}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
            )
}

export default AboutUi1;