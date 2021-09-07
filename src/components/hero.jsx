
import { useSelector } from "react-redux";
import "./css/style.css"
let Hero = () => {

    let details = useSelector((state) => state.details);

    let { fname,oneWord} = details;
    let img = useSelector(state => state.userImage);
    return (
        <>
            <div className="edit" style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>
                <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                    <div class="hero-container" data-aos="fade-in">
                        <h1>{fname}</h1>
                        <p>I'm <span class="typed"> {oneWord}</span></p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero;