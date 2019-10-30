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
    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error');
      alert(textStatus);
      alert(errorThrown);
    }
  });
  inputProduct(image, name, price);

}

$('document').ready(function() {


  product(1);
  product(2);
  product(3);



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
