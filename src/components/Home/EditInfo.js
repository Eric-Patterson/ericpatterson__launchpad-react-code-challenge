import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { editPostData } from "../../store/actions";
import { getDataSelector } from "../../store/selectors";

import classes from "./EditInfo.module.css";

function EditInfo(props) {
  const dispatch = useDispatch();

  const passengers = useSelector(getDataSelector);
  // -1 due to array starting at 0
  let postNumber = passengers[props.title - 1];

  console.log(postNumber.id);
  const editItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPostData({
        id: postNumber.id,
        userId: e.target.userId.value,
        title: e.target.title.value,
        body: e.target.body.value,
      })
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.modalContainer}>
        <h1>Edit Information</h1>
        <form onSubmit={editItemHandler} className={classes.addForm}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            defaultValue={postNumber.title}
          />

          <label htmlFor="body">Body</label>
          <input
            name="body"
            id="body"
            type="text"
            defaultValue={postNumber.body}
          />

          <label htmlFor="userId">User Id</label>
          <input
            name="userId"
            id="userId"
            type="number"
            defaultValue={postNumber.userId}
          />
          <div className={classes.btnContainer}>
            <Button>Edit Info</Button>
            <Button onClick={props.onClose}>Close</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default EditInfo;
