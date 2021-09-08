
import { useSelector } from "react-redux";
let SocialHandleUi = () => {
    let social = useSelector(
        (state) => state.social
    );

    let details = useSelector((state) => state.details);
    let { fname } = details;
    let img = useSelector(state => state.userImage);

    // const characteristics = Object.entries(social).map((key, i) => {
    //     // console.log(key[i]);
    //     return (
    //         <a href={key[i]} class="twitter"><i class="bx bxl-twitter"></i></a>
    //     );
    // })

    // console.log(characteristics);
    console.log(social)
    return (
        <>
            <div class="profile" style={{ height: "92vh", width: "50%",display:"flex", flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
                <img src={img} alt="" class="img-fluid rounded-circle" style={{maxWidth:"60%"}}/>
                <h1 class="text-light"><a href="index.html">{fname}</a></h1>
                <div class="social-links mt-3 text-center">
                    {Object.keys(social).map(function (keyName, keyIndex) {
                        return (
                            <a href={social[keyName]} rel="noreferrer" 
                            style={{fontSize:"2rem", color:"blue", display:"block" ,cursor:"pointer"}}target="_blank" class="twitter"> {keyName}</a>
                        )
                    })}
                    {/* <a href="." class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="." class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="." class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="." class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="." class="linkedin"><i class="bx bxl-linkedin"></i></a> */}
                </div>
            </div>

        </>
    )
}

export default SocialHandleUi;