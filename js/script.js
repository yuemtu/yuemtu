﻿$(document).ready(function(){
    $(".thumbnail").mouseover(function(){
        $(this).css("opacity","1");
    },
    {
        $(this).css("opacity","0.5");
    });
    
    $("#searchbar").keyup(function(){
        var maxSearch = 59;
        var searchInput = $(this).val().length;
        maxSearch -= searchInput;
        $("#signLeft").html("Noch übrige Zeichen: " + maxSearch);
    });
});