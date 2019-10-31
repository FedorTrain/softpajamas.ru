
      <?php

        header('Content-Type: application/json');

        $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');

        $result = $mysql->query("SELECT COUNT(*) FROM `product`");

        $mysql->close();
        $product = $result->fetch_assoc();

        echo json_encode($product);

      ?>
