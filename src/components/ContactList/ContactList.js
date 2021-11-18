import React from "react"
import ContactElement from "../../components/ContactElement/ContactElement"

const ContactList = ({contacts, state, delContact}) => {         
    return (
        <>
            <h1>Contacts</h1>
            <ul>
                <ContactElement
                    contacts={contacts}
                    state={state}                    
                    delContact={delContact}
               />
            </ul>
        </>
    )
}

export default ContactList