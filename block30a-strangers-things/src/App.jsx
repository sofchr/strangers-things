import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./components/AllPosts";
import SinglePost from "./components/SinglePost";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1>Stranger's Things</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/:id" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
