function findMatching(drivers, foo){
    return drivers.filter(function(str) {
        return str.toLowerCase().indexOf(foo.toLowerCase()) !== -1
    })
}
  
function fuzzyMatch(drivers, foo){
    return drivers.filter(function(string) {
        let beginningString = string.substring(0,2)
        return beginningString.toLowerCase().indexOf(foo.toLowerCase()) !== -1
    })
}

function matchName(drivers, string){
    return drivers.filter(function(string) {
        return drivers.name === string;
    })
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(array, string) {
      return array.filter(array => array.name === string)
  }