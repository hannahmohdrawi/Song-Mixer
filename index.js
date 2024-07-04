let songsArray = [
                "It's Nice To Have A Friend - Taylor Swift", 
                "6 Inch - Beyonce", 
                "Nevermind - Dennis Lloyd",
                "Oh, Pretty Woman - Roy Orbison", 
                "On My Way - Phil Collins", 
                "Everywhere - Fleetwood Mac",
                "Free Fallin' - Tom Petty",
                "Astrovan - Mt Joy",
                "Stargazing - Myles Smith",
                "My House - Beyonce", 
            ]



function recommend(){
    let recommendation = document.getElementById("songRecommendation");
    let genreChoice = document.getElementById("genre");
    let feelingChoice = document.getElementById("feeling");
    let songSelection =[];
    if (genreChoice == "pop" && feelingChoice == "blissful"){
        songSelection.push(songsArray[1]);
    } else if(genreChoice == "pop" && feelingChoice == "blissful"){

    }

    
}