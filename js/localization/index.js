$('#selectLanguageDropdown').localizationTool({
    //--=============================
    //  LANGUAGES
    //===============================--//
    'languages': {
        'english': {
            'country': 'United States',
            'language': 'en',
            'countryTranslated': 'United States',
            'languageTranslated': 'English',
            'flag': {
                'url': '../images/flags/us.svg'
            }
        },
        'german': {
            'language': 'de',
            'country': 'Germany',
            'countryTranslated': "Deutschland",
            'languageTranslated': "de",
            'flag': {
                'url': '../images/flags/de.svg'
            }
        },
        'bulgarian': {
            'language': 'bg',
            'country': 'Bulgaria',
            'countryTranslated': "България",
            'languageTranslated': "бг",
            'flag': {
                'url': '../images/flags/bg.svg'
            }
        },
    },

    //--=============================
    //  SETTINGS
    //===============================--//
    'defaultLanguage': 'english',
    'ignoreUnmatchedSelectors': true,
    'showFlag': true,
    'showCountry': false,
    'showLanguage': true,
    'onLanguageSelected': function (languageCode) {
        /*
         * When the user translates we set the cookie and new url
         */
        var cookieConsent = $.cookie('cookieConsent');
		if (typeof cookieConsent !== 'undefined') {
            $.cookie('userLanguage', languageCode);
		}
        
        var newUrl = updateQueryStringParameter(window.location.href, 'lang', languageCode);
        window.history.pushState("", "", newUrl);
        location.reload();
        return true;
    },
    'labelTemplate': '{{language}}',


    //--=============================
    //  TRANSLATIONS
    //===============================--//
    'strings': {
        //--=============================
        //  HIDDEN NAV BAR
        //===============================--//
        'id:navbarEl-Home': {
            'german': 'StartSeite',
            'bulgarian': 'Начало'
        },
        'id:navbarEl-Resume': {
            'german': 'Resümee',
            'bulgarian': 'Резюме'
        },
        'id:navbarEl-Services': {
            'german': 'Dienstleistungen',
            'bulgarian': 'Услуги'
        },
        'id:navbarEl-Portfolio': {
            'german': 'Portfolio',
            'bulgarian': 'Портфолио'
        },
        'id:navbarEl-Blog': {
            'german': 'Blog',
            'bulgarian': 'Блог'
        },
        'id:navbarEl-Contact': {
            'german': 'Kontakt',
            'bulgarian': 'Контакт'
        },
        /*=============================*/

        //--=============================
        //  SLIDESHOW
        //===============================--//
        'Hello! I\'m': {
            'german': 'Hallo! Ich bin',
            'bulgarian': 'Здрасти! Аз съм'
        },
        'Born in Bulgaria': {
            'german': 'Geboren in Bulgaria',
            'bulgarian': 'Роден в България'
        },
        'Settled in Austria': {
            'german': 'Angesiedelt in Österreich ',
            'bulgarian': 'Установен в Австрия'
        },
        'A Solo Game Developer': {
            'german': 'Ein Solo-Spieleentwickler',
            'bulgarian': 'Соло Разработчик на компютърни игри'
        },
        'I also love to': {
            'german': 'Ich liebe auch zu',
            'bulgarian': 'Обичам също да'
        },
        'Train': {
            'german': 'Trainieren',
            'bulgarian': 'Тренирам'
        },
        /*=============================*/


        //--=============================
        //  ABOUT SECTION
        //===============================--//

        'About': {
            'german': 'Über',
            'bulgarian': 'За'
        },
        'id:mynameis': {
            'german': 'Ich heiße',
            'bulgarian': 'Казвам се'
        },
        'Hristo Kehayov': {
            'german': 'Hristo Kehayov',
            'bulgarian': 'Христо Кехайов'
        },
        'id:moreAboutMe': {
            'german': 'Ich programmiere seit ich ungefähr 10 Jahre alt bin. Mit 14 schrieb ich mein erstes Spiel in der Programmiersprache Lua. Seitdem habe ich nie mehr aufgehört. Ich liebe es, kreativ und organisiert zu sein.',
            'bulgarian': 'Програмирам от около 10-годишна възраст. На 14 написах първата си игра на езика за програмиране lua. Оттогава никога не съм спирал. Обичам да съм креативен и организиран човек.'
        },
        'Checkout my resume': {
            'german': 'Kasse meinen Lebenslauf',
            'bulgarian': 'Разгледай Автобиографията ме'
        },
        'Contact me here!': {
            'german': 'Kontaktieren Sie mich hier!',
            'bulgarian': 'Свържете се с мен тук!'
        },
        'Email: hikponss@gmail.com': {
            'german': 'Email: hikponss@gmail.com',
            'bulgarian': 'E-Поща: hikponss@gmail.com'
        },

        /*=============================*/

        //--=============================
        //  SERVICES
        //===============================--//

        'What i do': {
            'german': 'Was mache ich',
            'bulgarian': 'Какво правя'
        },
        'My services': {
            'german': 'Meine Dienstleistungen',
            'bulgarian': 'Моите услуги'
        },
        'PC Game Development': {
            'german': 'PC-Spieleentwicklung',
            'bulgarian': 'Разработване на компютърни игри'
        },
        'Mobile Game Development': {
            'german': 'Entwicklung mobiler Spiele',
            'bulgarian': 'Разработка на мобилни игри'
        },
        'id:PC_Mobile_Desc': {
            'german': 'Entwicklung unvergesslicher und einzigartiger mobiler Android-, iOS- und Videospiele. Von der ganzen Logik bis zum fertigen Projekt.',
            'bulgarian': 'Разработване на запомнящи се и уникални мобилни android, ios и видео игри. От цялата му логика до завършен проект.'
        },
        'Android Application': {
            'german': 'Android-Anwendung',
            'bulgarian': 'Приложения за Android'
        },
        'IOS Application': {
            'german': 'IOS-Anwendung',
            'bulgarian': 'IOS приложения'
        },
        'Windows Form/XML Application': {
            'german': 'Windows Form / XML-Anwendung',
            'bulgarian': 'Приложения на Windows Form / XML'
        },
        'id:Android_IOS_Desc': {
            'german': 'Spiele, Musik abspielen, Netzwerktransaktionen abwickeln, Inhalte interagieren usw.',
            'bulgarian': 'Игри, възпроизвеждане на музика, обработка на мрежови транзакции, взаимодействие на съдържание и т.н.'
        },
        'HTML/CSS': {
            'german': 'HTML/CSS',
            'bulgarian': 'HTML/CSS'
        },
        'Prototyping': {
            'german': 'Prototyp entwickeln',
            'bulgarian': 'Прототипиране'
        },
        'User Testing': {
            'german': 'Benutzertests',
            'bulgarian': 'Потребителско тестване'
        },
        'id:html_css_Desc': {
            'german': 'Moderne und mobile Website, mit der Sie Ihr gesamtes Marketing erreichen können.',
            'bulgarian': 'Модерен и готов за мобилни устройства уебсайт, който ще ви помогне да достигнете до целия си маркетинг.'
        },
        
        /*=============================*/

        //--=============================
        //  PORTFOLIO
        //===============================--//

        'Portfolio': {
            'german': 'Portfolio',
            'bulgarian': 'Портфолио'
        },
        'Checkout a few of my works': {
            'german': 'Kasse ein paar meiner Arbeiten',
            'bulgarian': 'Разгледайте няколко от моите произведения'
        },


        'id:titleIdPortfolio': {
            'german': 'Spiele',
            'bulgarian': 'Игри'
        },
        'id:project1_Desc': {
            'german': 'geschrieben auf C # in der Unity3D-Engine-Umgebung. Es ist ein schnelles, lustiges mobiles RPG-Spiel, in dem es darum geht, Beute zu sammeln, Bosse zu töten und sich vorzubereiten.',
            'bulgarian': 'написано на C # в Unity3D двигателната среда. Това е бърза забавна мобилна RPG игра за събиране на плячка, убиване на шефове и подготовка.'
        },
        'id:project2_Desc': {
            'german': 'Genießen Sie die klassischen Erinnerungen an Tischtennis und erleben Sie diese freudigen Momente der Kindheit noch einmal. Kontrollieren Sie das Paddel Ihrer Seite und vermeiden Sie, dass der Ball von der Wand dahinter getroffen wird. Steig auf, weil der Gegner mit der Zeit immer schneller wird.',
            'bulgarian': 'Насладете се на класическите спомени от играта на пинг понг и изживейте отново тези радостни мигове от детството. Контролирайте греблото на вашата страна и избягвайте топката да се удари със стената отзад. Вдигнете манивела, защото противникът става все по-бърз с времето.'
        },
        'id:project3_Desc': {
            'german': 'Game Booster wurde in Visual Studio IDE auf Pure C ++ geschrieben. Es ist ein einfaches Programm, das die temporären Dateien von Ihrem System löscht und den Batteriemodus in den Leistungsmodus wechselt. Darüber hinaus werden auch die unnötigen visuellen Effekte von Windows 10 deaktiviert.',
            'bulgarian': 'Game Booster, написан на Pure C ++ в Visual Studio IDE. Това е проста програма, която изчиства временните файлове от вашата система и променя режима на батерията в режим на работа. Освен това деактивира и ненужните визуални ефекти от Windows 10.'
        },
        'id:project4_Desc': {
            'german': 'Projekt ParkIn geschrieben auf MVC Structure. Die Grundidee besteht darin, die Anmietung Ihres Parkplatzes zu ermöglichen, wenn Sie ihn nicht nutzen. (unvollendet)',
            'bulgarian': 'Проект ParkIn, написан върху MVC Structure. Основната му идея е да направи възможно наемането на парково място, когато не го използвате. (недовършен)'
        },
        'id:project5_Desc': {
            'german': 'Ein einfacher Bot zum Senden automatisierter Verbindungsnachrichten an Ihr Netzwerk. Geschrieben in reinem Python mit Hilfe des Selenium-Automatisierungsbrowsers',
            'bulgarian': 'Един прост бот за изпращане на автоматични съобщения за връзка към вашата мрежа. Написано на чист Python с помощта на автоматизирания браузър Selenium'
        },
        'id:project6_Desc_A': {
            'german': 'Dies sind alle meine bisherigen Bildungskurse und Seminare in',
            'bulgarian': 'Това са всичките ми минали образователни курсове и семинари в'
        },
        'id:project6_Desc_B': {
            'german': 'Es besteht aus all meinen Hausaufgaben und früheren Kursen und seinen Materialien.',
            'bulgarian': 'Състои се от всичките ми домашни и минали курсове и неговите материали.'
        },
        'tags': {
            'german': 'Stichworte',
            'bulgarian': 'тагове'
        },
        'View Project': {
            'german': 'Projekt ansehen',
            'bulgarian': 'Преглед на проекта'
        },
        'id:closeModal': {
            'german': 'Schließen',
            'bulgarian': 'Затвори'
        },
        

        /*=============================*/

    },
});

var cookieCollectConsent = $.cookie('cookieConsent');
var userLanguageCookie = $.cookie('userLanguage');
var queryString = window.location.href.slice(window.location.href.indexOf('?') + 1);
var queryLanguage = queryString.replace('lang=', '')
if (typeof cookieCollectConsent !== 'undefined') {
    //user accepted Cookie Collect Consent
    if (
        (queryLanguage == "english" ||
        queryLanguage == "german" || 
        queryLanguage == "bulgarian") && 
        queryLanguage!=userLanguageCookie){
        
            $.cookie('userLanguage', queryLanguage);
    }
    else {
        queryLanguage = ''
    };
}

$('#selectLanguageDropdown').localizationTool('translate', setLangToTranslate());
$('body').show();

function setLangToTranslate()
{
    var lang = null;
    
    if (queryLanguage != null || userLanguageCookie != null) {
        lang = validateLanguage(queryLanguage)??validateLanguage(userLanguageCookie);
    }
    return lang != null ? lang : 'english';
}

function validateLanguage(language){
    var validLang = null;
    if (language == 'english' || language == 'german' || language == 'bulgarian') validLang = language;
    else validLang=null;
    return validLang;
}

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}
