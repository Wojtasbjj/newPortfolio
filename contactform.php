<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "shop@kushaze.pl";
    $headers = "From: ".$mailFrom;
    $txt = "You have recived an e-mail from: ".$name.".\n\n".$message;


    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}