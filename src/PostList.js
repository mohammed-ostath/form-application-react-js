import { Link } from "react-router-dom";
import { postsContext } from "./contexts/postsContext";
import { useContext } from "react";
export default function PostList() {
  const posts = useContext(postsContext);
  let postList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div>
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{postList}</>;
}
