import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { editPostData } from "../../store/actions";
import { getPassengers } from "../../store/selectors";

// import { postActions } from "../../store/posts-slice";

function DeleteInfo(props) {
  const dispatch = useDispatch();

  const passengers = useSelector(getPassengers);
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
      <div>Do you want to delete this post?</div>
      <form onSubmit={deletePostData}>
        <Button>Delete</Button>
      </form>
      <Button onClick={props.onClose}>Close</Button>
    </Modal>
  );
}

export default DeleteInfo;
