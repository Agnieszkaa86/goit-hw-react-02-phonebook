import {Component} from "react";
import { nanoid } from "nanoid";
import ContactForm  from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "components/ContactItem/ContactList/ContactList";
import { Container } from './ContactForm/ContactForm.styled'

export const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = {
   ...INITIAL_STATE,
  };
  searchByName = (event) => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };
   addNewContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (contacts.find(cont => cont.name === name)){
      alert(`${name} is already in contacts`)
    } else {
      this.setState({
        contacts: [...contacts, { name, number, id: nanoid() }],
      });
    }
  };
   viewContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };

  deleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(cont => cont.id !== id),
    }));
  };
 
  render(){
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
      <ContactForm newContact={this.addNewContact} />
      <h2>Contacts</h2>
      <Filter searchByName={this.searchByName} />
      <ContactList 
        contacts={this.viewContacts()}
        deleteItem={this.deleteContact}
      />
      </Container>
      
    </>
  );
}
}