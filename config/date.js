Date.prototype.timeNow = function () {
    return this.getDate() + "/"
        + (this.getMonth() + 1) + "/"
        + this.getFullYear() + " @ "
        + this.getHours() + ":"
        + this.getMinutes() + ":"
        + this.getSeconds();
}