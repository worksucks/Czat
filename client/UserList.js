import React, {Component} from 'react';
import styles from './UserList.css';

cost Userlist = props => (
  <div className={styles.Users}>
    <div className={styles.UserOnLine}>
    {props.users.length} people UserOnLine
    </div>
    <ul className={styles.UserList}>
    {
      props.users.map((user) =>{
        return (
          <li key = {user.id} className={styles.UserItem}>
          {user.name}
          </li>
        );
      })
    }
    </ul>
  </div>
);


export default UserList;
