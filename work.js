$(function () {
    var windowHeight = /* Use .height() method for window-class selector */
        $("body").height(800);
    var windowwidth = $("body").width(1300);
    var headerBarHeight = /* Use .height() method for header-class selector */
        $("header").height(96);
    var codeContainerHeight = $(".codeContainer").height(400); /* Use .height() method for div */
    var codeContainerWidth = $(".codeContainer").width(1200);/* Use .height() method for div */
    /* Function for toggle of tabs */
    $(".toggle").click(function () {
        $(this).toggleClass("newclass");
        var activeDiv = $(this).html();/* use .HTML() method on 'this' constructor reference */
        console.log(activeDiv);
        if (activeDiv == "HTML") {
            $('#tab1').toggle(500);
        } else if (activeDiv == "CSS") {
            $('#tab2').toggle(500);
        } else if (activeDiv == "JavaScript") {
            $('#tab3').toggle(500);
        } else if (activeDiv == "Console") {
            $('#tab4').toggle(500);
        }
        var showingDivs = $("textarea").filter(function () {
            return $("textarea", this).html() != activeDiv
        }).css({ "background-color": "aquamarine" });

        console.log(showingDivs);

    });
    /* Function for Run button */
    $(".run-btn").click(function updateIframe() {
        var htmlContent = $("#myframe").contents().find("body");
        var htmlValue = $("#tab1").val(); // htmlValue contains html code
        htmlContent.html(htmlValue);
        console.log(htmlValue);
        var cssValue = $("#tab2").val();
        console.log(cssValue);
        var cssLink = "<style>" + cssValue + "</style>"; // cssValue contains css code
        var head = $("#myframe").contents().find("head");
        head.append(cssLink);
        var jsCode = $("#tab3").val(); // jsCode contains js code
        console.log(jsCode);
        var js = '<script>' + jsCode + '<\/script>';
        var content = $('#myframe').contents();
        content.find('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"><\/script>');
        content.find('body').append(js);
    });



});