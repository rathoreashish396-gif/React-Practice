import './App.css';
import React, { use, useState } from "react";
import userImg from './assets/user.png';
import robotImg from './assets/robot.png';

function ChatBot() {
  return (
    <>
      <input className="inputTxt" placeholder="Send a message to Chatbot" size="30"/>
      <button className="btnSend">Send</button>
      <button className="btnCncl">Cancel</button>
    </>
  );
}

function ChatMessage({Message, Sender}) {
  //const msg = props.msg;
  //const sender = props.sender;
  // const {msg, sender} = props;
  return  (
    <div>
      {Sender === "robot" && <img src={robotImg} width ="30" size='30'/>}
      {Message}
      {Sender === "user" && <img src={userImg} width ="30" size='30'/>}
    </ div>
  );
}

function ListOfMessages() {
  const chatMessages = [{
        Message: "Hello Chatbot",
        Sender: "user",
        id: "1"
      },
      {
        Message: "Hello! How I can help you",
        Sender: "robot",
        id: "2"
      },
      {
        Message: "Can you get me today's date",
        Sender: "user",
        id: "3"
      },
      {
        Message: "Date: 8/10/2025", 
        Sender: "robot",
        id: "4"
      }
];

  return(
    <>
    {chatMessages.map((arrayOfValues) => {
  return(
    <ChatMessage 
      Message={arrayOfValues.Message}
      Sender={arrayOfValues.Sender}
      Key = {arrayOfValues.id}
    />
  );
})}
    </>
  );
}


function App() {

  return (
    <>
      <ChatBot />
      <ListOfMessages />
    </>
      
  )
}

export default App
