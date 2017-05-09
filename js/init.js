firebase.database().ref('char').on('value', function (snapshot) {

  $('#entries').html('Carregando...');

  var html;

  snapshot.forEach(function (item) {

    var entry = item.val();
    console.log(entry);

    html = `<div class="col-md-4">
    <a href="entry.html?id=${item.getKey()}" style="text-decoration:none!important;">
    <div class="panel panel-info">
    <div class="panel-heading">
    <h3 class="panel-title">Nome:  ${entry.nome}</h3>
    </div>
    <div class="panel-body">
    <small>Jogador: ${entry.jogador}  </small>
    <hr>
    </div>
    </div>
    </a>
    </div>` + html; // prepend เพราะต้องการให้ reverse ลำดับ

  });

  if(html){$('#entries').html(html);}

});
