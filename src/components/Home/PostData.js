import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassengers } from "../../store/actions";
import { getPassengers } from "../../store/selectors";
import Button from "../UI/Button";
import { useState } from "react";

const PostData = (props) => {
  // state for rearch
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const passengers = useSelector(getPassengers);

  useEffect(() => {
    dispatch(fetchPassengers());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search by ID"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {/* filters the api first, then checks for number{id} and maps over the filtered data */}
      {passengers
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.id === parseInt(searchTerm, 10)) {
            console.log(searchTerm);
            return val;
          }
        })
        .map((post) => (
          <div key={post.id}>
            <h2>Title: {post.title}</h2>
            <p>Post Number: {post.id}</p>
            <p>Description: {post.body}</p>
            <Button onClick={props.onShowCart}>Add</Button>
            <Button
              onClick={() => {
                props.showEditCart();
                props.sendToChild(post.id);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                props.showDeleteCart();
                props.sendToChild(post.id);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
    </div>
  );
};

export default PostData;
