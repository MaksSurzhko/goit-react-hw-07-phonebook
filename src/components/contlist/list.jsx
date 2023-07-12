import React from "react";
import { useDispatch } from "react-redux";
import lcss from "../contlist/list.module.css";
import { deleteContact } from "../redux/contactsSlice";

const ContactList = ({contacts, filter}) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={lcss.llist}>
      {filteredContacts.map((contact) => (
        <li className={lcss.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={lcss.bbtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;