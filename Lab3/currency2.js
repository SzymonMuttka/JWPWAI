let Currency = function(cur){
    this.cur = cur;
}

Currency.prototype.roundTwoDecimals = function(amount){
    return Math.round(amount * 100) / 100;
}

Currency.prototype.USDToPLN = function(usa){
    return this.roundTwoDecimals(usa * this.cur);
}

Currency.prototype.PLNToUSD = function(usa){
    return this.roundTwoDecimals(usa / this.cur);
}

Currency.prototype.JPYToPLN = function(jp){
    return this.roundTwoDecimals(jp * this.cur);
}

Currency.prototype.PLNToJPY = function(jp){
    return this.roundTwoDecimals(jp / this.cur);
}

Currency.prototype.EURToPLN = function(eu){
    return this.roundTwoDecimals(eu * this.cur);
}

Currency.prototype.PLNToEUR = function(eu){
    return this.roundTwoDecimals(eu / this.cur);
}

Currency.prototype.GBPToPLN = function(gbp){
    return this.roundTwoDecimals(gbp * this.cur);
}

Currency.prototype.PLNToGBP = function(gbp){
    return this.roundTwoDecimals(gbp / this.cur);
}

Currency.prototype.UGXToPLN = function(ug){
    return this.roundTwoDecimals(ug * this.cur);
}

Currency.prototype.PLNToUGX = function(ug){
    return this.roundTwoDecimals(ug / this.cur);
}

module.exports = exports = Currency;