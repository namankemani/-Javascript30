const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const time = timeNodes.map(nodes => nodes.dataset.time).map(time=>{
    const [mins,secs] = time.split(':').map(parseFloat);
    return mins*60+secs;
}).reduce((total,seconds)=> total+seconds);

let secondsLeft = time;
const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft%3600;

const min = Math.floor(secondsLeft/60);
secondsLeft =  secondsLeft%60;

console.log(hours,min,secondsLeft);