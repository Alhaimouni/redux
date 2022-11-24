import { connect } from 'react-redux';
import { incAction, decAction, nmAction } from './store/actions';
import Test from './Test'

function App(props) {
  return (
    <div className="App">
      <h2>App Component</h2>
      <button onClick={() => {
        props.incAction();
        props.nmAction('hello')
      }}>+</button>
      <p>{props.counter}</p>
      <button onClick={() => { props.decAction() }}>-</button>
      <hr />
      <Test />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    counter: state.counterReducer.counter
  }
};

//short hand dispatch
// const mapDispatchToProps = { incAction, decAction, nmAction };

//long way dispatch that descripes how short hand implemented 
function mapDispatchToProps(dispatch) {
  return {
    incAction: (payload) => { dispatch(incAction(payload)) },
    decAction: (payload) => { dispatch(decAction(payload)) },
    nmAction: (payload) => { dispatch(nmAction(payload)) },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

