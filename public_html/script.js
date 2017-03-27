var rightShift = null, leftShift = null;

window.onload = function(){
    document.getElementById("leftbutton").addEventListener("click",r);
    document.getElementById("rightbutton").addEventListener("click",l);
    document.getElementById("pausebutton").addEventListener("click",pause);
};

var r = function () {
    if(leftShift){
        window.clearInterval(leftShift);
    }
    rightShift=window.setInterval(right, 500);
};

var l = function () {
    if(rightShift){
        window.clearInterval(rightShift);
    }
    leftShift=window.setInterval(left, 500);
};

function right() {
    
    
    var strLeft = document.getElementById("text1").value.toString();
    var strRight = document.getElementById("text2").value.toString();

    if (strLeft.length === 0) {
        window.clearInterval(this);
    }
    var lastChar = strLeft.substr(strLeft.length - 1);
    strLeft = strLeft.substr(0, strLeft.length - 1);
    var concated = lastChar.concat(strRight);

    document.getElementById("text2").value = concated;
    document.getElementById("text1").value = strLeft;
};

function left() {


    var strLeft = document.getElementById("text1").value.toString();
    var strRight = document.getElementById("text2").value.toString();

    if (strRight.length === 0) {
        window.clearInterval(this);
    }
    var lastChar = strRight.substr(0,1);
    strRight = strRight.substr(1, strRight.length);
    var concated = strLeft.concat(lastChar);

    document.getElementById("text1").value = concated;
    document.getElementById("text2").value = strRight;
};

function pause() {
    window.clearInterval(rightShift);
    window.clearInterval(leftShift);
}