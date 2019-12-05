function submit(){
    var oc = [];
    var data = $('input[name*="ocs"]').val();
    for (var i = 0; i < ocs.length; i++) {
      if (data[i] == '2') oc.push(2);
      if (data[i] == '3') oc.push(3);
      if (data[i] == '4') oc.push(4);
      if (data[i] == '5') oc.push(5);
    }

    $('#content').append(oc[0]);

}
