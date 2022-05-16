import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { sendPostData } from "../../store/actions";

import classes from "./AddInfo.module.css";

function AddInfo(props) {
  const dispatch = useDispatch();
  const addItemHandler = (e) => {
    e.preventDefault();
    dispatch(
      sendPostData({
        userId: e.target.userId.value,
        title: e.target.title.value,
        body: e.target.body.value,
      })
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.modalContainer}>
        <h1>Add new information</h1>
        {/* react form with title, body, userId */}
        <form onSubmit={addItemHandler} className={classes.addForm}>
          <label htmlFor="title">Title</label>
          <input name="title" id="title" type="text" />

          <label htmlFor="body">Body</label>
          <input name="body" id="body" type="text" />

          <label htmlFor="userId">User Id</label>
          <input name="userId" id="userId" type="number" />

          <div className={classes.btnContainer}>
            <Button>Add New Info</Button>
            <Button onClick={props.onClose}>Close</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddInfo;
