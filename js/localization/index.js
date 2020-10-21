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
        $.cookie('userLanguage', languageCode);
        var newUrl = updateQueryStringParameter(window.location.href, 'lang', languageCode);
        window.history.pushState("", "Portfolio Website", newUrl);
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
            'german': 'Ich liebe es auch zu',
            'bulgarian': 'Аз също обичам да'
        },
        'Train': {
            'german': 'Trainieren',
            'bulgarian': 'Тренирам'
        },

        'About': {
            'english': 'About',
            'german': 'Mehr',
            'bulgarian': 'Още'
        },

    },
});

var userLanguage = $.cookie('userLanguage');
if (typeof userLanguage !== 'undefined') {
    $('#selectLanguageDropdown').localizationTool('translate', userLanguage);
}
$('body').show();

function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        return uri + separator + key + "=" + value;
    }
}
