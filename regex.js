/*
Regular expressions


Definition
Regular expression is a pattern that is used to search for a substrings in a string.


Use cases
- validation (date format, email address)
    '06-10-2022' in DD-MM-YYYY format -> true or false
    'email@email.com' -> true or false

- template processing (string interpolation -> replacing placeholders with values)
    let template = 'I am {var:name}. It is {date:today}.';
    let name = 'Olek';
    let today = 1665144264545;
    let result = 'I am Olek. It is 07-10-2022.'

- convertion (markdown -> html) '# Hello' -> '<h1>Hello</h1>'

*/

/*

Definition
REGULAR EXPRESSION is a PATTERN that is used to SEARCH for a SUBTRINGS in a STRING.

REGULAR EXPRESSION -> /a/
PATTERN            -> a
STRING             -> 'this is a string'
SUBTRINGS          -> ['a']
SEARCH             -> exec()

*/

// goal -> search for occurance of letter 'a'

// let r1 = /a/; // static
// let pattern = 'a';
// let r2 = new RegExp(pattern); // dynamic

// let string = 'this is a string';

// console.log(r1.exec(string));

// result -> [ 'a', index: 8, input: 'this is a string', groups: undefined ]

/*

Definition
REGULAR EXPRESSION is a PATTERN(with optional flags) that is used to SEARCH for a SUBTRINGS in a STRING.

REGULAR EXPRESSION -> /a|n/g
PATTERN            -> a|n
FLAGS              -> g - global
STRING             -> 'this is a string'
SUBTRINGS          -> ['a', 'n']

flags -> tell our regex how to behave

*/

// goal -> search for occurences of letter a or letter n


// let s = 'this is a string'
// let r = /a|n/g;

// if (r.global) {
//     while ((result = r.exec(s)) && result[0].length > 0) console.log(result);
// } else {
//     console.log(r.exec(s));
// }

function searchAndLog(r, s) {
    if (r.global) {
        while ((result = r.exec(s)) && result[0].length > 0) console.log(result);
    } else {
        console.log(r.exec(s));
    }
}

/*

QUANTIFIERS
How many characters do we search.

{n} 
?(zero or one)
+(one or more) 
*(zero or more)

goals:
1. search for occurences of substrings: 'abb'
2. search for occurences of substrings: 'abb' or 'abbb' or 'abbbb'
3. search for occurences of substrings: 'a' or 'ab' 
4. search for occurences of any substring that has 'a' and minimum one 'b' after it 
5. search for occurences of any substring that has 'a' and zero or more 'b' after it

*/

// let s = 'a ab abb abbb abbbb abbbbb ab?';

// // let r = /ab{2}/g;
// // let r = /ab{2,4}/g;
// // let r = /ab{0,1}/g;   r = /ab?/g;
// // let r = /ab{1,}/g;    r = /ab+/g; 
// // let r = /ab{0,}/g;    r =  /ab*/g;

// let r = /ab\?/

// searchAndLog(r, s);
