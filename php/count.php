<!DOCTYPE html>
<html >
  <head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <title>SoftPajamas</title>
    <link href="styles/main.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="javascript/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="javascript/main.js"></script>
  </head>
  <body>
    <div id="header">
      <p align="right">
        +7 9xx xxx xx xx<br>
        sanya@mail.ru
      </p>

      <br><br><br>
      <a href="http://softpajamas.ru">SoftPajamas</a>
      <br><br><br><br>

    </div>
    <div id="sidebar">
      <a href="stock.html"class="sidebar_botton">В наличии</a>
      <a href="new.html"class="sidebar_botton">Новинки</a>
      <a href="popular.html"class="sidebar_botton">Популярно</a>
      <a href="designer.html"class="sidebar_botton">Заказать</a>

    </div>
    <div id="content">
      <?php

        header('Content-Type: application/json');

        $mysql = new mysqli('localhost', 'u0842107_admin', '2Q0n1R1h', 'u0842107_products');

        $result = $mysql->query("SELECT COUNT(*) FROM `product`");

        $mysql->close();
        $product = $result->fetch_assoc();

        echo $product;

      ?>

    </div>

 </body>
</html>
