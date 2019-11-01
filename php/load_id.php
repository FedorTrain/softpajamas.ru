<?php
  header('Content-Type: application/json');

  $id = $_POST['id'];

  $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');

  $result = $mysql->query("SELECT * FROM `product`");

  $mysql->close();

  $products = $result->fetch_assoc();
  $i = 0;
  // for ($i = 0; $i < count($product); $i++) {
  //   $_id_[$product[$i].id];
  foreach ($products as $product) {
    $_id_[$i] = $product -> id;
    $i++;
  }

  echo json_encode($products);

?>
