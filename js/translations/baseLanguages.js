var languages = new Object();

languages['eng'] = {
  pal: 'Pick a language!',
  profile: 'Profile',
  home: 'Home',
  create: 'Create',
  playerCardList: 'Player Card List',
  //player: 'Player',
  //name: 'Name',
};
languages['por'] = {
  pal: 'Selecione uma linguagem!',
  profile: 'Perfil',
  home: 'Home',
  create: 'Criar',
  playerCardList: 'Lista De Folha de Jogadores',
  //player: 'Jogador',
  //name: 'Nome',

};

$(document).ready(function () {
    $('.view2').hide();
    $('.slide2').click(function(event) {
      console.log($(this));
        $(this).siblings('div.view2').toggle('fast');
    });
});

function preReq() {
    var deflang = getValue('deflang');

    if (!(deflang in languages)) {
    	deflang = 'eng';
    	setValue('language', 'eng', 365);
	}

	changeLanguage(deflang);
}

function changeLanguage(language){
    var values = languages[language];
    for (var key in values) {
         document.getElementById(key).innerHTML = values[key];
    }
}

function setValue(NameOfValue, value, expiredays) {
    var ExpireDate = new Date();
    ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
    document.cookie = NameOfValue + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}
function getValue(NameOfValue) {
    if (document.cookie.length > 0) {
        begin = document.cookie.indexOf(NameOfValue + "=");
        if (begin != -1) {
            begin += NameOfValue.length + 1;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(begin, end));
        }
    }
    return null;
}
