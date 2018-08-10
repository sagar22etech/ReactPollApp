import { connect } from "react-redux";
import { addOptions, deleteOptions } from "../redux/actions";
import AddPoll from "../components/addpoll";

const mapStateToProps = state => ({
  formData: state.addpoll.formData
});

const mapDispatchToProps = dispatch => ({
  addOptions: payload => dispatch(addOptions(payload)),
  deleteOptions: () => dispatch(deleteOptions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPoll);
