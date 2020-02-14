import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownContainer = compose(connect(mapStateToProps), withRouter);

export default CartDropdownContainer;
