import Counter from "./counter";
import { increment } from "../../ac";
import { connect } from "react-redux";

const mapStateToProps = storeState => ({
  count: storeState.counter
});

const mapDispatchToProps = {
  handleIncrement: increment // (...args) => dispatch(increment(...args))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
