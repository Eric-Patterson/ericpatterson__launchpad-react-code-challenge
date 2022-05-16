import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { editPostData } from "../../store/actions";
import { getDataSelector } from "../../store/selectors";

import classes from "./DeleteInfo.module.css";

function DeleteInfo(props) {
  const dispatch = useDispatch();

  const passengers = useSelector(getDataSelector);
  // -1 due to array starting at 0
  let postNumber = passengers[props.title - 1];
  console.log(postNumber.id);
  const deletePostData = (e) => {
    e.preventDefault();
    dispatch(
      editPostData({
        id: postNumber.id,
      })
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.deleteContainer}>
        <h1>Do you want to delete this post?</h1>
        <form onSubmit={deletePostData}>
          <div className={classes.btnContainer}>
            <Button>Delete</Button>
            <Button onClick={props.onClose}>Close</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DeleteInfo;
