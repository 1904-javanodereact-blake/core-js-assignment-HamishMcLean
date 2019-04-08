/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    
      
      // for in loop can be used to iterate through keys of an object
      for (let objectField in someObj) {
        console.log(`property = ${objectField}
        and value = ${someObj[objectField]}`);
      }
}
let SpaceShip =
        {
        object: 'SpaceShip',
        name: 'Pillar of Autumn',
        series: 'Halo Franchise',
        weight: '9 million metric tons',
        height: '398 meters',
        affiliation: 'UNSC'
        }
        
objectProperties(SpaceShip);


// for this example you should print something like name: BodDillan  numericThing: 1234