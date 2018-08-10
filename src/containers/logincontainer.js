import { connect } from "react-redux";
import { requestLogin, loginFormData } from "../redux/actions";
import Login from "../components/login";

const mapStateToProps = state => ({
    formData: state.login.formData
});

const mapDispatchToProps = dispatch => ({
  requestLogin: payload => dispatch(requestLogin(payload)),
  loginFormData: payload => dispatch(loginFormData(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
