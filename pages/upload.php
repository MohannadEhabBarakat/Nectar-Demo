<?php
session_start();
if (isset($_SESSION["al"])){
$ds = DIRECTORY_SEPARATOR;  //1
 
$storeFolder = '';   //2
 
if (!empty($_FILES)) {
     
    $tempFile = $_FILES['file']['tmp_name'];          //3             
      
    $targetPath = "../assets/images/";  //4
     
    $targetFile =  $targetPath. $_FILES['file']['name'];  //5
 
    move_uploaded_file($tempFile,$targetFile); //6
     
}
    }else{
    echo ("ya rab :) adkol");
}
?> 