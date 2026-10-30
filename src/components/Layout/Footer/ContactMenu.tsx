import React from 'react'
import LayoutLink from '../shared/LayoutLink'
import { ContactDetails, ContactList } from './index.style'
import messages from './messages/en'
import { contactLinks } from './navigation'

export default function ContactMenu() {
  return (
    <ContactDetails>
      <summary>{messages.contactUs}</summary>
      <ContactList>
        {contactLinks.map((item) => (
          <li key={item.id}>
            <LayoutLink href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}>
              {item.label}
            </LayoutLink>
          </li>
        ))}
      </ContactList>
    </ContactDetails>
  )
}
