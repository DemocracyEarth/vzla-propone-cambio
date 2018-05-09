var dictionary = {
        'intro-title': {
            'en': "Venezuela is holding sham elections on May 20",
            'es': "Venezuela tendrá elecciones falsas este 20 de mayo",
        },
        'intro-text': {
            'en': "It’s time to act in a new space to propose change",
            'es': "Es hora de actuar en un nuevo espacio para proponer cambio",
        },
        'btn-what': {
            'en': "Propose change",
            'es': "Propón cambio",
        },

        'manipulated-tallies-title': {
            'en': "Venezuela has collapsed",
            'es': "El pais está en colapso",
        },
        'manipulated-tallies-text': {
            'en': "Venezuela collapsed and participating in an election under the framework of the regime only gives legitimacy to Maduro.<br/><br/>Smartmatic even declared that the results of the illegitimate Constituent Assembly election were manipulated “without any doubt”.",
            'es': "Venezuela ha colapsado y participar en las elecciones bajo el marco del régimen solo le da legitimidad a Maduro.<br/><br/>Smartmatic inclusive declaró que los resultados de la elección de la ilegítima Asamblea Nacional Constituyente fueron trastocados “sin duda alguna”.",
        },
        'manipulated-tallies-sources': {
            'en': `<li><a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>Smartmatic's full statement</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/09/20/the-replacement-killers/'>Opinion piece on Ex-Clé, Smartmatic's replacement</a></li>`,
            'es': `<li><a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>Reporte completo de Smartmatic</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/09/20/the-replacement-killers/'>Ex-Clé, el remplazo a Smartmatic</a></li>`,
        },

        'democracy-title': {
            'en': "Venezuelans are still fighting for democracy",
            'es': "Los venezolanos seguimos luchando por democracia",
        },
        'democracy-text': {
            'en': "We are building social consensus tools that are more transparent, efficient and impossible to corrupt.<br/><br/>We are building be new realms for the democratic manifestation of ideas.",
            'es': "Estamos construyendo herramientas de consenso social mas transparentes, eficicientes e imposibles de corrumpir.<br/><br/>Estamos creando alternativas de gobernanza democrática para Venezuela más allá de la coyuntura política-electoral. ",
        },
        'learn-more-sources': {
            'en': `<li><a target='_blank' href='https://medium.com/@DemocracyEarth/fb7b89924d47'>Learn more about this initiative</a></li>`,
            'es': `<li><a target='_blank' href='https://medium.com/@DemocracyEarth/96081eb95bd7'>Aprende mas sobre esta iniciativa</a></li>`,
        },

        'sovereign-title': {
            'en': "It's time to propose change and work for it",
            'es': "Es hora de proponer cambio y trabajar por ello",
        },
        'sovereign-text': {
            'en': "Raise your voice: register at <a class='styless-anchor' href='https://venezuela.democracy.earth'>venezuela.democracy.earth</a> and participate in the proposition of ideas for a change in Venezuela.",
            'es': "Haz oir tu voz: crea tu cuenta en <a class='styless-anchor' href='https://venezuela.democracy.earth'>venezuela.democracy.earth</a> y participa en la propuesta de ideas por un cambio para Venezuela.",
        },
        'how-to-sources': {
            'en': `<li><a target='_blank' href='#'>How do I participate?</a></li>`,
            'es': `<li><a target='_blank' href='#'>¿Como participo?</a></li>`,
        },
        'outro-text': {
            'en': "Initiative driven by the Democracy Earth Foundation and the Human Rights Foundation in collaboration with Venezuelans both in the country and the diaspora",
            'es': "Iniciativa impulsada por Democracy Earth Foundation y Human Rights Foundation en conjunto con venezolanos dentro y fuera del país",
        },
};

var current_lang = 'es';

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "NOT AVAILABLE – PLEASE HELP US COMPLETE ALL THE TRANSLATIONS");
    });
}

translate();

$('#es_button').click(function(){ current_lang = 'es'; translate(); return false; });
$('#en_button').click(function(){ current_lang = 'en'; translate(); return false; });
