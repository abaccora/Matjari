const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/wms', require('./routes/wms'));
app.use('/api/pos', require('./routes/pos'));
app.use('/api/accounting', require('./routes/accounting'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

app.listen(port, () => {
  console.log(`Matjari backend listening on port ${port}`);
});
