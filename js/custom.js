var dictionary = {
        'intro-title': {
            'en': "Venezuela is holding sham elections on May 20.",
            'es': "Venezuela tendrá elecciones falsas este 20 de mayo.",
        },
        'intro-text-1': {
            'en': "Venezuela's government, <a href='https://en.wikipedia.org/wiki/Lima_Group'>classified by most countries in the region as non-democratic</a>, called on elections to try to recover its international legitimacy.",
            'es': "El gobierno de Venezuela, <a href='https://es.wikipedia.org/wiki/Grupo_de_Lima'>catalogado por la mayoría del continente como no democrático</a>, convocó a elecciones para intentar recuperar su legitimidad internacional.",
        },
        'intro-text-2': {
            'en': "At Democracy Earth Foundation, we know that <strong class='white'>conditions</strong> are paramount in any election. Here's why the Venezuelan election isn't free or fair.",
            'es': "En la Fundación Democracy Earth sabemos que las <strong>condiciones</strong> son fundamentales para cualquier elección. Aquí te explicamos por la que la elección venezolana no es justa.",
        },
        'btn-what': {
            'en': "What can we do?",
            'es': "¿Qué podemos hacer?",
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

        'maimed-opposition-title': {
            'en': "The opposition is unable to participate",
        },
        'maimed-opposition-text': {
            'en': "The most capable leaders are in jail, in exile, or under threat. More than 40 political parties have been made illegal.",
        },
        'maimed-opposition-sources': {
            'en': `PLEASE HELP GATHER SOURCES HERE`,
        },

        'gerrymandered-registry-title': {
            'en': "The voter registry is heavily gerrymandered",
        },
        'gerrymandered-registry-text': {
            'en': "Many people's voting centers were changed without proper notice. Many people, including those abroad, haven't been able to register to vote.",
        },
        'gerrymandered-registry-sources': {
            'en': `PLEASE HELP GATHER SOURCES HERE`,
        },

        'coerced-voters-title': {
            'en': "Citizens are being blackmailed with food if they don't vote for the government party",
        },
        'coerced-voters-text': {
            'en': "Describe the puntos rojos and other such strategies.",
        },
        'coerced-voters-sources': {
            'en': `PLEASE HELP GATHER SOURCES HERE`,
        },

        'outro-title': {
            'en': "What can we do?",
        },
        'outro-cta-1': {
            'en': "Share this page with friends and family to show them why the election will be fraudulent.",
        },
        'outro-cta-2': {
            'en': "If you're Venezuelan, we invite you to participate in an alternative, open-source election at <a href='https://venezuela.democracy.earth'>venezuela.democracy.earth</a>. Registration opens soon!",
        },
        'outro-cta-3': {
            'en': "We're working on a tool to empower anyone to report fraud during election day. Stay tuned.",
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
