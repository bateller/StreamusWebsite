﻿var isShareSubdomain = window.location.host === 'share.streamus.com';

require.config({
    
    baseUrl: 'js/',
    
    //  Force a define/shim exports check in order to receive timely, correct error triggers in IE. 
    enforceDefine: true,
    
    shim: {
        backbone: {
            //  These script dependencies should be loaded before loading backbone.js
            deps: ['lodash', 'jquery'],
            //  Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            //  Bootstrap extends jQuery so it seems fitting to define it as the exports value.
            //  Discussion here: http://stackoverflow.com/questions/13377373/shim-twitter-bootstrap-for-requirejs
            exports: '$'
        },
        'bootstrap-modal': {
            deps: ['jquery', 'bootstrap'],
            exports: '$.fn.modal'
        },
        'bootstrap-modalmanager': {
            deps: ['jquery', 'bootstrap'],
            exports: '$.fn.modalmanager'
        },
        coinbase: {
            deps: ['jquery'],
            //  TODO: Coinbase doesn't actually export anything...
            exports: 'window.Coinbase'
        },
        'jquery.browser': {
            deps: ['jquery'],
            exports: '$.browser'
        },
        'jquery.unveil': {
            deps: ['jquery'],
            exports: '$.fn.unveil'
        },
        googleAnalytics: {
            exports: 'window.GoogleAnalyticsObject'
        },
        zopim: {
            exports: 'window.$zopim'
        }
    },

    paths: {
        backbone: [
            '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min',
            //  If the CDN location fails, load from this location
            'thirdParty/backbone'
        ],
        bootstrap: [
            '//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min',
            //  If the CDN location fails, load from this location
            'thirdParty/bootstrap'
        ],
        'bootstrap-modal': 'thirdParty/bootstrap-modal',
        'bootstrap-modalmanager': 'thirdParty/bootstrap-modalmanager',
        coinbase: 'thirdParty/coinbase',
        googleAnalytics: 'thirdParty/googleAnalytics',
        'jquery.browser': 'thirdParty/jquery.browser',
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
            //  If the CDN location fails, load from this location
            'thirdParty/jquery'
        ],
        'jquery.unveil': 'thirdParty/jquery.unveil',
        lodash: [
            '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.0/lodash.min',
            //  If the CDN location fails, load from this location
            'thirdParty/lodash'
        ],
        template: '../template',
        text: 'thirdParty/text',
        zopim: 'thirdParty/zopim'
    }

});

//  I'm using define over require here intentionally. The data-main attribute in index.html counts as the require 
//  statement and define is needed here for the enforceDefine: true option to be fulfilled.
define([
    'backbone',
    'bootstrap',
    'bootstrap-modal',
    'bootstrap-modalmanager',
    'coinbase',
    'googleAnalytics',
    'jquery.browser',
    'jquery',
    'jquery.unveil',
    'lodash',
    'text',
    'zopim'
], function () {
    'use strict';
    
    //  Load all views once global plugins are ready.
    if (isShareSubdomain) {
        require(['view/shareBodyView']);
    } else {
        require(['view/bodyView']);
    }

});