import React,{useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
import axios from "axios";
import RightSidebar from "../RightSidebar/RightSidebar";


function Index() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios.get("https://capstone-stack-server.onrender.com/api/question").then((res) => {
        setQuestions(res.data.reverse());
         console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      });
    }
    getQuestion();
  }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
        <RightSidebar/>
      </div>
    </div>
  );
}
export default Index;