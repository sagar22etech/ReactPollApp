import { connect } from "react-redux";
import Listuser from "../components/listuser";
import { requestUsers } from "../redux/actions";
const mapStateToProps = state => ({
  data: state.listuser.data
});
const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listuser);
