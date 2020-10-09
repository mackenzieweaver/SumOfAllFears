function Sunset(...buildings) {
    // First building can always see sunset   
    let results = ['See'];
    // For each building (excluding the first one)
    for (let i = 1; i < buildings.length; i++) {
        // assume no building is bigger
        let bigger = false;
        // Check if any building before it is larger
        for (let j = 0; j < i; j++) { 
            // previous greater than current?
            if (buildings[j] >= buildings[i]) { 
                // If previous building is bigger
                bigger = true; 
                // stop checking if bigger is found
                break; 
            } else {
                // If previous building is smaller, check next
                continue;
            }
        }
        // If there's a bigger building we're blind, otherwise we can see
        bigger ? results.push("Blind") : results.push("See");
    }
    // How many can see?
    let see = results.filter(x => x == 'See').length;
    results.push(see);
    // How many are blind?
    let blind = results.filter(x => x == 'Blind').length;
    results.push(blind);
    document.getElementById("result").innerText = results;

    ColorBuildings(results);
}

function BuildIt(input, sky) {
    let stories = parseInt(input.value);
    sky.animate([
        // keyframes
        { height: sky.style.height },
        { height: (stories * 5).toString() + "px" }
    ], {
        // timing options
        duration: 1000,
        fill: 'forwards',
        easing: "ease-in-out"
    });
}

function Demolish() {
    console.log("Rubbles...")
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');
    let b4 = document.getElementById('b4');
    let b5 = document.getElementById('b5');
    let sky1 = document.getElementById("sky1");
    let sky2 = document.getElementById("sky2");
    let sky3 = document.getElementById("sky3");
    let sky4 = document.getElementById("sky4");
    let sky5 = document.getElementById("sky5");

    b1.value = 1;
    sky1.setAttribute("class", "skyscraper gray");
    BuildIt(b1, sky1);

    b2.value = 1;
    sky2.setAttribute("class", "skyscraper gray");
    BuildIt(b1, sky2);

    b3.value = 1;
    sky3.setAttribute("class", "skyscraper gray");
    BuildIt(b1, sky3);

    b4.value = 1;
    sky4.setAttribute("class", "skyscraper gray");
    BuildIt(b1, sky4);

    b5.value = 1;
    sky5.setAttribute("class", "skyscraper gray");
    BuildIt(b1, sky5);

    document.getElementById("result").innerText = '';
    document.getElementById('b1').focus();
}

function ColorBuildings(results) {
    for (let i = 1; i <= 5; i++) {
        let e = document.getElementById("sky" + i.toString());
        if (results[i-1] == "See") {
            e.setAttribute("class", "skyscraper blue");
        } else {
            e.setAttribute("class", "skyscraper gray");
        }
    }
}