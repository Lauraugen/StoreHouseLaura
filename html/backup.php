<?php
 $datos=file_get_contents("php://input");
 //var_dump($datos);

$tiempo = time(); //Fecha Actual | Devuelve los segundos que han pasado desde 1970
$fecha = getdate($tiempo); //Pasar a un formato mejor | Devuelve un array

        $string = $tiempo.".txt";
       $archivo= fopen("./backup/$string","a+")or die("Error al abrir el archivo");
       fwrite($archivo,$datos);

       fclose($archivo);
    
?>