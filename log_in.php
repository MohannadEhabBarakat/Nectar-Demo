<?php
// Start the session
session_start();

//connect to DB
$user="root";
$pass="";
$db="editor";
$db= new mysqli('localhost',$user,$pass,$db) or die("unablle to connect");

//Read form
$username = $_POST["uname"];
$pass = $_POST["psw"];

if (ctype_alnum ($username)){
    $result = $db->query("SELECT * FROM login where username='$username'");
    
    if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()){
        
        if (password_verify ($pass,$row["pass"])){
            $_SESSION["al"] = $user;
            header("Location: index.html");
            exit();
        }
        else{echo "Go to hell my dear hacker";}
    }} 

    else {echo "you are not $username idiot";}
$db->close();
    
}
?>