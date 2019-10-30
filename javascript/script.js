$('document').ready(function() {
  let dproduct = new Object();
  alert('go');
  $.ajax({
    type: "POST",
    url: './php/get.php',
    dataType: 'json',
    data: {id: 2},
    success: function (data, textStatus, jqXHR) {
      alert('good');
      alert(data.name);
      alert(textStatus);
      product = data;
    },
    error: function (jqXHR, textStatus, errorThrown){
      alert('error');
      alert(textStatus);
      alert(errorThrown);
    }
  });
  // $.post(
  //   "/var/www/u0842107/data/www/softpajamas.ru/php/get.php",
  //   {id: 2},
  //   getData
  // );
  //
  // function getData(data)
  // {
  //   alert(data);
  //   dproduct = data;
  // };
  alert('end');


  $('#content').append(
    '<div class="product">'+
      '<img src="' + './images/rrr.png"' + ' alt="Error"/>'+
      '<p align="center">Name</p>'+
      '<p align="center">400p</p>'+
    '</div>');
  $('#content').append(
    '<div class="product">'+
      '<img src="./images/' + dproduct.image + ' alt="Error"/>'+
      '<p align="center">' + dproduct.name + '</p>'+
      '<p align="center">' + dproduct.price + '</p>'+
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
