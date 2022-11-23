import { connect } from 'react-redux';


function Test(props) {
  return (
    <div>
      <h2>Test Component</h2>
      <p> test counter : {props.x}</p>
      <p onClick={() => { props.setUser() }}> set Data </p>
    </div >
  )
};

function mapStateToProps(state) {
  return {
    x: state.counterReducer.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: () => { dispatch({ type: 'login' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
