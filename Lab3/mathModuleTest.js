const readline = require("readline");
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
//const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question("What is your name? ", function(name){
    rl.question("Where do you live? ", function(country){
        console.log(`${name} is a citizen of ${country}`);
        rl.close();
    });
});
*/

rl.question("Pole jakiej figury geomerycznej chcesz obliczyć: \n1: Kwadratu \n2: Prostokąta \n3: Trójkąta \n4: Koła \n5: Równoległoboku\n", function(wybor){
    switch(wybor){
        case '1':
            rl.question("\nPodaj długość boku a: ", function(a){
                console.log("Pole podanego kwadratu wynosi: " + math1.poleKwadratu(a));
            });
            break;
        case '2':
            rl.question("\nPodaj długość boku a: ", function(a){
                rl.question("Podaj długość boku b: ", function(b){
                    console.log("Pole podanego prostokąta wynosi: " + math1.polePostokata(a,b));
                });
            });
            break;
        case '3':
            rl.question("\nPodaj długość podstawy: ", function(a){
                rl.question("Podaj długość wysokści opuszczonej na tą podstawę: ", function(h){
                    console.log("Pole podanego trójkąta wynosi: " + math1.poleTrojkata(a,h));
                });
            });
            break;
        case '4':
            rl.question("\nPodaj długość promienia: ", function(r){
                console.log("Pole podanego koła wynosi: " + math1.poleKola(r));
            });
            break;
        case '5':
            rl.question("\nPodaj długość podstawy: ", function(a){
                rl.question("Podaj długość wysokści opuszczonej na tą podstawę: ", function(h){
                    console.log("Pole podanego równoległoboku wynosi: " + math1.poleRownlegloboku(a,h));
                });
            });
            break;
        default:
            console.log("Nie wybrano poprawnej opcji.");
    }
    rl.close();
});

rl.on("close", function(){
    console.log("\nExited.");
    process.exit(0);
});