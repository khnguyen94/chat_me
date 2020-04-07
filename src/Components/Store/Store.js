// a wrapper, a context provider that holds all our current chats in the state
// want a reducer to have greater control over what is being returned from server and map it to that shape we want to be processed in our front end
// want an initial state of empty message

import React from "react";

export const CTX = React.createContext();

const initState = {
  general: [
    {topic: "general", from: "John", msg: "hi"}, 
    {topic: "general", from: "Joseph", msg: "hi"}, 
    {topic: "general", from: "Vanessa", msg: "hi"} 
  ], 
  nike: [
    {topic: "nike", from: "Tom", msg: "hi"}, 
    {topic: "nike", from: "Colin", msg: "hi"}, 
    {topic: "nike", from: "Chris", msg: "hi"} 
  ], 
  jordan: [
    {topic: "jordan", from: "Jill", msg: "hi"}, 
    {topic: "jordan", from: "Jamie", msg: "hi"}, 
    {topic: "jordan", from: "Carl", msg: "hi"} 
  ], 
  adidas: [
    {topic: "adidas", from: "Tom", msg: "hi"}, 
    {topic: "adidas", from: "Colin", msg: "hi"}, 
    {topic: "adidas", from: "Chris", msg: "hi"} 
  ], 
  nakedfamous: [
    {topic: "nakedfamous", from: "Tom", msg: "hi"}, 
    {topic: "nakedfamous", from: "Colin", msg: "hi"}, 
    {topic: "nakedfamous", from: "Chris", msg: "hi"} 
  ], 
  balenciaga: [
    {topic: "balenciaga", from: "Tom", msg: "hi"}, 
    {topic: "balenciaga", from: "Colin", msg: "hi"}, 
    {topic: "balenciaga", from: "Chris", msg: "hi"} 
  ], 
  patagonia: [
    {topic: "patagonia", from: "Tom", msg: "hi"}, 
    {topic: "patagonia", from: "Colin", msg: "hi"}, 
    {topic: "patagonia", from: "Chris", msg: "hi"} 
  ], 
  gucci: [
    {topic: "gucci", from: "Tom", msg: "hi"}, 
    {topic: "gucci", from: "Colin", msg: "hi"}, 
    {topic: "gucci", from: "Chris", msg: "hi"} 
  ]
}; 

function reducer(state, action) {

  const {from, msg, topic} = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
          ...state, 
          [topic]: [
            ...state[topic], 
            {
              from, 
              msg
            }
          ]
      };
    default:
      return state;
  }
}

function StoreRender(props) {

  const reducerHook = React.useReducer(reducer, initState);

  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
    );
}

export default StoreRender;
