import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/postsContext";
import { Link } from "react-router-dom";
export default function PostDetails({ title, body }) {
  const posts = useContext(postsContext);
  const { postId } = useParams();

  const post = posts.find((p) => {
    return p.id === +postId;
  });
  console.log(post);
  if (!post) {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>The post you are looking for does not exist.</p>
        <Link to="/posts">
          <button>Return to posts</button>
        </Link>
      </div>
    );
  }
  return (
    <>
      <h2>post details page</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
