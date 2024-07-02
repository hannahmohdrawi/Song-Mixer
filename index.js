
let songsArray = ["It's Nice To Have A Friend - Taylor Swift", 
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
    let recommendation = getElementById("songRecommendation");
    let genreChoice = getElementById("genre");
    let feelingChoice = getElementById("feeling");
    if (genreChoice == pop && feelingChoice == blissful){
        recommendation.push(songsArray[1]);
    }
}