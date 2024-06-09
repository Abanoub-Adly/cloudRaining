function rain(){
const cloud = document.querySelector('.cloud');
const rainMusic = document.querySelector(".rainMusic")
rainMusic.play()
    let rain = document.createElement("div");
    rain.classList.add('drop')
    cloud.appendChild(rain)
    rain.style.left = `${Math .floor(Math.random() * 320)}px`
    setTimeout(() => {
        rain.remove()
    }, 2000);
    
}
setInterval(() => {
    rain()
}, 20);