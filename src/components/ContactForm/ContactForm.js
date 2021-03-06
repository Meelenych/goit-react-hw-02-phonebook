import React from "react";

const ContactForm = ({ addContact, nameChange, phoneChange }) => {
	return (
		<>
			<h1>Phonebook</h1>
			<form>
				<label>
					Name
					<input
						type="text"
						onChange={nameChange}
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
					/>
				</label>

				<label>
					Number
					<input
						type="tel"
						onChange={phoneChange}
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
						required
					/>
				</label>

				<button type="button" onClick={addContact}>
					{" "}
					Add Contact
				</button>
			</form>
		</>
	);
};

export default ContactForm;
