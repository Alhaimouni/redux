
import Test from "./Test";
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <h1>Test</h1>
      <p>my name is : {props.name}</p>
      <p>email me at : {props.email}</p>
      <hr />
      <Test />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    k: state.counterReducer.counter,
    name: state.authReducer.userName,
    email: state.authReducer.email,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOne: () => { dispatch({ type: 'inc', payload: 1 }) },
    remOne: () => { dispatch({ type: 'dec', payload: 1 }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

