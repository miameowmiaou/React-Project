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

app.post('/artist', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'INSERT INTO `artist` (`name`, `genre`) VALUES (?, ?);',
      [req.body.name, req.body.genre]
    );
    res.send(results);
  } catch (err) {
    console.log(err);
  }
})

app.put('/artist/:id', async (req, res) => {
  try {
    const [results, fields] = await connection.query(
      'UPDATE `artist` SET `name` = ?, `genre` = ? WHERE `id` = ?;',
      [req.body.name, req.body.genre, req.params.id]
    );
    res.send(results);
  } catch (err) {
    console.log(err);
  }
})

app.delete('/artist/:id', async (req, res) => {
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