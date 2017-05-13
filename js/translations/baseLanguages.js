var languages = new Object();

languages['eng'] = {
  pal: 'Pick a language!',

};
languages['por'] = {
  pal: 'Selecione uma linguagem!',
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
