
import { useSelector } from "react-redux";
import "../portfolioCss/style.css"
let Hero = () => {

    let details = useSelector((state) => state.details);

    let { fname,oneWord} = details;
    let img = useSelector(state => state.userImage);
    // console.log(img+"hello");
    // console.log("hello"+img);
    return (
        <>
            <div className="edit" style={{
                backgroundImage: `url("${img}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                height:"97%",
                width:"63%",
            }}>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                    <div className="hero-container" data-aos="fade-in">
                        <h1>{fname}</h1>
                        <p>I'm <span className="typed"> {oneWord}</span></p>
                    </div>
                </section>
            </div>
            {/* <img src={img} alt="" /> */}
        </>
    )
}

export default Hero;