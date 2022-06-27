// imports 
import express from 'express';
//import session from 'express-session';
import path from 'path' // solucion para utilizar "__dirname" con "import"
import { fileURLToPath } from 'url' // solucion para utilizar "__dirname" con "import"

import viewsRoutes from './routes/views.routes.js'; //ruta de vistas

// inicializaciones
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // solucion para utilizar "__dirname" con "import"

// configuraciones
app.set('port', 3001);
app.set('view engine', 'ejs'); // ejs config
app.set('views', __dirname + '/views'); // static files folder

// middlewares
// session
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true
//   })
// );
// los datos de sesion serán accesibles en cualquier plantilla 
// app.use((req, res, next) => {
//   res.locals.idUser = req.session.idUser;
//   res.locals.userName = req.session.userName;
//   res.locals.userEmail = req.session.userEmail;
//   next();
// });

app.use(express.static(__dirname + '/public')); // static files

app.use(express.json()); 
//app.use(fileUpload({ createParentPath: true })); // file upload
//app.use(viewsRoutes, userRoutes, projectsRoutes, contactRoutes);

// app.use((req, res) => {
//   res.status(404).render('404');
// });
app.use(viewsRoutes);

export default app;