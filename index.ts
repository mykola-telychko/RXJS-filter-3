import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter

// Example 3: filter for number greater than specified value

//emit every second
const source = interval(1000);
//filter out all values until interval is greater than 5
const example = source.pipe(filter((num) => num > 5));
/*
  "Number greater than 5: 6"
  "Number greater than 5: 7"
*/
const subscribe = example.subscribe((val) =>
  console.log(`Number greater than 5: ${val}`)
);
