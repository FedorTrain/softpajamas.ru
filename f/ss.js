$("#ocs").submit(function() {

  var oc = [];

  var data = $('input[name*="ocsi"]').val();

  var i;
  var res = 0;
  for (i = 0; i < data.length; i++) {
    if (data[i] == '2') oc.push(2);
    if (data[i] == '3') oc.push(3);
    if (data[i] == '4') oc.push(4);
    if (data[i] == '5') oc.push(5);
  }
  for (i = 0; i < oc.length; i++) {
    res += oc[i];
  }

  res /= i;

  $('#res').html(res);

});

// function submit(){
//
//   var oc = [];
//
//   var data = $('input[name*="ocs"]').val();
//
//   var i;
//   var res = 0;
//   for (i = 0; i < data.length; i++) {
//     if (data[i] == '2') oc.push(2);
//     if (data[i] == '3') oc.push(3);
//     if (data[i] == '4') oc.push(4);
//     if (data[i] == '5') oc.push(5);
//   }
//   for (i = 0; i < oc.length; i++) {
//     res += oc[i];
//   }
//
//   res /= i;
//
//   $('#res').html(res);
//
// }
