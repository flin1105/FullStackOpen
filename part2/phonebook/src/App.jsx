import { useState, useEffect } from "react";
import Filter from "./Filter";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import personService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filterValue, setFilterValue] = useState("");

	useEffect(() => {
		console.log("Use Effect");
		personService.getALL().then((response) => {
			setPersons(response);
		});
	}, []);

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const addPerson = (e) => {
		e.preventDefault();
		const noDuplicates = persons.every((person) => person.name !== newName);

		const largest = Math.max(...persons.map((person) => person.id));

		const newPerson = {
			name: newName,
			number: newNumber,
			id: largest + 1,
		};

		if (noDuplicates === true) {
			personService.add(newPerson).then((updatedPersons) => {
				console.log("updated Persons log", updatedPersons);
				setPersons(persons.concat(updatedPersons));
			});
		} else {
			alert(`${newName} is already added to phonebook`);
		}
	};

	const handleNumberChange = (e) => {
		setNewNumber(e.target.value);
	};

	const handleFilterChange = (e) => {
		setFilterValue(e.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter
				filterValue={filterValue}
				onHandleChange={handleFilterChange}
			/>
			<PersonForm
				onAddPerson={addPerson}
				newName={newName}
				onNameChange={handleNameChange}
				newNumber={newNumber}
				onNumberChange={handleNumberChange}
			/>
			<h3>Numbers</h3>
			<Persons
				persons={persons}
				onFilterValue={filterValue}
			/>
		</div>
	);
};

export default App;
