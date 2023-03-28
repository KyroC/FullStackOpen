const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const url =`mongodb+srv://fullstack:${password}@fso.pn4e3er.mongodb.net/phoneApp?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = require('./models/person')

app.use(express.json());
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'));


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const personMap = new Map(persons)
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id)
    if(person) {
        response.json(person)
    } else {
        response.status(404).end();
    }
    
})
app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id);

    response.status(204).end();
})

app.post('/api/persons',(request,response) => {
    const person = request.body;
    console.log(person)
    const name = person.name;
    const id = Math.floor(Math.random() * 10000)
    
    if (!person.name || !person.number ) {
        return response.status(400).json({
            error:'name or number missing'
        })
    }
    if (persons.some(person => person.name == String(name))) {
        return response.status(400).json({
            error:"Names must be unique"
        })
    }
    person.id = id;

    persons = persons.concat(person)
    response.json(person)
})

app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people </p>
        <p>${new Date()}</p>
    `)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 