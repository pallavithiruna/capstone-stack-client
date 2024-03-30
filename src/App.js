import "./App.css";
import {
  BrowserRouter ,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Index from "./components/StackOverflow";
import Question from "./components/AddQuestion/Question";
import Views from "./components/ViewQuestion/View";
import Auth from "./components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import Sample from "./components/AddQuestion/sample";
import Aboutus from "./components/About-us/about";
import Footer from "./components/Footer/Footer";
import Tags from "./components/Tags/Tags";
import Sidebar from "./components/StackOverflow/Sidebar";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      
    });
  }, [dispatch]);




// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? (
//           <Component {...props} />
//         ) : (
//           <Navigate
//             to={{
//               pathname: "/auth",
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//         )
//       }
//     />
//   );

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path={'/'} element={<Auth/>}/>
          <Route exact path="/stack" element={<Index/>} />
          <Route path="/add-question" element={<Question/>}/>
          <Route path="/question"  element={<Views/>}/>
          <Route exact  path='/about' element={<Aboutus/>}/>
          <Route path='/tags' element={ <Tags/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;