import { createConnection } from 'mysql';

const conection = createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'db_TodoApp',
});

const getUsuarios = () => {
   conection.connect((err) => {
      if (err) throw err;
      console.log('la conexion funciona');
   });
   conection.query('SELECT * FROM Usuarios', (err, usuarios) => {
      if (err) throw err;
      usuarios.forEach((usuario) => {
         console.log(
            'El usuario ' + usuario.USUARIO + ' tiene contraseña ' + usuario.CONTRASENA
         );
      });
      //   console.log(usuarios[0].USUARIO);
   });

   // conection.query('INSERT INTO Usuarios(USUARIO, CONTRASENA) VALUES ("PEDRO","P12345")');

   conection.end();
};

getUsuarios();
