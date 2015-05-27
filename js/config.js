/**
 * Created by Merlin on 2015/5/19.
 */
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../"
    },
    map: {
        '*': { 'jquery' : 'jquery-private' },
        'jquery-private' : { 'jquery': 'jquery' }
    }

});

requirejs(["app/slideup"]);
requirejs(["app/bannerslider"]);