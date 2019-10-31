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
        $pass = $_POST['pass'];
        echo $pass;
        if ($pass == "dickduck") {

          $id = $_POST['id'];
          echo $id;
          $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');
          $mysql->query("DELETE FROM product WHERE id = $id");
          $mysql->close();

        }
        else {
          echo "password is bad";
        }
        exit();
        header('Location:/admin.html');

      ?>

    </div>

 </body>
</html>
