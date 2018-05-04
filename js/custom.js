var dictionary = {
        'intro-title': {
            'en': "Venezuela is holding sham elections on May 20.",
            'es': "Venezuela tendrá elecciones falsas este 20 de mayo.",
        },
        'intro-text': {
            'en': "It’s time to create a new space to propose change.",
            'es': "Es hora de crear un nuevo espacio para proponer cambio.",
        },
        'btn-what': {
            'en': "Propose change",
            'es': "Propón cambio",
        },

        'manipulated-tallies-title': {
            'en': "Tallies from the most recent elections have been verifiably manipulated.",
            'es': "Los resultados de las elecciones más recientes han sido demostrablemente manipulados.",
        },
        'manipulated-tallies-text': {
            'en': "Smartmatic, the company that built the technology behind every Venezuelan election from 2004 to 2017, declared that the results of the 2017 Constituent Assembly election were manipulated “without any doubt”.<br/><br/>The government recently switched to a new system run by an unknown company, and conclusive proof of fraud was found.",
            'es': "Smartmatic, la compañía que desarrolló la tecnología detrás de todas las elecciones venezolanas desde 2004 hasta 2017, declaró que los resultados de la elección a la Asamblea Nacional Constituyente fueron trastocados “sin duda alguna”.",
        },
        'manipulated-tallies-sources': {
            'en': `<li><a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>Smartmatic's full statement</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/09/20/the-replacement-killers/'>Opinion piece on Ex-Clé, Smartmatic's replacement</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/10/19/psuv-steals-gubernatorial-election-bolivar-state/'>Proof of fraud in the 2017 Bolívar state elections</a></li>`,

            'es': `<li><a target='_blank' href='http://www.smartmatic.com/news/article/smartmatic-statement-on-the-recent-constituent-assembly-election-in-venezuela/'>Smartmatic's full statement</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/09/20/the-replacement-killers/'>Opinion piece on Ex-Clé, Smartmatic's replacement</a></li>
                  <li><a target='_blank' href='https://www.caracaschronicles.com/2017/10/19/psuv-steals-gubernatorial-election-bolivar-state/'>Proof of fraud in the 2017 Bolívar state elections</a></li>`,
        },

        'democracy-title': {
            'en': "As official institutions take a dictatorial turn, Venezuelans continue to bet on democracy",
        },
        'democracy-text': {
            'en': "We are building social consensus tools that are more transparent, efficient and impossible to corrupt.<br/>It's time to start proposing change and working for it.",
        },

        'sovereign-title': {
            'en': "Join the discussions at Sovereign",
        },
        'sovereign-text': {
            'en': "Register at <a href='https://venezuela.democracy.earth'>venezuela.democracy.earth</a> and participate in discussions you care about as a Venezuelan.",
        },
};

var current_lang = 'en';

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "NOT AVAILABLE – PLEASE HELP US COMPLETE ALL THE TRANSLATIONS");
    });
}

translate();

$('#es_button').click(function(){ current_lang = 'es'; translate(); return false; });
$('#en_button').click(function(){ current_lang = 'en'; translate(); return false; });
