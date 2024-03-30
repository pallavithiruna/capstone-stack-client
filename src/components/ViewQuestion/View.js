import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import "../StackOverflow/css/index.css";
import MainQuestion from "./MainQuestion";
import './view.css'
import RightSidebar from "../RightSidebar/RightSidebar";

function Views() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
        <RightSidebar/>
      </div>
    </div>
  );
}

export default Views;