$(function(){

    let profileImg = $("<img>");
    let profileName = $("<h1>");
    let profileAge = $("<p>");
    let profileGender = $("<p>");
    let profileInterests = $("<p>");

    
    $("showAllBtn").click(function(){
        
        $.each()(function(){

        })

        $("profil").append(profileImg, profileName, profileAge, profileGender, profileInterests);
    });

    $("showAllMenBtn").click(function(){
        $("profil").append(profileImg, profileName, profileAge, profileGender, profileInterests);
    });

    $("showAllWomenBtn").click(function(){
        $("profil").append(profileImg, profileName, profileAge, profileGender, profileInterests);
    });

    $("iFeelLuckyBtn").click(function(){
        
        $("profil").append(profileImg, profileName, profileAge, profileGender, profileInterests);
    });

})


//css

