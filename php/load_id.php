<?php
  header('Content-Type: application/json');

  $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');
  $result = $mysql->query("SELECT `id` FROM `product`");
  $mysql->close();

  $products = $result->fetch_assoc();
  $i = 0;
  foreach ($products as $product) {
    $_id_[$i] = $i;
    $i++;
  }

  echo json_encode($_id_);

?>
