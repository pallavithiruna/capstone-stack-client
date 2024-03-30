import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./css/Main.css";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";

function Main({questions}) {

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{questions && questions.length} Questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
              <Link to="/stack">Newest</Link>
              {/* <a href="/">Newest</a> */}
              </div>
              <div className="main-tab">
              <Link to="/stack">Active</Link>
                {/* <a href="/">Active</a> */}
              </div>
              <div className="main-tab">
                {/* <a href="/">More</a> */}
                <Link to="/stack">More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          {questions.map((_q,index) => (
            <>
            <div key={index} className="question">
              <AllQuestions question={_q} />
            </div>
            </>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default Main;