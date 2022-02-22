const person = {
    name: { firstName: 'rah', lastName: 'sha' },
    age: 34,
    occupation: 'jobless'
};
// convert to json
const personStringified = JSON.stringify(person);
// convert to oject from json
const personConverted = JSON.parse(personStringified);