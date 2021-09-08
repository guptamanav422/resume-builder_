import { useSelector } from "react-redux";
import "../css/style.css";

let A = () => {
    let details = useSelector((state) => state.details);

    let { fname, oneWord } = details;
    let img = useSelector((state) => state.userImage);
    let social = useSelector((state) => state.social);

    let { tech, email, phone, city, state, age, birthday, description } =
    useSelector((state) => state.details);

    let edudetails = useSelector((state) => state.education);
    let {
        schoolName10,
        schoolMarks10,
        schoolName12,
        schoolMarks12,
        CollegeName,
        Degree,
        collegeMarks,
        skills,
        currCompany,
        courseWork,
    } = edudetails;

    let { projects, professionalExperience } = useSelector(
        (state) => state.resume
    );

    return < > < />;
};

export default A;