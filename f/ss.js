function submit(){
    var ocs = [];
    var data = $('input[name*="ocs"]').val();
    for (var i = 0; i < ocs.length; i++) {
      if (data[i] === '2') ocs.push(2);
      if (data[i] === '3') ocs.push(3);
      if (data[i] === '4') ocs.push(4);
      if (data[i] === '5') ocs.push(5);
    }

    $('#content').append(ocs);

}
