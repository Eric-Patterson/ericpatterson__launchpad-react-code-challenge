import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../../store/posts-slice";
import { useEffect, useState } from "react";
import Button from "../UI/Button";

const PostData = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadposts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Button onClick={props.onShowCart}>Add</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default PostData;
