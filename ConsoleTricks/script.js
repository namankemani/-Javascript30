const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen(){
    const p = document.querySelector('p')
    p.style.color='#BADA55';
    p.style.fontSize = '50';
}

console.log('%c I am some great text', 'font-size:50px')
console.log('%c I am some great text', 'font-size:50px','background:yellow')

console.warn('WARNING!');

console.error('ERROR!!');

console.info('INFORMATION');

let p = document.querySelector('p');
console.assert(p.classList.contains('Oh'),'You did not select the right Element!');

//console.clear();

console.log(p);
console.dir(p);

dogs.forEach(dog =>{
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.groupEnd(`${dog.name}`);
})

console.count('Yes');
console.count('Yes');
console.count('Yes');
console.count('Yes');
