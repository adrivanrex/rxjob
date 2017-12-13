(function () {
    angular.module('cabao', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                        // Idle timer
        'firebase',						// Firebase
        'ngMap',						//Angular Map
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad