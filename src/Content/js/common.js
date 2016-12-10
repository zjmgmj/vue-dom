/**
 * Created by Administrator on 2016/11/17.
 */
require.config({
    paths: {
        "jquery": "module/jquery-2.1.0.min",
        "photomin": "module/photo.min",
        "baguetteBoxjs": "module/baguetteBox",
        "photojs":"module/mphotos.min"
    },
    shim: {
        "jquery": {
            exports: '$'
        },
/*        "baguetteBox":{
            exports:'baguetteBox'
        },*/
        "photomin":{
            exports:'BlocksIt'
        }
    }
});
define('common', ['jquery'], function () {

    }
);



