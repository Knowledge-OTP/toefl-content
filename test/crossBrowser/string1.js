if(!String.prototype.startsWithx){
    String.prototype.startsWith = function(startWithVal){
        var strStart = this.substr(0,startWithVal.length);
        return startWithVal === strStart;
    }
}