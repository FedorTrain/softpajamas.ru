function inputProduct(id, image, name, price, info, type) {
  $('#content').append(
    '<a href ="http://softpajamas.ru/product.php?id=' + id + '" class="a_product"><div class="product">'+
      '<img src="http://softpajamas.ru/images/' + image + '" alt="Loading..."/>'+
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
    url: 'http://softpajamas.ru/php/get.php',
    dataType: 'json',
    data: {id: id},
    //async: false,
    success: function (data, textStatus, jqXHR) {
    //  alert("good, maybe");
      id = data.id;
      name = data.name;
      price = data.price;
      image = data.image;
      info = data.info;
      type = data.type;
      if (data.number > 0) {
        inputProduct(id, image, name, price, info, type);
      }
      get = true;
    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error');
    }
  });
  return get;
}

var product_id;
function load_id() {
  $.ajax({
    type: "POST",
    url: 'http://softpajamas.ru/php/load_id.php',
    dataType: 'json',
    data: {},
    async: false,
    success: function (data, textStatus, jqXHR) {
      product_id = Object.values(data);
    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error of id');
    }
  });
}

$('document').ready(function() {
  load_id();
  for (i = 0; i < product_id.length ; i++) {
    product(product_id[i]);
  }
});