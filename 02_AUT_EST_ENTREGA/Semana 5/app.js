$(document).ready(function()
{
    $("#macarrão").html("Porções:"+conta);
    $.get("http://127.0.0.1:2222/tudo", function(resultado)
    {
        console.log(resultado);
        $("canja").html(resultado);
    })
});