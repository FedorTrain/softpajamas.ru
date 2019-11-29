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

    $name = urldecode($name);
    $phone = urldecode($phone);
    $mail = urldecode($mail);
    $vk = urldecode($vk);
    $comm = urldecode($comm);

    $msg = "Имя: " . $name . "  ";
    $msg .= "Телефон: " . $phone . "  ";
    $msg .= "Электронная почта: " . $mail . "  ";
    $msg .= "Вконтакте: " . $vk . "  ";
    $msg .= "Комментарий: " . $comm . "   ";

    mail($to, $subject, $msg, $headerss);
    header('Location:/sections/thanks.html');

  }
?>
