<?php
  if (isset($_POST["otprav"])) {
    $id = $_GET['id'];
    $to = "fedya_dryagin@mail.ru";
    $subject = "Письмо с сайта";
    $charset = "utf-8";
    $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    $headerss.="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";

    $name = htmlspecialchars(trim($_POST["name"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $mail = htmlspecialchars(trim($_POST["mail"]));
    $vk = htmlspecialchars(trim($_POST["vk"]));
    $comm = htmlspecialchars(trim($_POST["msg"]));


    $msg = "Имя: " . $name . "<br />";
    $msg .= "Телефон: " . $phone . "<br />";
    $msg .= "Электронная почта: " . $mail "<br />";
    $msg .= "Вконтакте: " . $vk . " <br />";
    $msg .= "Комментарий: " . $comm . "<br />";
    $msg .= "id товара: " . $id . "<br />";

    mail($to, $subject, $msg, $headerss);
    header('Location:/sections/thanks.html');

  }
?>
