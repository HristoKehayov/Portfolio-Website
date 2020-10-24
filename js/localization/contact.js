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
        //  CONTACT INFORMATION
        //===============================--//
        'Contact Information': {
            'german': 'Kontakt Informationen',
            'bulgarian': 'Контакт информация'
        },
        'Address: ': {
            'german': 'Adresse',
            'bulgarian': 'Адрес'
        },
        'Website': {
            'german': 'Webseite',
            'bulgarian': 'Уебсайт'
        },
        'Your Name': {
            'german': 'Dein Name',
            'bulgarian': 'Твоето име'
        },
        'Your Email': {
            'german': 'Deine E-Mail',
            'bulgarian': 'Твоят имейл'
        },
        'Subject': {
            'german': 'Gegenstand',
            'bulgarian': 'Тема'
        },
        'Message': {
            'german': 'Nachricht',
            'bulgarian': 'Съобщение'
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