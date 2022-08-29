const clock = document.querySelector(".date");

function getClock(){
    const date = new Date();
    const years = date.getFullYear();
    const month = String(date.getMonth().padStart(2,"0"));
    const dates = String(date.getDate().padStart(2,"0"));
    const hours = String(date.getHours().padStart(2,"0"));
    const minutes = String(date.getMinutes().padStart(2,"0"));
    const seconds = String(date.getSeconds().padStart(2,"0"));
    clock.innerText =`${years}:${month}:${dates}:${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock(), 1000);
