export default function(state, action) {
  console.log(arguments);  
  state = state || {
      value: 0
  };
  switch (action.type) {
      case 'INCREMENT':
          return {
              value: state.value + 1
          };
      case 'DECREMENT':
          return {
              value: state.value - 1
          };
      default:
          return state;
  }
};