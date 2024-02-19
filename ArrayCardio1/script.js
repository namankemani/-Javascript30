const inventors = [
    {first: 'Albert', last:'Einstein', year:1879, passed:1955},
    {first: 'Isaac', last:'Newton', year:1643, passed:1727},
    {first: 'Galileo', last:'Galilei', year:1564, passed:1642},
    {first: 'Marie', last:'Curie', year:1867, passed:1934},
    {first: 'Johanus', last:'Kepler', year:1571, passed:1630},
    {first: 'Nicolaus', last:'Copernicus', year:1473, passed:1543},
    {first: 'Max', last:'Planck', year:1858, passed:1947},
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  // 1. Filter the list of inventors for those who were born in the 1500's
  const fifteen = inventors.filter(inventor => (inventor.year>=1500 && inventor.year<=1599));
  console.table(fifteen);

  //2. Give us an array of the inventors first and last names
  const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
  console.log(fullName)

  //3. Sort the inventors by birthdate, oldest to youngest
  const ordered = inventors.sort(function(a,b){
    if(a.year>b.year){
      return 1;
    }else{
      return -1;
    }
  });
  console.table(ordered);

  //4. How many years did all the inventors live all together?
  const totalYears = inventors.reduce((total,inventor)=>{
    return total + (inventor.passed-inventor.year);
  },0);
  console.log(totalYears);

  
  // 5. Sort the inventors by years lived
  const oldest = inventors.sort((a,b)=> {
    const lastGuy = a.passed-a.year;
    const nextGuy = b.passed-b.year;
    return lastGuy>nextGuy?-1:1;
  });
  console.table(oldest);

  