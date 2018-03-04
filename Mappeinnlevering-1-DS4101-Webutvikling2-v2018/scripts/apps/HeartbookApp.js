const HeartBookApp = {
    
    // HTML wrap
    htmlWrap: null,
    
    // HTML objects
    // Vi skaper dette selv
    // Vi legger det senere nede i const setHTMLObjects
    image: null,
    title: null,
    
    
    // Opprette en ny variabl (gjør dette litt senere)
    // Som vi kaller: 
    // Kung Fu animal object
    heartBook: null, 
    
    // Other variables
    filepath: "images/profiles",
    
    init(){
        // HBA = deklarerer forkortelse 
        // Kan videre bare bruke HBA etter dette
        const HBA = HeartBookApp;
        
        // htmlWrap sendes til init og skal legges til nettsiden 
        // Det er en container tag som kan inneholde flere html elementer
        // Det samler alt slik at vi kan sende alt på en gang i stedet for en ting
        const setHTMLObjects = function(){
            HBA.htmlWrap = $("<div>");
            HBA.title = $("<h3>");
            HBA.image = $("<img>");  
        }();
        
        const setAppGUI = function(){
            HBA.heartBook = HeartBookProfileModule.getAllProfiles();
            HBA.heartBook = HeartBookProfileModule.getAllMen();
            HBA.heartBook = HeartBookProfileModule.getAllWomen();
            HBA.heartBook = HeartBookProfileModule.getPerson();
            
            
            HBA.title.html(HBA.heartBook.name);
            HBA.title.html(HBA.heartBook.age);
            HBA.title.html(HBA.heartBook.gender);
            
            // ``= ecma-script
            HBA.image.attr("src", `${HBA.filepath}${HBA.heartBook.imagesrc}`);
            
            HBA.htmlWrap.append(HBA.title, HBA.image); 
                
        }();
        
        return HBA.htmlWrap;
        
    }
}