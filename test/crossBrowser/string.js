if(!String.prototype.startsWith){
    String.prototype.startsWith = function(startWithVal){
        var strStart = this.substr(0,startWithVal.length);
        return startWithVal === strStart;
    }
}