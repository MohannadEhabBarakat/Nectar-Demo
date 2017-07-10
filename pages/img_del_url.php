<?php
session_start();
if (isset($_SESSION["al"])){
unlink("..".substr($_GET["x"],16));
echo($_GET["x"]);
    }else{
    echo ("ya rab :) adkol");
}
?>

