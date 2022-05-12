import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../../store/posts-slice";
import { useEffect } from "react";

const PostData = () => {
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
        </div>
      ))}
    </div>
  );
};

export default PostData;
