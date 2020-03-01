import React, { Component } from "react";
import uuid from "uuid";
import Section from "../section/Section";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filteredSearch/FilteredSearch";
import ContactList from "../contactList/ContactList";
import { CSSTransition } from "react-transition-group";
import AlertNotification from '../alertNotification/AlertNotification'
import * as notificationTransition from "../../transitions/notificationTransition.module.css";

// styles

const cssWrapper = {
  position: "relative",
  padding: "44px 0"
}

// initiall state

const INITIALL_STATE = {
  name: "",
  number: ""
};

// additional function

const getFilteredContacts = (filter, contacts) =>
  contacts.length >= 2
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

// component

class Phonebook extends Component {
  state = { ...INITIALL_STATE };

  componentDidMount = () => {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    this.props.getLocalContacts(localContacts);
    this.setState({ isTitleVisible: true });
  };

  componentDidUpdate = prevProps => {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) localStorage.setItem("contacts", JSON.stringify(contacts));

    const { isMatch } = this.state;
    if(isMatch === true) setTimeout(() => this.setState({isMatch: false}), 2000)
  };

  handleCheckForMatch = contacts =>
    contacts.some(contact => contact.name === this.state.name);

  handleFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: uuid.v4(),
      name: this.state.name,
      number: this.state.number
    };

    const { contacts, addContact } = this.props;

    const isMatch = this.handleCheckForMatch(contacts);

    this.setState({isMatch: isMatch});

    if(!isMatch) addContact(newContact);
  };

  handleDeleteSubmit = e => {
    this.props.deleteContact(e.target.id);
  };

  handleFilterValue = e => this.props.getFilterValue(e.target.value);

  render() {
    const { name, number, isTitleVisible, isMatch } = this.state;
    const { filter, contacts } = this.props;
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
      <div style={cssWrapper}>
        <Section title={"Phonebook"} isVisible={isTitleVisible}>
          <ContactForm
            name={name}
            number={number}
            handleSubmit={this.handleFormSubmit}
            handleChange={this.handleFormChange}
          />
        </Section>
        <Filter handleChangeFilter={this.handleFilterValue} />
        <ContactList
          contactList={filteredContacts}
          handleChange={this.handleDeleteSubmit}
        />
        <CSSTransition
          in={isMatch}
          timeout={250}
          classNames={notificationTransition}
          unmountOnExit
        >
          <AlertNotification name={name} />
        </CSSTransition>
      </div>
    );
  }
}

export default Phonebook;
