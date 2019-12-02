<?php
  if (isset($_POST["otprav"])) {
    $id = $_GET['id'];
    $to = "fedor.dryagin@gmail.com";
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

    $name = substr(urldecode($name), 0, 20);
    $phone = substr(urldecode($phone), 0, 15);
    $mail_1 = substr(urldecode($mail), 0, 11);
    $vk = substr(urldecode($vk), 0, 60);
    $mail_2 = substr(urldecode($mail), 11, 60);
    $comm = substr(urldecode($comm), 0, 1000);

    $msg = "Имя: " . $name . "<br />";
    $msg .= "Телефон: " . $phone . "<br />";
    $msg .= "Электронная почта: " . $mail_1 . $mail_2 . "<br />";
    $msg .= "Вконтакте: ". $vk ." <br />";
    $msg .= "Комментарий: " . $comm . "<br />";
    $msg .= "id товара: " . $id . "<br />";

    mail($to, $subject, $msg, $headerss);
    header('Location:/sections/thanks.html');

  }
?>
