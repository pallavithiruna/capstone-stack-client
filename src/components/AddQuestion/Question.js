import React,{useState} from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6
import { TagsInput } from "react-tag-input-component";
import './Question.css';
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Question() {

  const user = useSelector(selectUser);
  // console.log(user)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tag, setTag] = useState([]);
  const navigate = useNavigate();
  const handleQuill = (value) => {
    setBody(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title !== "" && body !== "") {
      const bodyJSON = {
        title: title,
        body: body,
        tags: JSON.stringify(tag),
        user: user,
      };
      await axios
        .post("https://capstone-stack-server.onrender.com/api/question",bodyJSON)
        .then((res) => {
          //  console.log(res);
          alert("Question added successfully");
          navigate("/stack");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
     
      <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 data-role="tagsinput"
                  data-tag-trigger="Space"
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
                 value={body}
                 onChange={handleQuill}
                  className="react-quill"
                  theme="snow"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>
                {/* <input
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                 type="text" placeholder="Add question title"/> */}
                <TagsInput
                value={tag}
                onChange={setTag}
                  name="fruits"
                  placeHolder="press enter to add new tag"
                />
              </div>
            </div>
          </div>
        </div>

        <button 
        type="submit"
        onClick={handleSubmit}
        className="button">
          Add your question
        </button>
      </div>
    </div>
    </div>
  )
}

export default Question
