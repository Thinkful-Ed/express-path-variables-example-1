'use strict';

// EXAMPLE 3: Path variables
// =========================

const express = require('express');

const app = express();

app.get('/:foo/:bar', (req, res) => {
  const {foo, bar} = req.params;
  res.json({foo: foo, bar: bar}).end();
});


// listen for requests :)
app.listen(process.env.PORT, () => console.log(
  `Your app is listening on port ${process.env.PORT}`));
