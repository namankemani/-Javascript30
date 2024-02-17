const secondHand = document.querySelector('.hand-second')
function newDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes/60)*360)+90;
    console.log(minutes);
    document.querySelector('.hand-minute').style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/12)*360)+90;
    console.log(hours);
    document.querySelector('.hand-hour').style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(newDate,1000);