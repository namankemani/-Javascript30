const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
  //at least one should be greater than or equal to 19
  const isAdult = people.some(person => ((new Date()).getFullYear())-person.year >= 19);
    console.log({isAdult});

   //everyone should be greater than or equal to 19
   const isEveryAdult = people.every(person =>((new Date()).getFullYear())-person.year >= 19);
   console.log({isEveryAdult});

   //find the comment with the ID of 823423
   const findComment = comments.find(comment => comment.id===823423); 
   console.log({findComment});

   //finding index and then deleting id of 823423
   const Index = comments.findIndex(comment => comment.id===823423); 
   console.log({Index});

   const newComments = [
    ...comments.slice(0,Index),
    ...comments.slice(Index+1)
   ];
   console.table(newComments);
