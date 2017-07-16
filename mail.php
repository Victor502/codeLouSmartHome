
<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "victorahorton@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<h1>Thank You!</h1>" . " " . "<a href='contactUs.html' style='text-decoration:none;color:#ff0099;'><h1> Return Home</h1></a>";
?>
