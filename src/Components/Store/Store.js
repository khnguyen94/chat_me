// a wrapper, a context provider that holds all our current chats in the state
// want a reducer to have greater control over what is being returned from server and map it to that shape we want to be processed in our front end
// want an initial state of empty message

import React from "react";

export const CTX = React.createContext();

// const sample_messages = [
//   {
//     senderID: "khnguyen",
//     senderABV: "kn",
//     text: "Hey, how's it going?"
//   },
//   {
//     senderID: "pabuckland",
//     senderABV: "pb",
//     text: "I am well. How about you?"
//   },
//   {
//     senderID: "khnguyen",
//     senderABV: "kn",
//     text: "Doing great, thanks! Would you like to play with my cat Ruffus?"
//   },
//   {
//     senderID: "pabuckland",
//     senderABV: "pb",
//     text: "OMG, yes!!"
//   }
// ];

const initState = {
  General: [
    {topic: "general", senderID: "khnguyen", senderInitials: "kn", msg: "Hey, how's it going?"}, 
    {topic: "general", senderID: "pbuckland", senderInitials: "pb", msg: "I am well. How about you?"}, 
    {topic: "general", senderID: "khnguyen", senderInitials: "kn", msg: "Doing great, thanks! Would you like to play with my cat Ruffus?"}, 
    {topic: "general", senderID: "pbuckland", senderInitials: "pb", msg: "OMG, yes!!"} 
  ], 
  Nike: [
    {topic: "nike", from: "Tom", msg: "hi"}, 
    {topic: "nike", from: "Colin", msg: "hi"}, 
    {topic: "nike", from: "Chris", msg: "hi"} 
  ], 
  Jordan: [
    {topic: "jordan", from: "Jill", msg: "hi"}, 
    {topic: "jordan", from: "Jamie", msg: "hi"}, 
    {topic: "jordan", from: "Carl", msg: "hi"} 
  ], 
  Adidas: [
    {topic: "adidas", from: "Tom", msg: "hi"}, 
    {topic: "adidas", from: "Colin", msg: "hi"}, 
    {topic: "adidas", from: "Chris", msg: "hi"} 
  ], 
  Levis : [
    {topic: "nakedfamous", from: "Tom", msg: "hi"}, 
    {topic: "nakedfamous", from: "Colin", msg: "hi"}, 
    {topic: "nakedfamous", from: "Chris", msg: "hi"} 
  ], 
  Balenciaga: [
    {topic: "balenciaga", from: "Tom", msg: "hi"}, 
    {topic: "balenciaga", from: "Colin", msg: "hi"}, 
    {topic: "balenciaga", from: "Chris", msg: "hi"} 
  ], 
  Patagonia: [
    {topic: "patagonia", from: "Tom", msg: "hi"}, 
    {topic: "patagonia", from: "Colin", msg: "hi"}, 
    {topic: "patagonia", from: "Chris", msg: "hi"} 
  ], 
  Gucci: [
    {topic: "gucci", from: "Tom", msg: "hi"}, 
    {topic: "gucci", from: "Colin", msg: "hi"}, 
    {topic: "gucci", from: "Chris", msg: "hi"} 
  ]
}; 

function reducer(state, action) {

  const {topic, senderID, senderInitials, msg} = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
          ...state, 
          [topic]: [
            ...state[topic], 
            {
              topic, 
              senderID,
              senderInitials, 
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
