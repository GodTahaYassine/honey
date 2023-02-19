import React from 'react'

import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import MessageParser from './compn/MessageParser';
import ActionProvider from './compn/ActionProvider';
import botConfig from './compn/botConfig'


const Danger = () => {
  return (
        <div>
            <Chatbot config={botConfig} 
            messageParser={MessageParser} 
            actionProvider={ActionProvider} />
        </div>
  )
}

export default Danger