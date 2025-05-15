import { useParams } from "react-router-dom";
export default function PostDetails({ title, body }) {
  const { postId } = useParams();
  console.log(postId);
  return (
    <>
      <h2>post details page</h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}
