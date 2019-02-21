$(document).ready(function(){
    $("#checkRarity").submit(function(){
        var formResults = $(this).serializeArray(); 
        var artistValue = 0;
        var yearValue = formResults[1]["value"] * 0.1;
        var collectorsEditionValue = 0;
        var rarityScore; 
        var waarde = "Geen Waarde";

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
        }
        
        rarityScore = (artistValue * yearValue) + collectorsEditionValue;
        
        if(rarityScore > 0 && rarityScore <= 10){
            waarde = "Geen waarde";
        }
        else if(rarityScore > 10 && rarityScore <= 25){
            waarde = "Gewoon";
        }
        else if(rarityScore > 25 && rarityScore <= 35){
            waarde = "Zeldzaam";
        }
        else{
            waarde = "Zeer zeldzaam";
        }
       
        $("#rarityText").html(waarde + "<br><br>Vul <a href='#sellContact'>hier</a> het formulier in.");
        $("#sellForm").css("display", "block");
        return false;
    });
 });