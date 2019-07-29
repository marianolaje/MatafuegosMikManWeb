<?php
  header("Content-Type: text/html;charset=utf-8");
//conectamos con el servidor
  $conectar = new mysqli('localhost', 'root', '', 'form_cv_pag_web');
//verificamos la conexion
  if(!$conectar){
    echo"no se pudo conectar con el servidor";
  }
//recuperar las variables del formulario
  $nombre=$_POST['nombre'];
  $mail=$_POST['mail'];
  $mensaje=$_POST['mensaje'];
//hacemos la sentencia de SQL
  $sql="INSERT INTO datos VALUES('$nombre', '$mail', '$mensaje')";
//ejecutamos la sentencia de SQL
  $ejecutar = mysqli_query($conectar, $sql);
//verificamos la ejecucion
  if(!$ejecutar){
    echo"hubo un error";
  } else {
    echo"datos guardados correctamente <br><a href='index.html'>Volver</a>";
  }
?>
