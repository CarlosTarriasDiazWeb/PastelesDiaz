import app from './app.js';

app.listen((process.env.PORT || app.get('port')), function(){
  console.log(`Servidor: http://localhost:${app.get('port')}`);
});