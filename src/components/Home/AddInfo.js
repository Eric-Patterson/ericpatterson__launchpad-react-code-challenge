import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPostData } from "../../store/actions";
import { postPassgengers } from "../../store/selectors";

// import { postActions } from "../../store/posts-slice";

function AddInfo(props) {
  // const titleRef = useRef();
  // const bodyRef = useRef();
  // const userIdRef = useRef();

  const dispatch = useDispatch();
  const postData = useSelector(postPassgengers);

  // useEffect(() => {
  //   dispatch(sendPostData());
  // }, [dispatch]);

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

  // const { title, price, id } = props.item;

  // const addItemHandler = () => {
  //   dispatch(
  //     postActions.addItemToCart({
  //       id: Math.random(),
  //       title: "something",
  //       price: "44  ",
  //     })
  //   );
  // };

  return (
    <Modal onClose={props.onClose}>
      <div>testing add info</div>
      {/* react form with title, body, userId */}
      <form onSubmit={addItemHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" id="title" type="text" />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input name="body" id="body" type="text" />
        </div>
        <div>
          <label htmlFor="userId">User Id</label>
          <input name="userId" id="userId" type="number" />
        </div>
        <Button>Add New Info</Button>
      </form>
      <Button onClick={props.onClose}>Close</Button>

      {/* <Button onClick={addItemHandler}>Add New Info</Button> */}
    </Modal>
  );
}

export default AddInfo;
