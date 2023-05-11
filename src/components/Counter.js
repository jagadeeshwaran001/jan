import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './Action';

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    props.incrementCounter();
    setCount(count + 1);
  };

  const handleDecrement = () => {
    props.decrementCounter();
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: () => dispatch(incrementCounter()),
    decrementCounter: () => dispatch(decrementCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
