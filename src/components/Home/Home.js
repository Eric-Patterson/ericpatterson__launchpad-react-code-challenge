import { Fragment, useState } from "react";
import PostData from "./PostData";
import AddInfo from "./AddInfo";
import EditInfo from "./EditInfo";

function Home(props) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [editIsSown, seteditIsSown] = useState(false);
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

  return (
    <Fragment>
      {editIsSown && <EditInfo title={ID} onClose={hideEditCartHandler} />}
      {cartIsShown && <AddInfo onClose={hideCartHandler} />}
      <PostData
        onShowCart={showCartHandler}
        showEditCart={showEditCartHandler}
        sendToChild={setID}
      />
    </Fragment>
  );
}

export default Home;
