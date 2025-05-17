import { Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <div style={{ width: "100%", background: "green" }}>
        <h1>Post Layout</h1>
        <p>this is the post layout</p>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
