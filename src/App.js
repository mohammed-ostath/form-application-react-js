import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import { postsContext } from "./contexts/postsContext";
import NotFound from "./404";
import NewPost from "./NewPost";
import DeletePost from "./DeletePost";
import PostLayout from "./PostLayout";
function App() {
  let postsData = [
    {
      id: 1,
      title: "Post 1",
      body: "This is the body of post 1",
    },
    {
      id: 2,
      title: "Post 2",
      body: "This is the body of post 2",
    },
    {
      id: 3,
      title: "Post 3",
      body: "This is the body of post 3",
    },
  ];
  return (
    <postsContext.Provider value={postsData}>
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
          <Route path="/" element={<h1>home page</h1>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/posts" element={<PostLayout />}>
            <Route index element={<PostList />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
