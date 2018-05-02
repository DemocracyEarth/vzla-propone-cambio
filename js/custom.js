var dictionary = {
        'intro-h1': {
            'en': "Venezuela is holding fraudulent elections on May 20.",
            'es': "Venezuela tendrá elecciones fraudulentas este 20 de mayo.",
        },
        'intro-p': {
            'en': "The Venezuelan government party likes to say that more elections imply more democracy. We at Democracy Earth Foundation know that electoral conditions are everything.<br/><br/>Here's why the upcoming presidential elections are anything but fair.",
            'es': "El partido de gobierno de Venezuela dice que mientras más elecciones, más democracia. En la Fundación Democracy Earth sabemos que las condiciones electorales lo son todo.<br/><br/>Aquí hay una lista de razones por la que la elección venezolana no es justa.",
        },

        'smartmatic-h3': {
            'en': "Venezuela's latest electronic voting system has been exposed as fraudulent.",
            'es': "Quedó claro que el sistema de voto electrónico en Venezuela es fraudulento.",
        },
        'smartmatic-lead': {
            'en': "Smartmatic, the company that built the technology behind every Venezuelan election from 2004 to 2017, declared that the results of the 2017 Constituent Assembly election were manipulated “without any doubt”.",
            'es': "Smartmatic, la compañía que desarrolló la tecnología detrás de todas las elecciones venezolanas desde 2004 hasta 2017, declaró que los resultados de la elección a la Asamblea Nacional Constituyente fueron manipulados “sin duda alguna”.",
        },
        'smartmatic-p': {
            'en': "Read their <a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>full statement</a>.",
            'es': "Lee la <a target='_blank' href='http://www.smartmatic.com/es/noticias/articulo/declaracion-de-smartmatic-sobre-la-reciente-eleccion-de-la-asamblea-constituyente-en-venezuela/'>declaración completa</a>.",
        },

};

var current_lang = 'en';

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();

$('#es_button').click(function(){ current_lang = 'es'; translate(); return false; });
$('#en_button').click(function(){ current_lang = 'en'; translate(); return false; });
