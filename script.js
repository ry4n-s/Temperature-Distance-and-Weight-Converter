function temperaturec() {
    var c = document.getElementById("c").value;
    var f = (c * 9/5) + 32
    document.getElementById("f").value = f
}

function weightc() {
    var kg = document.getElementById("kg").value;
    var lbs = kg*2.20462
    document.getElementById("lbs").value = lbs
}

function distancec() {
    var km = document.getElementById("km").value;
    var mi = km*0.62137
    document.getElementById("mi").value = mi
}