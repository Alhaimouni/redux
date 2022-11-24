import { connect } from 'react-redux';


function Test(props) {
  return (
    <div>
      <p>Test Component</p>
      <p>{props.counter}</p>
      <p>{props.name}</p>
      <p></p>
    </div >
  )
};


function mapStateToProps(state) {
  return {
    counter: state.counterReducer.counter,
    name: state.textReducer
  }
};




export default connect(mapStateToProps)(Test);
