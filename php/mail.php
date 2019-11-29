<?php
  if (isset($_POST["otprav"])) {
    $id = $_GET['id'];
    $to = "fedya_dryagin@mail.ru";
    $subject = "Письмо с сайта";
    $charset = "utf-8";
    $headerss ="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $mail = htmlspecialchars($_POST["mail"]);
    $vk = htmlspecialchars($_POST["vk"]);
    $comm = htmlspecialchars($_POST["msg"]);
    $name = urldecode($_POST["name"]);
    $phone = urldecode($_POST["phone"]);
    $mail = urldecode($_POST["mail"]);
    $vk = urldecode($_POST["vk"]);
    $comm = urldecode($_POST["msg"]);
    $msg = "Имя: " . $name . "\n";
    $msg .= "Телефон: " . $phone . "\n";
    $msg .= "Электронная почта: " . $mail . "\n";
    $msg .= "Вконтакте: " . $vk . "\n";
    $msg .= "Комментарий: " . $comm . "\n";
    mail($to, $subject, $msg, $headerss);
    header('Location:/sections/thanks.html');

  }
?>
