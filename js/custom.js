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
            'en': "Tallies from the most recent elections have been verifiably manipulated.",
            'es': "Los resultados de las elecciones más recientes fueron manipulados.",
        },
        'manipulated-tallies-text': {
            'en': "Smartmatic, the company that built the technology behind every Venezuelan election from 2004 to 2017, declared that the results of the 2017 Constituent Assembly election were manipulated “without any doubt”.<br/><br/>The government recently switched to a new system run by an unknown company, and conclusive proof of fraud was found.",
            'es': "Smartmatic declaró que los resultados de la elección a la Asamblea Nacional Constituyente fueron trastocados “sin duda alguna”. <br/><br/>Venezuela ha colapsado y participar en las elecciones bajo el marco del regime solo le da legimtimidad a Maduro.",
        },
        'manipulated-tallies-sources': {
            'en': `<li><a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>Smartmatic's full statement</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/09/20/the-replacement-killers/'>Opinion piece on Ex-Clé, Smartmatic's replacement</a></li>`,
            'es': `<li><a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>Reporte completo de Smartmatic</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/09/20/the-replacement-killers/'>Ex-Clé, el remplazo a Smartmatic</a></li>`,
        },

        'democracy-title': {
            'en': "As official institutions take a dictatorial turn, Venezuelans continue to bet on democracy",
            'es': "Los venezolanos seguimos luchando por democracia",
        },
        'democracy-text': {
            'en': "We are building social consensus tools that are more transparent, efficient and impossible to corrupt.<br/>It's time to start proposing change and working for it.",
            'es': "Estamos construyendo herramientas de consenso social mas transparentes, eficicientes e imposibles de corrumpir.<br/><br/>Estamos creando alternativas de gobernanza democrática para Venezuela más allá de la coyuntura política-electoral. ",
        },
        'learn-more-sources': {
            'en': `<li><a target='_blank' href='#'>Learn more about this initiative</a></li>`,
            'es': `<li><a target='_blank' href='#'>Aprende mas sobre esta iniciativa</a></li>`,
        },

        'sovereign-title': {
            'en': "Join the discussions at Sovereign",
            'es': "Es hora de empezar a proponer cambio y a trabajar por ello",
        },
        'sovereign-text': {
            'en': "Register at <a href='https://venezuela.democracy.earth'>venezuela.democracy.earth</a> and participate in discussions you care about as a Venezuelan.",
            'es': "Haz oir tu voz: crea tu cuenta en <a href='https://venezuela.democracy.earth'>venezuela.democracy.earth</a> y participa en la propuesta de ideas por un cambio para Venezuela",
        },
        'how-to-sources': {
            'en': `<li><a target='_blank' href='#'>How do I participate?</a></li>`,
            'es': `<li><a target='_blank' href='#'>¿Como participo?</a></li>`,
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
