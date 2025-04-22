import express from 'express';
import { connection } from "./bdd/getConnection.js";
const app = express();
const port = 3001;

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/artists', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'SELECT * FROM `artist`;'
    );
    res.send(results);
  } catch (err) {
    console.log(err);
  }
});

app.post('/artists', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'INSERT INTO `artist` (`name`) VALUES (?);', [req.query.name]
    );
    res.send(results);
  } catch (err) {
    console.log(err);
  }
})

app.put('/artists/:id', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'UPDATE `artist` SET `name` = ? WHERE `id` = ?;',
      [req.query.name, req.params.id]
    );
    res.send(results);
  } catch (err) {
    console.log(err);
  }
})

app.delete('/artists/:id', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'DELETE FROM `artist` WHERE `id` =?;',
      [req.params.id]
    );
    res.send(results);
  } catch (err) {
    console.log(err);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});