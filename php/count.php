<?php
  header('Content-Type: application/json');

  $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');

  $result = $mysql->query("SELECT COUNT(1) FROM product");

  $mysql->close();

  echo json_encode($result);

?>
