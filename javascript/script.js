function inputProduct(image, name, price) {
  $('#content').append(
    '<div class="product">'+
      '<img src="./images/' + image + '" alt="Error"/>'+
      '<p align="center">' + name + '</p>'+
      '<p align="center">' + price + '</p>'+
    '</div>');
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
    inputProduct(image, name, price);
  }
  return get;
}

$('document').ready(function() {
  Number i = 1;
  while (product(i)){
    i++;

  }




  // $('#new').click(function() {
  //   $('#content').append('<p>We dont have news!</p>');
  // });
  // $('#stock').click(function() {
  //   $('#content').append('<p>We dont have stock!</p>');
  // });
  // $('#designer').click(function() {
  //   $('#content').append('<p>We dont have designer!</p>');
  // });
  // $('#popular').click(function() {
  //   $('#content').append('<p>We are not popular!</p>');
  // });



});
