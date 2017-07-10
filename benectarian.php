<?php
require_once('PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer();


$mail->isSMTP();                                        // Set mailer to use SMTP
$mail->Host = 'smtp.zoho.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@nectarfoundation.org';                 // SMTP username
$mail->Password = '1234567890987654321';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('info@nectarfoundation.org', 'Info @ Nectar_benectarian');
$mail->addAddress('info@nectarfoundation.org', 'Info @ Nectar_benectarian');     // Add a recipient

$x=$_GET["x"];
$name=$_GET["name"];
$xp=$_GET["xp"];

$mail->addAttachment('assets/images/cv/'.$x);    // Optional name
$mail->addAttachment('assets/pdf/'.$xp);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Nectar_benectarian';
$mail->Body    = $_GET["text"];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 1;
}
?>

