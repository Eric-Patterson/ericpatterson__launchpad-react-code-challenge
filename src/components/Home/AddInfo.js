import Modal from "../UI/Modal";
import Button from "../UI/Button";

function AddInfo(props) {
  return (
    <Modal onClose={props.onClose}>
      <div>testing add info</div>
      {/* react form with title, body, userId */}
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Body</label>
          <input type="text" />
        </div>
        <div>
          <label>User Id</label>
          <input type="text" />
        </div>
      </form>
      <Button onClick={props.onClose}>Close</Button>
      <Button>Add New Info</Button>
    </Modal>
  );
}

export default AddInfo;
