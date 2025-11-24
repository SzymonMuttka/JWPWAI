let MyMathModule = function(){}

MyMathModule.prototype.poleKwadratu = function(a){
    return a*a;
}

MyMathModule.prototype.poleProstokata = function(a, b){
    return a*b;
}

MyMathModule.prototype.poleTrojkata = function(a, h){
    return 0.5*a*h;
}

MyMathModule.prototype.poleKola = function(r){
    return 3.1415926535*r*r;
}

MyMathModule.prototype.poleRownlegloboku = function(a, h){
    return a*h;
}

module.exports = exports = MyMathModule;