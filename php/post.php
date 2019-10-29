<!DOCTYPE html>
<html >
  <head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <title>SoftPajamas</title>
    <link href="styles/style.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="javascript/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="javascript/script.js"></script>
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
      <a href="designer.html"class="sidebar_botton">Конструктор</a>

    </div>
    <div id="content">
      <?php
      $path = 'images/';
        if (@copy($_FILES['image']['tmp_name'], $path . $_FILES['image']['name'])) {
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
