import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassengers } from "../../store/actions";
import { getPassengers } from "../../store/selectors";
import Button from "../UI/Button";

const PostData = (props) => {
  const dispatch = useDispatch();
  const passengers = useSelector(getPassengers);

  useEffect(() => {
    dispatch(fetchPassengers());
  }, [dispatch]);

  // console.log(passengers, "total");

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      {passengers.map((post) => (
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
