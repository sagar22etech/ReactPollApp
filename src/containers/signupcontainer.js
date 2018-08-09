import { connect } from "react-redux";
import { requestSignUp } from "../redux/actions";
import Signup from "../components/signup";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  requestSignUp: payload => dispatch(requestSignUp(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
