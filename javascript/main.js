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
      alert(textStatus);
      alert(errorThrown);
    }
  });
  // if (get) {
  //     setTimeout(inputProduct, 500, id, image, name, price);
  //
  // }
  return get;
}



$('document').ready(function() {
  //setTimeout(inputProduct, 500, 2, '1A3553E2-0EBD-4196-8AB6-895F3E833145.jpeg', 'name', 123);



  var i;
  var end = 40;
  for (i = 0; i < end; i++) {
    if (product(i)) end++;
  }


});
