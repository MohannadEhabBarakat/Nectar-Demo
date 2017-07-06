<?php
$hashme = $_POST["hash"];
echo password_hash($hashme, PASSWORD_DEFAULT)
?>