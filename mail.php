<?php
$name = $_POST['your-name'];
$email = $_POST['your-email'];
$phone = $_POST['your-phone'];
$type = $_POST['gender'];
$subject = $_POST['your-subject'];
$message = $_POST['your-message'];
$formcontent=" From: $name \n Type: $type \n Phone: $phone \n  Message: $message";
$recipient = "info@nectarfoundation.org";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You! :)" . " -" . "<a href='../#home' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>