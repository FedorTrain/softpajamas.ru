<?php
  $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
  $price= filter_var(trim($_POST['price']), FILTER_SANITIZE_STRING);
  $image = filter_var(trim($_POST['image']), FILTER_SANITIZE_STRING);

  $mysql = new mysqli('server252.hosting.reg.ru', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');
  $mysql->query("INSERT INTO `products` (`name`, `price`, `image`)
  VALUES('$name','$price','$image')");
  $musql->close();

  header('Location: /');
?>
