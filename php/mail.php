<?php
  if (isset($_POST["otprav"])) {
    $id = $_GET['id'];
    $to = "fedya_dryagin@mail.ru";
    $subject = "Письмо с сайта";
    $charset = "utf-8";
    $headerss ="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "Имя: " . $_POST["name"] . "\n";
    $msg .= "Телефон: " . $_POST["phone"] . "\n";
    $msg .= "Электронная почта: " . $_POST["mail"] . "\n";
    // $msg .= "Вконтакте: " . $_POST["vk"] . "\n";
    // $msg .= "Комментарий: " . $_POST["msg"] . "\n";
    mail($to, $subject, $msg, $headerss);
    header('Location:/sections/thanks.html');

  }
?>
