import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";
let posts = [
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
export default function PostList() {
  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to="/PostDetails">
        <div>
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postList}</>;
}
