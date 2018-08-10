import { connect } from "react-redux";
import { requestSignUp, signupFormData } from "../redux/actions";
import Signup from "../components/signup";

const mapStateToProps = state => {
  return {
    data: state.signup
  };
};

const mapDispatchToProps = dispatch => ({
  requestSignUp: payload => dispatch(requestSignUp(payload)),
  signupFormData: payload => dispatch(signupFormData(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
