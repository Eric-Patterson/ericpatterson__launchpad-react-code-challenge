import { Fragment, useState } from "react";
import PostData from "./PostData";
import AddInfo from "./AddInfo";
import EditInfo from "./EditInfo";
import DeleteInfo from "./DeleteInfo";

function Home(props) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [editIsSown, seteditIsSown] = useState(false);
  const [deleteIsShown, setdeleteIsShown] = useState(false);
  const [ID, setID] = useState("");

  // add postdata modal
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // edit postdata modal
  const showEditCartHandler = () => {
    seteditIsSown(true);
  };
  const hideEditCartHandler = () => {
    seteditIsSown(false);
  };

  // show delete modal
  const showDeleteCartHandler = () => {
    setdeleteIsShown(true);
  };
  const hideDeleteCartHandler = () => {
    setdeleteIsShown(false);
  };

  return (
    <Fragment>
      {deleteIsShown && (
        <DeleteInfo title={ID} onClose={hideDeleteCartHandler} />
      )}
      {editIsSown && <EditInfo title={ID} onClose={hideEditCartHandler} />}
      {cartIsShown && <AddInfo onClose={hideCartHandler} />}
      <PostData
        onShowCart={showCartHandler}
        showEditCart={showEditCartHandler}
        showDeleteCart={showDeleteCartHandler}
        sendToChild={setID}
      />
    </Fragment>
  );
}

export default Home;
