import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
function App() {
  const title = "Loan project";
  return (
    <div className="App">
      {/* <LoanForm /> */}
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/hello">
          <button>hello</button>
        </Link>
      </div>
      <Link to="/posts">
        <button>posts</button>
      </Link>
      {/* Routes */}
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/" element={<h1>home page</h1>} />
        <Route path="/PostDetails/:postId" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
