<?php 
session_start();
if (isset($_SESSION["al"])){
    echo(1);
}else{
    echo(0);
}
?>