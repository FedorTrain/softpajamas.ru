var product;
$.ajax({
  type: "POST",
  url: './php/get.php',
  dataType: 'json',
  data: 2,
  success: function (obj, textstatus) {
              dataProd= obj.result;
            }
});

$('document').ready(function() {
  $('#content').append(`
  <div class="product">
    <img src="${product[image]}" alt="Error" />
    <p align="center">${product[name]}</p>
    <p align="center">${product[price]}p</p>
  </div>
  <div class="product">
    <img src="./images/ppp.png" alt="Error" />
    <p align="center">Name</p>
    <p align="center">400p</p>
  </div>`);


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
