<?php
  header('Content-Type: application/json');

  $id = $_POST['id'];
  //echo 'id = ' . $id;
  $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');

  $result = $mysql->query("SELECT * FROM `product` WHERE `id` = $id");
  $mysql->close();
  $product = $result->fetch_assoc();
  //echo 'good connect';
//  echo $product;
  echo json_encode($product);

?>
