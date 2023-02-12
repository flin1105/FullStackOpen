import { useState, useEffect } from "react";
import Filter from "./Filter";
import Persons from "./Persons";
import PersonForm from "./PersonForm";
import axios from "axios";

const App = () => {
	// const [persons, setPersons] = useState([
	// 	{ name: "Arto Hellas", number: "040-123456", id: 1 },
	// 	{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
	// 	{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
	// 	{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	// ]);
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filterValue, setFilterValue] = useState("");

	useEffect(() => {
		console.log("Use effect");
		axios.get("http://localhost:3001/persons").then((response) => {
			console.log("promise resolved");
			console.log(response.data);
			setPersons(response.data);
		});
	}, []);

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const addPerson = (e) => {
		e.preventDefault();
		const noDuplicates = persons.every((person) => person.name !== newName);
		console.log(noDuplicates);
		if (noDuplicates === true) {
			setPersons(
				persons.concat({
					name: newName,
					number: newNumber,
					id: persons.length + 1,
				})
			);
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

	const filteredPersons = persons.filter((person) => {
		return person.name.toLowerCase().includes(filterValue.toLowerCase());
	});

	console.log(filteredPersons);

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
			<Persons filteredPersons={filteredPersons} />
		</div>
	);
};

export default App;
