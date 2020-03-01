import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListItem from "./contactListItem/ContactListItem";
import * as slideTransitions from '../../transitions/slideTransitions.module.css'
import uuid from "uuid";

const ContactList = ({ contactList, handleChange }) => {
  return (
    <TransitionGroup component="ul">
      {contactList.map(el => (
        <CSSTransition classNames={slideTransitions} key={el.id} timeout={250} unmountOnExit>
          <ContactListItem
            key={uuid.v4()}
            contactListItem={el}
            handleChange={handleChange}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
