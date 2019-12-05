$(function(){
  $("#form").onsubmit(function(){
    var form_data = $("#ocs").serializeArray;

    alert(form_data);

    $('#content').append(
      'hhhh'
    );
  });
});
