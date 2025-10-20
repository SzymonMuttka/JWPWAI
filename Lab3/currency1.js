let USD = 3.64;
let JPY = 0.024;
let EUR = 4.24;
let GBP = 4.88;
let UGX = 0.001;

function roundTwoDecimals(amount){
    return Math.round(amount * 100) / 100;
}

exports.USDToPLN = function(usa){
    return roundTwoDecimals(usa * USD);
}

exports.PLNToUSD = function(usa){
    return roundTwoDecimals(usa / USD);
}

exports.JPYToPLN = function(jp){
    return roundTwoDecimals(jp * JPY);
}

exports.PLNToJPY = function(jp){
    return roundTwoDecimals(jp / JPY);
}

exports.EURToPLN = function(eu){
    return roundTwoDecimals(eu * EUR);
}

exports.PLNToEUR = function(eu){
    return roundTwoDecimals(eu / EUR);
}

exports.GBPToPLN = function(gb){
    return roundTwoDecimals(gb * GBP);
}

exports.PLNToGBP = function(gb){
    return roundTwoDecimals(gb / GBP);
}

exports.UGXToPLN = function(ug){
    return roundTwoDecimals(ug * UGX);
}

exports.PLNToUGX = function(ug){
    return roundTwoDecimals(ug / UGX);
}