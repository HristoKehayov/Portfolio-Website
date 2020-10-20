$('#selectLanguageDropdown').localizationTool({
    //--=============================
    //  LANGUAGES
    //===============================--//
    'languages': {
        'english' : {
            'country' : 'United Kingdom',
            'language': 'English',
            'countryTranslated' : 'United Kingdom',
            'languageTranslated': 'English',
            'flag': {
                'url': 'https://s.yimg.com/aah/yhst-12261471879087/canada-flag-retroflective-small-3m-decal-3-4-x-1-1-2-28.jpg'
            }
        },
        'german': {
            'language': 'German',
            'country': 'Germany',
            'languageTranslated': "Deutsch",
            'countryTranslated': "Deutschland",
            'flag': {
                'url': 'https://s.yimg.com/aah/yhst-12261471879087/american-flag-retroflective-small-3m-decal-3-4-x-1-1-2-29.jpg'
            }
        },
        'bulgarian': {
            'language': 'Bulgarian',
            'country': 'Bulgaria',
            'languageTranslated': "Bulgarian",
            'countryTranslated': "Bulgaria",
            'flag': {
                'url': 'https://img.theculturetrip.com/768x432/wp-content/uploads/2018/03/austria-26881_1280.png'
            }
        },
    },
    
    //--=============================
    //  SETTINGS
    //===============================--//
    'defaultLanguage': 'english', // this is the language that the server is sending anyway
    'ignoreUnmatchedSelectors': true,
    'showFlag': false,
    'showCountry': true,
    'showLanguage': false,
    // 'onLanguageSelected': function (languageCode) {
    //     /*
    //      * When the user translates we set the cookie
    //      */
    //     // $.cookie('userLanguage', languageCode);
    //     // burgerMenu();
            
    //     return true;
    // },


    //--=============================
    //  TRANSLATIONS
    //===============================--//
    'strings': {
        /* HIDDEN NAV BAR */
        'Home': {
            'german': 'chopa',
            'bulgarian': 'gosho'
        },

        /* SLIDERSHOW */
        'Hello! I\'m': {
            'english': 'Hello! I\'m',
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
        
    }

});
