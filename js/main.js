var slider = document.getElementById("myRange");
var imagehigh = document.getElementById("image-turn-high");
imagehigh.src = "img/high/img"+pad(slider.value, 2)+".jpg";

slider.oninput = function() {
    imagehigh.src = "img/high/img"+pad(this.value, 2)+".jpg";
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}