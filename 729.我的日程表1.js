var MyCalendar = function() {
    this.res = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let i = 0;i< this.res.length;i++){
        if((start>=this.res[i][0] && start<this.res[i][1]) 
        || (end>this.res[i][0] && end<=this.res[i][1])
        || (start<this.res[i][0] && end > this.res[i][1])
        ){
            return false;
        }
    }
    this.res.push([start, end]);
    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */