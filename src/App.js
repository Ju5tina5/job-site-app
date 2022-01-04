import './App.css';
import { Routes, Route } from "react-router-dom";
import {useState} from "react";
import Home from "./pages/Home";
import JobsAll from "./pages/JobsAll";
import PostJob from "./pages/PostJob";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import SingleJobPost from "./pages/SingleJobPost";



function App() {

  const [getJobPosts, setJobPosts] = useState([]);


  return (
    <div className="mainWrapper d-flex flex-column">
    <Toolbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={'/allJobs'} element={<JobsAll jobs={getJobPosts}/>} />
        <Route path={'/postJob'} element={<PostJob />}/>
        <Route path={'/singleJob/:id'} element={<SingleJobPost />}/>
        <Route path={'*'} element={<Error />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
