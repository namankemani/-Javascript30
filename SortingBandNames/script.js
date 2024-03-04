const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(e){
    return e.replace(/^(a|an|the)/i,'').trim();
}

const sortedBands = bands.sort((a,b)=>{
    return strip(a)>strip(b)?1:-1;
});
console.log(sortedBands);

document.querySelector('#bands').innerHTML = sortedBands.map((a)=>`<li>${a}</li>`).join('');k