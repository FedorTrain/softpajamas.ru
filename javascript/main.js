function inputProduct(id ,image, name, price) {
  $('#content').append(
    '<a href ="http://softpajamas.ru/product.php?id=' + id + '"><div class="product">'+
      '<img src="./images/' + image + '" alt="Error"/>'+
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
    async: false,
    success: function (data, textStatus, jqXHR) {
      id = data.id;
      name = data.name;
      price = data.price;
      image = data.image;
      get = true;
    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error');
      alert(textStatus);
      alert(errorThrown);
    }
  });
  if (get) {
      inputProduct(id, image, name, price);
      //setTimeout(inputProduct, 500, id, image, name, price);

  }
  return get;
}



$('document').ready(function() {
  ;


  var i;
  var end = 40;
  for (i = 0; i < end; i++) {
    if (product(i)) end++;
  }


});
