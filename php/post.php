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
      $path = 'images/';
        if (move_uploaded_file($_FILES['image']['tmp_name'],$path . $_FILES['image']['name'])) {
          $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
          $price = filter_var(trim($_POST['price']), FILTER_SANITIZE_STRING);
          $image = $_FILES['image']['name'];

          $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');
          $mysql->query("INSERT INTO `product` (`name`, `price`, `image`)
          VALUES('$name','$price','$image')");

          $mysql->close();
          header('Location: /');
        } else echo 'Error';
      ?>

    </div>

 </body>
</html>
