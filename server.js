// Express web server
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const static = require('./routes/static');
const baseController = require('./controllers/baseController');
const inventoryRoute = require('./routes/inventoryRoute');
const PORT = process.env.PORT || 3000;

// Express setup
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Static Routes
app.use(static);

// Routes
app.use('/inv', inventoryRoute);

// Index route
app.get('/', baseController.buildHome);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
