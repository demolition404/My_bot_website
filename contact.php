<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set the recipient email address
  $to = "da.blog007@gmail.com";
  // Set the subject of the email
  $subject = "Contact Us Form Submission";
  // Set the email message
  $email_message = "Name: " . $name . "\n";
  $email_message .= "Email: " . $email . "\n";
  $email_message .= "Message: " . $message . "\n";

  // Additional headers
  $headers = "From: " . $email . "\r\n" .
    "Reply-To: " . $email . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

  // Send the email
  mail($to, $subject, $email_message, $headers);

  // Redirect to thank you page or display success message
  header("Location: thank-you.html");
  exit;
}
?>
