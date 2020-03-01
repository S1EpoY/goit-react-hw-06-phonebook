import { connect } from 'react-redux';
import Phonebook from '../phoneBook/PhoneBook';
import { addContact, deleteContact, getLocalContacts, getFilterValue } from '../../redux/actionCreators';

const mapStateToProps = ({ contacts, filter }) => ({ contacts, filter });

export default connect(mapStateToProps, ({ addContact, deleteContact, getFilterValue, getLocalContacts }))( Phonebook );