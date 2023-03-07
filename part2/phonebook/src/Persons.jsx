import personService from "./services/persons";
import { useEffect } from "react";

const Persons = ({ persons, onFilterValue }) => {
	const filteredPersons = persons.filter((person) => {
		return person.name.toLowerCase().includes(onFilterValue.toLowerCase());
	});

	const handleDelete = (person) => {
		if (window.confirm(`Delete ${person.name} ?`)) {
			personService.remove(person.id);
		}
	};

	return (
		<>
			{filteredPersons.map((person) => {
				return (
					<p key={person.name}>
						{person.name} {person.number}
						<button onClick={() => handleDelete(person)}>DELETE</button>
					</p>
				);
			})}
		</>
	);
};

export default Persons;
