function inputProduct(id ,image, name, price) {
  $('#content').append(
    '<a href ="http://softpajamas.ru/product.php?id=' + id + '"><div class="product">'+
      '<img src="./images/' + image + '" alt="Loading"/>'+
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
      inputProduct(id, image, name, price);

    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error');
    }
  });
  return get;
}



$('document').ready(function() {


  for (i = 0; i < 100; i++) {
    product(i);
  }


});
