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
                'url': './images/flags/us.svg'
            }
        },
        'german': {
            'language': 'de',
            'country': 'Germany',
            'countryTranslated': "Deutschland",
            'languageTranslated': "de",
            'flag': {
                'url': './images/flags/de.svg'
            }
        },
        'bulgarian': {
            'language': 'bg',
            'country': 'Bulgaria',
            'countryTranslated': "България",
            'languageTranslated': "бг",
            'flag': {
                'url': './images/flags/bg.svg'
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
        //  PROFILE
        //===============================--//
        'Profile': {
            'german': 'Profil',
            'bulgarian': 'Профил'
        },
        'id:profileDesc_A': {
            'german': 'Ich bin ein erfahrener Spieleentwickler',
            'bulgarian': 'Аз съм опитен разработчик на игри'
        },
        'id:profileDesc_B': {
            'german': 'Freiberufler in Bulgarien geboren, aber in Österreich ansässig. Ich möchte durch meine kreative Lösung etwas bewirken.',
            'bulgarian': 'фрилансер роден в България, но установен в Австрия. Целя да направя разлика чрез моето творческо решение.'
        },
        'First Name:': {
            'german': 'Vorname:',
            'bulgarian': 'Първо име:'
        },
        'Last Name:': {
            'german': 'Nachname:',
            'bulgarian': 'Фамилия:'
        },
        'Age': {
            'german': 'Alter: ',
            'bulgarian': 'Възраст: '
        },
        'Address:': {
            'german': 'Adresse: ',
            'bulgarian': 'Адрес: '
        },
        'Technologies': {
            'german': 'Technologien: ',
            'bulgarian': 'Технологии: '
        },
        'Professional Experience:': {
            'german': 'Berufserfahrung: ',
            'bulgarian': 'Професионален опит: '
        },
        'Hobby: ': {
            'german': 'Hobby: ',
            'bulgarian': 'Хоби: '
        },
        'Others:': {
            'german': 'Andere: ',
            'bulgarian': 'Други: '
        },
        /*=============================*/

        //--=============================
        //  EXPERIENCE
        //===============================--//
        'id:experienceTitle': {
            'german': 'Erfahrung',
            'bulgarian': 'Опит'
        },
        // 'id:profileDesc_A': {
        //     'german': 'Ich bin ein erfahrener Spieleentwickler',
        //     'bulgarian': 'Аз съм опитен разработчик на игри'
        // },
        // 'id:profileDesc_B': {
        //     'german': 'in Bulgarien geboren, aber in Österreich ansässig. Ich möchte durch meine kreative Lösung etwas bewirken.',
        //     'bulgarian': 'роден в България, но установен в Австрия. Целя да направя разлика чрез моето творческо решение.'
        // },
        // 'First Name:': {
        //     'german': 'Vorname:',
        //     'bulgarian': 'Първо име:'
        // },
        // 'Last Name:': {
        //     'german': 'Nachname:',
        //     'bulgarian': 'Фамилия:'
        // },
        // 'Age': {
        //     'german': 'Alter: ',
        //     'bulgarian': 'Възраст: '
        // },
        // 'Address:': {
        //     'german': 'Adresse: ',
        //     'bulgarian': 'Адрес: '
        // },
        // 'Technologies': {
        //     'german': 'Technologien: ',
        //     'bulgarian': 'Технологии: '
        // },
        // 'Professional Experience:': {
        //     'german': 'Berufserfahrung: ',
        //     'bulgarian': 'Професионален опит: '
        // },
        // 'Hobby: ': {
        //     'german': 'Hobby: ',
        //     'bulgarian': 'Хоби: '
        // },
        // 'Others:': {
        //     'german': 'Andere: ',
        //     'bulgarian': 'Други: '
        // },
        /*=============================*/
        
        //--=============================
        //  EDUCATION
        //===============================--//
        'Education': {
            'german': 'Ausbildung',
            'bulgarian': 'Образование'
        },
        'Gymnasium of Science and Mathematic „Akad. Sergey Korolyov”': {
            'german': 'Gymnasium für Naturwissenschaften und Mathematik „Akad. Sergey Korolyov ”',
            'bulgarian': 'Гимназия по наука и математика „Акад. Сергей Корольов ”'
        },
        '- University': {
            'german': ' - Universität',
            'bulgarian': ' - Университет'
        },
        '- High School': {
            'german': '- Weiterführende Schule',
            'bulgarian': '- Гимназия'
        },
        '- School': {
            'german': '- Schule',
            'bulgarian': '- Училище'
        },
        'Graz - Austria': {
            'german': 'Graz - Austria',
            'bulgarian': 'Грац - България'
        },
        'Blagoevgrad - Bulgaria': {
            'german': 'Petrich - Bulgaria',
            'bulgarian': 'Благоевград - България'
        },
        'Petrich - Bulgaria': {
            'german': 'Petrich - Bulgaria',
            'bulgarian': 'Петрич - България'
        },
        /*=============================*/

        //--=============================
        //  VISITED COURSES
        //===============================--//
        'Visited Courses': {
            'german': 'Besuchte Kurse',
            'bulgarian': 'Посетени курсове'
        },
        '- German courses': {
            'german': ' - Deutschkurse',
            'bulgarian': ' - курсове по немски език'
        },
        '- English courses': {
            'german': ' - Englischkurse',
            'bulgarian': ' - Курсове по английски език'
        },
        '- Technology courses': {
            'german': ' - Technologiekurse',
            'bulgarian': ' - Технологични курсове'
        },
        '- School': {
            'german': '- Schule',
            'bulgarian': '- Училище'
        },
        'Graz - Austria': {
            'german': 'Graz - Austria',
            'bulgarian': 'Грац - България'
        },
        'Blagoevgrad - Bulgaria': {
            'german': 'Petrich - Bulgaria',
            'bulgarian': 'Благоевград - България'
        },
        'Petrich - Bulgaria': {
            'german': 'Petrich - Bulgaria',
            'bulgarian': 'Петрич - България'
        },
        'Sofia - Bulgaria': {
            'german': 'Sofia - Bulgaria',
            'bulgarian': 'София - България'
        },
        'Software University': {
            'german': 'Software University',
            'bulgarian': 'Софтуерен университет'
        },
        'American University in Bulgaria': {
            'german': 'American University in Bulgaria',
            'bulgarian': 'Американски университет в България'
        },

        'Programming fundamentals': {
            'german': '01) Programmiergrundlagen',
            'bulgarian': '01) Основи на програмирането'
        },
        'Web development': {
            'german': '03) Web Entwicklung',
            'bulgarian': '03) Уеб разработка'
        },
        'Object-oriented programming': {
            'german': '07) Objekt-orientierte Programmierung',
            'bulgarian': '07) Обектно-ориентирано програмиране'
        },
        'High-quality code ': {
            'german': '08) Hochwertiger Code',
            'bulgarian': '08) Висококачествен код'
        },
        'Game Development With Unity3D Game Engine': {
            'german': '09) Spieleentwicklung mit Unity3D Game Engine',
            'bulgarian': '09) Разработване на игри с Unity3D Game Engine'
        },

        /*=============================*/

        //--=============================
        //  MY SKILLS
        //===============================--//
        'My Skills': {
            'german': 'Meine Fähigkeiten',
            'bulgarian': 'Моите умения'
        },
        'Web Development': {
            'german': 'Web Entwicklung',
            'bulgarian': 'Уеб разработка'
        },
        'Mobile App Development': {
            'german': 'Entwicklung mobiler Apps',
            'bulgarian': 'Разработка на мобилни приложения'
        },
        /*=============================*/

        //--=============================
        //  CONTACT ME
        //===============================--//
        'Contact Me': {
            'german': 'Kontaktiere mich',
            'bulgarian': 'Свържи се с мен'
        },
        /*=============================*/

        //--=============================
        //  COPYRIGHT
        //===============================--//
        'id:templateDesignBy': {
            'german': 'Template Design von',
            'bulgarian': 'Дизайн на шаблон от'
        },
        'id:rightsReserved': {
            'german': 'Alle Rechte vorbehalten',
            'bulgarian': 'Всички права запазени'
        },
        'id:copyright': {
            'german': 'Urheberrechte',
            'bulgarian': 'Авторско право'
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