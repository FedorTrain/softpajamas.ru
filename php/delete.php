<!DOCTYPE html>
<html >
  <head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <title>SoftPajamas</title>
  </head>
  <body>

    <div id="content">
      <?php
        $pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

        if ($pass == "dickduck") {

          $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);

          $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');
          $mysql->query("DELETE FROM `product` WHERE `name` = $name");

          $mysql->close();

        }
        header('Location:/php/admin.html');

      ?>

    </div>

 </body>
</html>
