import { Fragment, useState } from "react";
import PostData from "./PostData";
import AddInfo from "./AddInfo";

function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <AddInfo onClose={hideCartHandler} />}
      <PostData onShowCart={showCartHandler} />
    </Fragment>
  );
}

export default Home;
