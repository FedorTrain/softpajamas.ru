function inputProduct(id ,image, name, price) {
  $('#content').append(
    '<a href ="http://softpajamas.ru/product.php?id=' + id + '"><div class="product">'+
      '<img src="./images/' + image + '" alt="Loading..."/>'+
      '<p align="center">' + name + '</p>'+
      '<p align="center">' + price + 'р</p>'+
    '</div></a>');
}

function product(id) {
  var name;
  var price;
  var image;
  var id;
  var get = false;
  $.ajax({
    type: "POST",
    url: './php/get.php',
    dataType: 'json',
    data: {id: id},
    //async: false,
    success: function (data, textStatus, jqXHR) {
      id = data.id;
      name = data.name;
      price = data.price;
      image = data.image;
      get = true;
      inputProduct(id, image, name, price);
    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error');
    }
  });
  return get;
}

function load_id() {
  var _id_ = [];
  $.ajax({
    type: "POST",
    url: './php/load_id.php',
    dataType: 'json',
    data: {},
    success: function (data, textStatus, jqXHR) {

      alert(data);

    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error of id');
    }
  });
}

$('document').ready(function() {
  load_id();
  var product_id = [];


  for (i = 0; i < 100; i++) {
    product(i);
  }


});
