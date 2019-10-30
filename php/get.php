<?php
  $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');
  echo "Go";

  $result = $mysql->query("SELECT * FROM `product` WHERE `id` = `2`");
  if(!$result) {
    echo "OPA";
  } else {

  $product = $result->fetch_assoc();

  print_r($user);

  }
  $mysql->close();
  exit();
  header('Location: /');

?>
