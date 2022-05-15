import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { editPostData } from "../../store/actions";
import { getPassengers } from "../../store/selectors";

// import { postActions } from "../../store/posts-slice";

function EditInfo(props) {
  const dispatch = useDispatch();

  const passengers = useSelector(getPassengers);
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
      <div>testing add info</div>
      <form onSubmit={editItemHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            defaultValue={postNumber.title}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input
            name="body"
            id="body"
            type="text"
            defaultValue={postNumber.body}
          />
        </div>
        <div>
          <label htmlFor="userId">User Id</label>
          <input
            name="userId"
            id="userId"
            type="number"
            defaultValue={postNumber.userId}
          />
        </div>
        <Button>Edit Info</Button>
      </form>
      <Button onClick={props.onClose}>Close</Button>
    </Modal>
  );
}

export default EditInfo;
