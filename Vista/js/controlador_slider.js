$(document).ready(function()
{
    $(".contenido").hide();
    $(".contenido:first").show();
    $(".tabs-nav li").click(function()
    {
    $(".contenido").hide();
    var activo=$(this).find("a").attr("href");
    $(activo).fadeIn();
    });
});