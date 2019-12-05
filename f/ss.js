// $(function(){
//   $("#ocs").onsubmit(function(){
//     var form_data = $("#ocs").serializeArray;
//
//     alert(form_data);
//
//
//   });
// });

function submit(){
    var ocs = $('input[name*="ocs"]').val();
    for (var i = 0; i < ocs.length; i++) {
      if (ocs[i] in "2345") {

      }
    }
    $('#content').append(ocs);

}

$('document').ready(function() {

  $('#content').append('hhhh');


});
