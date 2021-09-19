import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Navbar from "./components/navbar";
import PersonalData from "./components/portfolioJsx/personalData";
import PublicPreview from "./components/publicPreview";
import Qualifications from "./components/portfolioJsx/qualifications";
import SignUp from "./components/signup";
import { auth, firestore } from "./firebase";
import { userCreator } from "./redux/actions/userActions";
import ImageUploading from "./components/portfolioJsx/imageUploading"
import EducationInfo from "./components/portfolioJsx/educationInfo"
import Resume from "./components/portfolioJsx/resumePort"
import SocialHandle from "./components/portfolioJsx/socialHandle"
import Skill from "./components/portfolioJsx/skill";
import Portfolio1 from "./components/portfolioJsx/portfolio1";
import Portfolio2 from "./components/portfolioJsx/portfolio2";
import ProfessionalExperience from "./components/portfolioJsx/professionalExperience";
import PortfolioBase from "./components/portfolioJsx/portfolio";

import Resume1 from "./components/resumeJsx/resume1.jsx"
import Skills1 from "./components/resumeJsx/skills1"
import PersonalData1 from "./components/resumeJsx/personalData1"
import ImageUploading1 from "./components/resumeJsx/imageUploading1"
import EducationInfo1 from "./components/resumeJsx/educationInfo1"
import Project1 from "./components/resumeJsx/projects1"
import Resume3 from "./components/resumeJsx/resume3"
import ResumeBase from "./components/resumeJsx/resume"

import UserProfile from "./components/userProfile"

let App = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      dispatch(userCreator(user));
      if (user) {
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);

        let doc = await docRef.get();

        if (!doc.exists) {
          let arr=[];
          docRef.set({
            email,
            arr,
          });
        }
      }
    });

    return () => {
      unsub();
    };
  }, []) 

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/publicpreview/:rid">
            <PublicPreview />
          </Route>
          <Route path="/userProfile/:uid">
            <UserProfile />
          </Route>

          <Route path="/resumeJsx/resume1">
            <Resume1 />
          </Route>
          <Route path="/resumeJsx/resume3">
            <Resume3 />
          </Route>
          <Route path="/resumeJsx/resumebase">
            <ResumeBase />
          </Route>
          <Route path="/resumeJsx/skills1">
            <Skills1 />
          </Route>
          <Route path="/resumeJsx/personalData1">
            <PersonalData1 />
          </Route>
          <Route path="/resumeJsx/imageUploading1">
            <ImageUploading1 />
          </Route>
          <Route path="/resumeJsx/educationInfo1">
            <EducationInfo1 />
          </Route>
          <Route path="/resumeJsx/project1">
            <Project1 />
          </Route>

          <Route path="/portfolioJsx/professionalExperience">
            <ProfessionalExperience/>
          </Route>
          <Route path="/portfolioJsx/portfolioBase">
            <PortfolioBase/>
          </Route>
          <Route path="/portfolioJsx/educationInfo">
            <EducationInfo/>
          </Route>
          <Route path="/portfolioJsx/socialHandle">
            <SocialHandle/>
          </Route>
          <Route path="/portfolioJsx/portfolio1">
            <Portfolio1/>
          </Route>
          <Route path="/portfolioJsx/portfolio2">
            <Portfolio2/>
          </Route>
          <Route path="/portfolioJsx/skills">
            <Skill/>
          </Route>
          <Route path="/portfolioJsx/resumePort">
            <Resume/>
          </Route>
          <Route path="/portfolioJsx/userImg">
            <ImageUploading/>
          </Route>
          <Route path="/portfolioJsx/qualifications">
            <Qualifications />
          </Route>
          <Route path="/portfolioJsx/personal">
            <PersonalData />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
