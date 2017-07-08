<?php
session_start();
unset($_SESSION['al']);
session_destroy();

header("Location: refresh.html");
exit;
?>