import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { device } from '../common';

class Contact extends Component {
  renderContacts() {
    const contacts = [
      {
        name: 'mail',
        data: 'mailto:drew.m.peterson@gmail.com'
      },
      {
        name: 'github',
        data: 'https://github.com/weeznog'
      },
      {
        name: 'linkedin',
        data: 'https://linkedin.com/in/drewmpeterson/'
      },
      {
        name: 'chrome',
        data: 'https://angel.co/drew-peterson'
      }
    ];

    return contacts.map((contact, idx) => (
      <ContactItem key={idx}>
        <a className="social" href={contact.data} target="_blank">
          <Icon type={contact.name} />
        </a>
      </ContactItem>
    ));
  }
  render() {
    return <ContactList>{this.renderContacts()}</ContactList>;
  }
}

const ContactList = styled.div`
  display: flex;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 15px;
    color: white;
  }

  .social {
    color: white;
    font-size: 20px;
    @media ${device.laptop} {
      font-size: 30px;
    }
    i {
      margin-right: 20px;
      transition: 0.2s color;
      &:hover {
        color: #1890ff;
      }
    }
  }
`;

export default Contact;
