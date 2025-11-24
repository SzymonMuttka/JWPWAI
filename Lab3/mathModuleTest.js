const readline = require("readline");
const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Którego modułu chcesz użyć: \n1: Moduł z referencjami do obiektu export \n2: Moduł z podejściem obiektowym\n", function(wybor1){
    switch(wybor1){
        case '1':
            rl.question("Pole jakiej figury geomerycznej chcesz obliczyć: \n1: Kwadratu \n2: Prostokąta \n3: Trójkąta \n4: Koła \n5: Równoległoboku\n", function(wybor2){
                switch(wybor2){
                    case '1':
                        rl.question("\nPodaj długość boku a: ", function(a){
                            console.log("Pole podanego kwadratu wynosi: " + math1.poleKwadratu(a));
                            rl.close();
                        });
                        break;
                    case '2':
                        rl.question("\nPodaj długość boku a: ", function(a){
                            rl.question("Podaj długość boku b: ", function(b){
                                console.log("Pole podanego prostokąta wynosi: " + math1.poleProstokata(a,b));
                                rl.close();
                            });
                        });
                        break;
                    case '3':
                        rl.question("\nPodaj długość podstawy: ", function(a){
                            rl.question("Podaj długość wysokści opuszczonej na tą podstawę: ", function(h){
                                console.log("Pole podanego trójkąta wynosi: " + math1.poleTrojkata(a,h));
                                rl.close();
                            });
                        });
                        break;
                    case '4':
                        rl.question("\nPodaj długość promienia: ", function(r){
                            console.log("Pole podanego koła wynosi: " + math1.poleKola(r));
                            rl.close();
                        });
                        break;
                    case '5':
                        rl.question("\nPodaj długość podstawy: ", function(a){
                            rl.question("Podaj długość wysokści opuszczonej na tą podstawę: ", function(h){
                                console.log("Pole podanego równoległoboku wynosi: " + math1.poleRownlegloboku(a,h));
                                rl.close();
                            });
                        });
                        break;
                    default:
                        console.log("\nNie wybrano poprawnej opcji.");
                        rl.close();
                }
            });
            break;
        case '2':
            rl.question("Pole jakiej figury geomerycznej chcesz obliczyć: \n1: Kwadratu \n2: Prostokąta \n3: Trójkąta \n4: Koła \n5: Równoległoboku\n", function(wybor2){
                switch(wybor2){
                    case '1':
                        rl.question("\nPodaj długość boku a: ", function(a){
                            console.log("Pole podanego kwadratu wynosi: " + math2.poleKwadratu(a));
                            rl.close();
                        });
                        break;
                    case '2':
                        rl.question("\nPodaj długość boku a: ", function(a){
                            rl.question("Podaj długość boku b: ", function(b){
                                console.log("Pole podanego prostokąta wynosi: " + math2.poleProstokata(a,b));
                                rl.close();
                            });
                        });
                        break;
                    case '3':
                        rl.question("\nPodaj długość podstawy: ", function(a){
                            rl.question("Podaj długość wysokści opuszczonej na tą podstawę: ", function(h){
                                console.log("Pole podanego trójkąta wynosi: " + math2.poleTrojkata(a,h));
                                rl.close();
                            });
                        });
                        break;
                    case '4':
                        rl.question("\nPodaj długość promienia: ", function(r){
                            console.log("Pole podanego koła wynosi: " + math2.poleKola(r));
                            rl.close();
                        });
                        break;
                    case '5':
                        rl.question("\nPodaj długość podstawy: ", function(a){
                            rl.question("Podaj długość wysokści opuszczonej na tą podstawę: ", function(h){
                                console.log("Pole podanego równoległoboku wynosi: " + math2.poleRownlegloboku(a,h));
                                rl.close();
                            });
                        });
                        break;
                    default:
                        console.log("\nNie wybrano poprawnej opcji.");
                        rl.close();
                }
            });
            break;
        default:
            console.log("\nNie wybrano poprawnej opcji.");
            rl.close();
    }
});

rl.on("close", function(){
    console.log("\nExited.");
    process.exit(0);
});