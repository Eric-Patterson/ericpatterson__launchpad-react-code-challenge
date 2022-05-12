import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../../store/posts-slice";
import { useEffect } from "react";
import Button from "../UI/Button";

const PostData = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);

  useEffect(() => {
    dispatch(loadposts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>Title: {post.title}</h2>
          <p>Post Number: {post.id}</p>
          <p>Description: {post.body}</p>
          <Button onClick={props.onShowCart}>Add</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default PostData;
