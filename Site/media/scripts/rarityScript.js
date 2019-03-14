$(document).ready(function(){
    $("#checkRarity").submit(function(){
        var formResults = $(this).serializeArray(); 
        var artistValue = 0;
        var yearValue = formResults[1]["value"] * 0.1;
        var collectorsEditionValue = 0;
        var rarityScore; 
        var waarde = "Geen Waarde";
        var collEdition = 'Nee';

        switch(formResults[0]["value"]){
            case 'Vader Abraham':      
            case 'BZN':      
            case 'Kamahl':      
            case 'Heintje':   
                artistValue = 4;
                break;
            case 'Supertramp':
            case 'Queen':
            case 'Metallica':
            case 'Lionel Richie':
                artistValue = 6;
                break;
            case 'The Beatles':
            case 'Rolling Stones':
            case 'Madonna':
                artistValue = 7;
                break;
            default:
                artistValue = 5;
        };
               
        if(formResults.length === 3){
             collectorsEditionValue = 5;
             collEdition = "Ja";
        }
        
        rarityScore = (artistValue * yearValue) + collectorsEditionValue;
        
        if(rarityScore > 0 && rarityScore <= 10){
            waarde = "Geen waarde";
            $("#geenWaarde").css("display", "block");
            $("#submitSell").css("display", "none");
        }
        else if(rarityScore > 10 && rarityScore <= 25){
            waarde = "Gewoon";
            $("#geenWaarde").css("display", "none");
            $("#submitSell").css("display", "inline-block");
        }
        else if(rarityScore > 25 && rarityScore <= 35){
            waarde = "Zeldzaam";
            $("#geenWaarde").css("display", "none");
            $("#submitSell").css("display", "inline-block");
        }
        else{
            waarde = "Zeer zeldzaam";
            $("#geenWaarde").css("display", "none");
            $("#submitSell").css("display", "inline-block");
        }
       
        $("#rarityText").html(waarde + "<br><br>Vul <a href='#sellContact'>hier</a> het formulier in.");
        $("#sellForm").css("display", "block");
        $("#subject").val('Verkopen ' + formResults[0]["value"] + ' lp.');
        $("#bericht").val('\nArtiest: ' + formResults[0]["value"] + '\nLeeftijd lp: ' + formResults[1]["value"] + '\nCollectors editie: ' + collEdition + '\nZeldzaamheid: ' + waarde + '\n\n');
        return false;
    });
 });