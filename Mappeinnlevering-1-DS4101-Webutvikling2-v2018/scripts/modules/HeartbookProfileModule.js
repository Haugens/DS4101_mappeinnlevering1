const HeartBookProfileModule = (function () {

    const profilesJSON = [
        {
            "name": "Arne",
            "age": "32",
            "imageSrc": "images/profiles/arne.jpg",
            "description": "",
            "gender": "Male"
        },
        {
            "name": "Filip",
            "age": "29",
            "imageSrc": "images/profiles/filip.jpg",
            "description": "",
            "gender": "Male"
        },
        {
            "name": "Elise",
            "age": "32",
            "imageSrc": "images/profiles/elise.jpg",
            "description": "",
            "gender": "Female"
        },
        {
            "name": "Ina",
            "age": "26",
            "imageSrc": "images/profiles/ina.jpg",
            "description": "",
            "gender": "Female"
        }, 
        {
            "name": "Mark",
            "age": "33",
            "imageSrc": "images/profiles/mark.jpg",
            "description": "",
            "gender": "Male"
        }, 
        {
            "name": "Peter",
            "age": "29",
            "imageSrc": "images/profiles/peter.jpg",
            "description": "",
            "gender": "Male"
        }, 
        {
            "name": "Randi",
            "age": "34",
            "imageSrc": "images/profiles/randi.jpg",
            "description": "",
            "gender": "Female"
        }, 
        {
            "name": "Tone",
            "age": "27",
            "imageSrc": "images/profiles/tone.jpg",
            "description": "",
            "gender": "Female"
        }
    ];

    
    
    
    function getAllProfiles() {
        return profilesJSON;
        
    }
    
    function getAllMen() {
        let maleList = [];
        $.each(function(){

        })

    }
    
    function getAllWomen() {
        
    }
    
    function getPerson() {
        
    }
    
    return {
        getAllProfiles
    }

}())