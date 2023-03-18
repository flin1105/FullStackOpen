const express = require("express");
const app = express();
app.use(express.json());

let notes = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
	{
		id: 5,
		name: "John Doe",
		number: "1234-56789",
	},
];

app.get("/api/persons", (request, response) => {
	response.json(notes);
});

app.get("/info", (request, response) => {
	response.send(`<p>Phonebook has info for ${notes.length} people.</p>
  <p>${Date()}</>`);
});

app.get("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	const note = notes.find((note) => note.id === id);
	if (note) {
		response.json(note);
	} else {
		response.status(404).end();
	}
});

app.delete("/api/persons/:id", (request, response) => {
	const deleteId = Number(request.params.id);
	notes = notes.filter((note) => note.id !== deleteId);
	response.status(204).end();
});

app.post("/api/persons/", (request, response) => {
	const body = request.body;

	if (!body.name) {
		return response.status(400).json({
			error: "Missing Name",
		});
	} else if (!body.number) {
		return response.status(400).json({
			error: "Missing Number",
		});
	}

	const nameExists = notes.find((note) => note.name === body.name);

	if (nameExists) {
		return response.status(400).json({
			error: "Name must be unique",
		});
	}

	const newId = Math.floor(Math.random() * 1000000);

	const person = {
		id: newId,
		name: body.name,
		number: body.number,
	};

	notes = notes.concat(person);
	response.json(person);

	console.log(notes);
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
