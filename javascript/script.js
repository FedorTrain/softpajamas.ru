$('document').ready(function() {
  var name = 'pajamas';
  var price = 1000;
  var image = 'ppp.png';
  var id = 2;
  $.ajax({
    type: "POST",
    url: './php/get.php',
    dataType: 'json',
    data: {id: 2},
    success: function (data, textStatus, jqXHR) {
      
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


  $('#content').append(
    '<div class="product">'+
      '<img src="' + './images/rrr.png"' + ' alt="Error"/>'+
      '<p align="center">Name</p>'+
      '<p align="center">400p</p>'+
    '</div>');
  $('#content').append(
    '<div class="product">'+
      '<img src="./images/' + image + '" alt="Error"/>'+
      '<p align="center">' + name + '</p>'+
      '<p align="center">' + price + '</p>'+
    '</div>');





  $('#new').click(function() {
    $('#content').append('<p>We dont have news!</p>');
  });
  $('#stock').click(function() {
    $('#content').append('<p>We dont have stock!</p>');
  });
  $('#designer').click(function() {
    $('#content').append('<p>We dont have designer!</p>');
  });
  $('#popular').click(function() {
    $('#content').append('<p>We are not popular!</p>');
  });



});
