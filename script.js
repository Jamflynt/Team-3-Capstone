const loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loadFade();
})

let int = setInterval(loadFade, 15)
let load = -100;
function loadFade() {
    load++;
    if(load > 99) {
        clearInterval(int);
        loader.style.display = "none";
    }
    loader.style.opacity = scale(load, 0, 100, 1, 0);
    console.log(load);
};

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max -out_min) / (in_max - in_min) + out_min;
}