$("#main-form").submit(function(event){
  event.preventDefault();
  var data = $(this).serialize().split("&");
  // console.log(data);
  var obj={};
  for(var key in data)
  {
    obj[data[key].split("=")[0]] = data[key].split("=")[1];
  }

  console.log(obj);
  //  var data = $(this).serializeArray();
  firebase.database().ref().child('char').push(obj,function(err){if(err){window.alert('Error when submitting data: ' + err.message);}});

});
