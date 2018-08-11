import { connect } from "react-redux";
import {
  addOptions,
  deleteOptions,
  pollFormData,
  pollFormRequest
} from "../redux/actions";
import AddPoll from "../components/addpoll";

const mapStateToProps = state => ({
  formData: state.addpoll.formData
});

const mapDispatchToProps = dispatch => ({
  addOptions: payload => dispatch(addOptions(payload)),
  deleteOptions: payload => dispatch(deleteOptions(payload)),
  pollFormData: payload => dispatch(pollFormData(payload)),
  pollFormRequest: payload => dispatch(pollFormRequest(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPoll);
