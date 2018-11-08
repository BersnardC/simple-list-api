const express 	= require('express');
const morgan 	= require('morgan');
const app = express();
//Database MongoDB
const { mongoose } = require('./database')
// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/',require('./routes/tasks.routes'));

// Handle 404
  app.use(function(req, res) {
     res.send('404: Page not Found', 404);
  });
  
  // Handle 500
  app.use(function(error, req, res, next) {
     res.send('500: Internal Server Error', 500);
  });
//listin Server
app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'));
})
