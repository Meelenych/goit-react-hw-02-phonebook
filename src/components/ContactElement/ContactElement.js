import React from "react"

const ContactElement = ({ contacts, state, delContact }) => {
    // console.log('map.contacts', contacts.map(({ id, name, phoneNumber }) => `${id} ${name} ${phoneNumber}`));
    if (state.filter.length === 0) {
        return (contacts.map(({ id, name, phoneNumber }) => {
                    return (
                        <>
                            <li key={id}>
                                {`${name}: ${phoneNumber}`}

                                <button
                                onClick={delContact}
                                id={id}
                                type="button"
                                className="btn"
                                >Delete
                            </button>
                            </li>
                        </>
                    )
                }
            )
        )
    }
    else {
        contacts.filter((item)=> item.name.toLowerCase().includes(state.filter.toLowerCase())
        )
            .map(({ id, name, phoneNumber }) => {
                return (
                    <>
                        <li key={id}>
                            {`${name}: ${phoneNumber}`}
                       
                        <button
                        onClick={delContact}
                        type="button"
                        className="btn"
                        >Delete</button>
                    
                    </li>
                    </>
                )
            }
        )
    };
}

export default ContactElement