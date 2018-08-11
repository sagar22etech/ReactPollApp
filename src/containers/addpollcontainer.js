import { connect } from "react-redux";
import { addOptions, deleteOptions } from "../redux/actions";
import AddPoll from "../components/addpoll";

const mapStateToProps = state => ({
  formData: state.addpoll.formData
});

const mapDispatchToProps = dispatch => ({
  addOptions: payload => dispatch(addOptions(payload)),
  deleteOptions: payload => dispatch(deleteOptions(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPoll);
