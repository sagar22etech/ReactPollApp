import { connect } from "react-redux";
import Listpolls from "../components/listpolls";
import { requestPolls,deleteOption } from "../redux/actions";
const mapStateToProps = state => ({
  data: state.listpolls.data
});
const mapDispatchToProps = dispatch => ({
  requestPolls: () => dispatch(requestPolls()),
  deleteOption: payload => dispatch(deleteOption(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listpolls);
