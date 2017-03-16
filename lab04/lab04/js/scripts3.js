function addButtons(sender) {
    $(sender).removeAttr("onclick");

    $("#buttons").append(`</br>
                          <div class="col-xs-12 col-sm-4">
                              <button class="btn btn-primary center-block" onclick="setEventHandlers()"> jQuery.Events</button>
                          </div>`);

    $("#buttons").append(`<div id="effects" class="col-xs-12 col-sm-4">
                              <button class="btn btn-primary center-block">jQuery.Effects</button>
                          </div>`);

    $("#buttons").append(`<div id="css" class="col-xs-12 col-sm-4">
                              <button class="btn btn-primary center-block">jQuery.CSS</button>
                          </div>`);
    $("#css").hide();
}

function setEventHandlers() {
    $("#effects").on("click", doEffects);
    $("#css").on("click", doCss);
}

function doEffects() {
    $("#css").toggle();
}

function doCss() {
    $("body").removeAttr("class");
    $("body").css("background-color", `rgb(${Math.round(Math.random()*255)}, 
                                           ${Math.round(Math.random()*255)}, 
                                           ${Math.round(Math.random()*255)})`);
}

(function($) {
    $.fn.reverseText = function() {
        var text = $(this).val();
        var reversedText = "";
        for (var i = text.length - 1; i >= 0; i--) {
            reversedText += text[i];
        }
        $(this).val(reversedText);
    }
})(jQuery);

function reverseText() {
    $("#text-field").reverseText();
}