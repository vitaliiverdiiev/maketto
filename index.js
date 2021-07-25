const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, name: 'Alex', age: 22, languages: ['russian', 'ukrainian'] },
  { id: 2, name: 'Peter', age: 16, languages: ['english', 'ukrainian'] },
  { id: 3, name: 'Kate', age: 29, languages: ['russian', 'english'] },
  { id: 4, name: 'Omario', age: 42, languages: ['spanish'] },
  { id: 5, name: 'George', age: 18, languages: ['english'] },
  { id: 6, name: 'Becky', age: 21, languages: ['english", "spanish'] },
  { id: 7, name: 'Grisha', age: 25, languages: ['russian'] },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const bug = { id: Date.now(), resolved: false, ...req.body };
  users.push(bug);

  res.json(bug);
});

app.patch('/api/users/:id', (req, res) => {
  const index = users.findIndex((bug) => bug.id === parseInt(req.params.id));
  const bug = users[index];
  if ('resolved' in req.body) bug.resolved = req.body.resolved;
  if ('userId' in req.body) bug.userId = req.body.userId;

  res.json(bug);
});

app.listen(9001, () => {
  console.log('Node server started on port 9001.');
});
