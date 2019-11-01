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

var product_id;
function load_id() {
  $.ajax({
    type: "POST",
    url: './php/load_id.php',
    dataType: 'json',
    data: {},
    async: false,
    success: function (data, textStatus, jqXHR) {

      product_id = Object.values(data);

      alert(product_id);

    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error of id');
    }
  });
}

$('document').ready(function() {
  load_id();

  alert(product_id);
  for (i = 1; i < product_id.length; i++) {
    product(product_id[i]);
    //inputProduct(1 ,'rrr.png', 'name', 123);
  }


});
