import React,{useState,useEffect} from 'react';
import axios from "axios";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import { Avatar } from '@mui/material';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import { Link } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import parse from 'html-react-parser';
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function MainQuestion() {
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState("");
  const [questionData, setQuestionData] = useState();
  const [comment, setComment] = useState("");
  const user = useSelector(selectUser);
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");
  console.log(id)

   const handleQuill = (value) => {
    setAnswer(value);
  };



  useEffect(() => {
    async function getQuestionDetails() {
      await axios
        .get(`https://capstone-stack-server.onrender.com/api/question/${id}`)
        .then((res) => 
        {
          // console.log(res.data[0])
        setQuestionData(res.data)
        }
        )
        .catch((err) => console.log(err));
    }
    getQuestionDetails();
  }, [id]);
 

  async function getUpdatedAnswer() {
    await axios
      .get(`https://capstone-stack-server.onrender.com/api/question/${id}`)
      .then((res) => {
        setQuestionData(res.data[0])
      })
      .catch((err) => console.log(err));
  }


  const handleSubmit = async () => {
    const body = {
      question_id: id,
      answer: answer,
      user: user,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("https://capstone-stack-server.onrender.com/api/answer", body, config)
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
         getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
        user: user,
      };
      await axios.post(`https://capstone-stack-server.onrender.com/api/comment/${id}`, body).then((res) => {
        setComment("");
        setShow(false);
        getUpdatedAnswer();
        console.log(res.data);
        alert("comment added successfully")
      });
    }

    // setShow(true)
  };

  return (
    <div>
     
      <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">
            {questionData?.title} 
            {/* This is question title */}
            </h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
          {/* <a href="/add-question">
            <button>Ask Question</button>
          </a> */}
        </div>
        <div className="main-desc">
          <div className="info">
            {/* <p>Timestamp</p> */}
            <p>
              
              <span>{new Date(questionData?.created_at).toLocaleString()}</span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <BookmarkIcon />
                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
               {/* <div>{parse(questionData?.body)}</div>   */}
               <p>{(questionData?.body)}</p>  

              <div className="author">
                <small>
                  asked {new Date(questionData?.created_at).toLocaleString()}
                </small>
                <div className="auth-details">
                  {/* <Avatar {...stringAvatar(questionData?.user?.displayName)} /> */}
                  <Avatar src={questionData?.user?.photo} />
                  <p>
                   
                    {questionData?.user?.displayName?questionData?.user?.displayName:String(questionData?.user?.email).split('@')[0]}

                  </p>
                  {/* <p>
                    {questionData?.user?.displayName
                      ? questionData?.user?.displayName
                      : "Natalia lee"}
                  </p> */}
                </div>
              </div>





              <div className="comments">
                <div className="comment">
                    <p>This is comment - <span>User name</span><small>Timestamp</small></p>
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                    value={comment}
                    onChange={(e)=>setComment(e.target.value)}
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                     onClick={handleComment}
                      style={{
                        maxWidth: "fit-content",
                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
           {/* {questionData && questionData?.answerDetails.length}  */}
           Answers 
          
          </p>
          {/* (140-180 connnection) */}
          {/* {questionData?.answerDetails.map((_q) => (
            <> */}
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                // key={_q._id}
                className="all-questions-container"
              >
                <div className="all-questions-left">
                  <div className="all-options">
                    <p className="arrow">▲</p>

                    <p className="arrow">0</p>

                    <p className="arrow">▼</p>

                    <BookmarkIcon />

                    <HistoryIcon />
                  </div>
                </div>

                <div className="question-answer">
                  {/* {ReactHtmlParser(_q.answer)} */}
                  <p>This is question body</p>
                  <div className="author">
                    <small>
                      asked timestamp
                      {/* asked {new Date(_q.created_at).toLocaleString()}  */}
                    </small>
                    <div className="auth-details">
                      {/* <Avatar {...stringAvatar(_q?.user?.displayName)} /> */}
                      <Avatar/>
                      <p>Author name</p>
                      {/* <p>
                        {_q?.user?.displayName
                          ? _q?.user?.displayName
                          : "Natalia lee"}
                      </p> */}
                    </div>
                  </div>
                </div>


              </div>
            {/* </>
          ))} */}
        </div>
        {/* <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div> */}
      </div>






      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          value={answer}
          onChange={handleQuill}
          // modules={Editor.modules}
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
      type="submit"
        onClick={handleSubmit}
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
    </div>
  )
}

export default MainQuestion
