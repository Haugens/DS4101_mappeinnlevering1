$(function(){

    //let profileImg = $("<img>", {src:`${profile.imageSrc}`});
    let profileName = $("<h1>");
    let profileAge = $("<p>");
    let profileGender = $("<p>");
    let profileInterests = $("<p>");

    let allProfiles = HeartBookProfileModule.getAllProfiles();

    
    $("#showAllBtn").click(function(){
        $(allProfiles).each(function(
            index, profile
        ){
            let profileImg = $("<img>", {src:`${profile.imageSrc}`});            
            let newName = profileName = profile.name;
            let newAge = profileAge = profile.age;
            let newGender = profileGender = profile.gender;
            let newInterests = profileInterests = profile.interests;
            
            $("#profile1").append(profileImg, newName, newAge, newGender, newInterests);
        })

    });

    $("#showAllMenBtn").click(function(){

    });

    $("#showAllWomenBtn").click(function(){

    });

    $("#iFeelLuckyBtn").click(function(){

    });

})
