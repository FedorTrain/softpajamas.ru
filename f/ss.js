function submit(){
  $('#res').html('oc[0]');

  var oc = [];

  var data = $('input[name*="ocs"]').val();
  $('#res').html(data);

  for (var i = 0; i < oc.length; i++) {
    if (data[i] == '2') $('#res').html('dddd');
    if (data[i] == '3') oc.push(3);
    if (data[i] == '4') oc.push(4);
    if (data[i] == '5') oc.push(5);
  }

  $('#res').html(oc[0]);

}
