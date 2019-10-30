$('document').ready(function() {
  var product;
  $.ajax({
    type: "POST",
    url: './php/get.php',
    dataType: 'json',
    data: 'id=2',
    success: function (obj, textstatus) {
                product = obj.result;
              }
  });


  $('#content').append(`
  <div class="product">
    <img src="./images/ppp.png" alt="Error" />
    <p align="center">Name</p>
    <p align="center">400p</p>
  </div>
  <div class="product">
  <p align="center">${product[name]}</p>
  <p align="center">${product[price]}p</p>
  </div>`);

  // <img src="./images/${product[image]}" alt="Error" />


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
