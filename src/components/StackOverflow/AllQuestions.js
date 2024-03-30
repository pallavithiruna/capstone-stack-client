// import { Avatar } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import React, { useState } from "react";
import "./css/AllQuestions.css";
import ReactHtmlParser from "html-react-parser";
import { Link } from "react-router-dom";
// import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({question}) {

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
    console.log(question?.tags[0])
//   let tags = JSON.parse(data?.tags[0]);
    let tags = JSON.parse(question?.tags[0]);
    // console.log(tags)
//  let tags=[];
  
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              {/* <p>{data?.answerDetails?.length}</p> */}
              <p>{question?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          {/* <Link to={`/question?q=${data?._id}`}>{data.title}</Link> */}
          <Link to={`/question?q=${question?._id}`}>{question?.title}</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              width: "90%"
            }}
          >
            <div>
                {/* {ReactHtmlParser(truncate(data.body, 200))} */}
                {ReactHtmlParser(truncate(question?.body,200)) }
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <>
              <span className='question-tags'> {_tag} </span>
              </>
            ))}
            
          </div>

          <div className="author">
            <small>{new Date(question?.created_at).toLocaleString()}</small>
            <div className="auth-details">
              <Avatar src={question?.user?.photo} />
              <p>
                {question?.user?.displayName?question?.user?.displayName:String(question?.user?.email).split('@')[0]}
                {/* {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;