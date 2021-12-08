// 4.2.3 Multi-Table Queries (JOINS) - Project
// Wed. Dec. 8, 2021

const server = require('./api/server.js');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

server.get('/', (req, res) => {
  res.send('<h1>4.2.3 - Multi-Table Queries Project</h1>');
})
