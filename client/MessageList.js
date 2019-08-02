import React, {Component} from 'react';
import styles from './MessageList.css';

const Message = props => {
  <div className={styles.Message}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
}

const Messagelist = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
          key = {i}
          from={message.form}
          text={message.text}
          />
        );
      })
    }
  </div>
);

export default MessageList;
