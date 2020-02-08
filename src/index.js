const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "CHANGEVALUE" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value:1 }));

// Dispatch the "CHANGEVALUE" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: -1 }));

// Dispatch the "CHANGEVALUE" action every time the +5 button is pressed
const increment5Button = document.getElementById('increment-5');
increment5Button.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value:5 }));

// Dispatch the "CHANGEVALUE" action every time the -5 button is pressed
const decrement5Button = document.getElementById('decrement-5');
decrement5Button.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: -5 }));

// Dispatch the "CHANGECOLOR" action every time the -5 button is pressed
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', e => dispatch({ type: "CHANGECOLOR", color:colorPicker.value }));

// Dispatch the "RESETVALUE" action every time the -5 button is pressed
const numberPicker = document.getElementById('numberPicker');
numberPicker.addEventListener('keyup', e => dispatch({ type: "RESETVALUE", value: Number(numberPicker.value) }));

// Dispatch the "ADDCOUNTER" action every time the -5 button is pressed
const newCounter = document.getElementById('new-counter');
newCounter.addEventListener('click', e => dispatch({ type: "ADDCOUNTER", value: document.getElementsByClassName('app')[0] }));

console.log(document.getElementsByClassName('app')[0])