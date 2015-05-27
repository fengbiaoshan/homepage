/**
 * Created by Merlin on 2015/5/19.
 */
define(["jquery"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $("#link-about").click(function(){
            //alert($(document.body).height());
            $("#aboutus").animate({"height":"100%","top":"70px"},2000);

        });
        $(".button-down").click(function(){
                $("#aboutus").animate({"height": "0px" ,"top" : "100%"},2000);

        });
    });
});