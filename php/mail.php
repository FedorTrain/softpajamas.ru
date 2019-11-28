<?php
  if (isset($_POST["otprav"])) {
    $to = "fedya_dryagin@mail.ru";
    $subject = "Письмо с сайта";
    $charset = "utf-8";
    $headerss ="Content-type: text/html; charset=$charset\r\n";
    $headerss.="MIME-Version: 1.0\r\n";
    $headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
    $msg = "Имя: ".$_POST["name"]."\n";$msg .= "Сообщение: ".$_POST["msg"]."\n";
    echo "Go hahuy";
    if (mail($to, $subject, $msg, $headerss)) {
      echo "Сообщение успешно отправлено!";
    }
  }
?>
