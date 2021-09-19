import { useHistory, useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { firestore } from "../firebase";
import "./css/userProfile.css"

let UserProfile=()=>{

    let {uid}= useParams();

    let [previewData, setPreviewData] = useState(null);
    let history= useHistory();
    useEffect(() => {
        firestore
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
            let {arr} =doc.data();
            setPreviewData(arr);
        });

    },[]) 
    console.log(uid);
    return(
        <>
        <section class="hero-section1">
            <div class="card-grid1">

            {
                    (previewData) ?(
                        previewData.map((ele,ind)=>{
                           return <div class="card1" onClick={()=>{
                                        history.push(`/publicpreview/${ele}`)
                                    }}>
                                    <div class="card__background" style={{backgroundImage:"url(https://d.novoresume.com/images/doc/basic-resume-template.png)"}}> </div>
                                    <div class="card__content">
                                        <h3 class="card__heading">card {ind+1}</h3>
                                    </div>
                                    </div>
                        })
                    ):""
            }
            </div>
        </section>
        </>
    )
}

export default UserProfile;