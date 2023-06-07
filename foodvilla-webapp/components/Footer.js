import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Footer = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const addCartitem = () => {
    dispatch(addItem("Grapes"));
  };
  return (
    <>
      <div>Footer</div>
      <div> {cartItems.length} </div>
      <button onClick={addCartitem}> Add item </button>
    </>
  );
};

export default Footer;
