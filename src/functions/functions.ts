export function circleclick() {
    const circle = document.getElementById('wheel') ! ;
    const rectangle = document.getElementById('rectangle') ! ;
    const stickman = document.getElementById('stickman') ! ;
    circle.style.animation = "clickAnimation 0.7s";
    setTimeout(() => {
        circle.style.display = "none";
        rectangle.style.animation = "rectangleAnimation 0.7s ease-out forwards"
    }, 500);
    if (window.innerWidth > 1200) {
        setTimeout(() => {
            stickman.style.display = "block";
        }, 1700);
    if (window.innerWidth > 1200) {
        setTimeout(() => {
        stickman.style.transform = "translateY(0)" ;
    }, 2000);}
}
}
