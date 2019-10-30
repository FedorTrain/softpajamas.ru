<?php
  header('Content-Type: application/json');

  $id = $_POST['id'];

  $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');

  $result = $mysql->query("SELECT * FROM `product` WHERE `id` = 2");
  $mysql->close();

  if(!$result) {
    echo json_encode('err');
  } else {
    $product = $result->fetch_assoc();
    echo json_encode($product);
  }
?>
