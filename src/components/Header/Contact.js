import React, { Component } from 'react';
import styled from 'styled-components';

class Contact extends Component {
  renderContacts() {
    const contacts = [
      {
        name: 'Email',
        data: 'drew.m.peterson@gmail.com'
      },
      {
        name: 'Github',
        data: 'www.google.com'
      },
      {
        name: 'Linkin',
        data: 'www.google.com'
      },
      {
        name: 'AngleList',
        data: 'www.google.com'
      }
    ];

    return contacts.map((contact, idx) => (
      <ContactItem key={idx}>
        <h3>{contact.name}</h3>
        <a href={contact.data}>{contact.data}</a>
      </ContactItem>
    ));
  }
  render() {
    return <ContactList>{this.renderContacts()}</ContactList>;
  }
}

const ContactList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 70%;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  h3 {
    font-size: 15px;
    color: white;
  }

  a {
    color: white;
    font-size: 12px;
    margin-top: 3px;
  }
`;

export default Contact;
