import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../store/actions";
import { getDataSelector } from "../../store/selectors";
import Button from "../UI/Button";
import { useState } from "react";

import classes from "./PostData.module.css";

const PostData = (props) => {
  // state for rearch
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const posts = useSelector(getDataSelector);

  useEffect(() => {
    dispatch(getPostData());
  }, [dispatch]);

  return (
    <main>
      <div className={classes.searchContainer}>
        <label> Search: </label>
        <input
          type="text"
          placeholder="Search by ID"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      {/* filters the api first, then checks for number{id} and maps over the filtered data */}
      <div className={classes.postContainer}>
        {posts
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.id === parseInt(searchTerm, 10)) {
              console.log(searchTerm);
              return val;
            }
          })
          .map((post) => (
            <div key={post.id} className={classes.posts}>
              <h1>#{post.id}</h1>
              <hr />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div className={classes.buttonContainer}>
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
            </div>
          ))}
      </div>
    </main>
  );
};

export default PostData;
