<?php


$tiempo = time(); //Fecha Actual | Devuelve los segundos que han pasado desde 1970
$fecha = getdate($tiempo); //Pasar a un formato mejor | Devuelve un array

    if(isset($_POST['ENVIAR'])){
        $backup = $_POST['BackUp'];
        $string = $tiempo.".txt";
       $archivo= fopen("./backup/$string","a+")or die("Error al abrir el archivo");
       fwrite($archivo,$backup);

       fclose($archivo);
    }
?>