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


/*

CHARACTER SETS
characters inside square brackets [] - search for one character from all provided

[abc] -> means search for a or b or c
a|b|c -> the same effect with alternation operator

Difference:
With square brackets [abc] we can search for only single characters
In order to search for word javascript or python we need to use alternation operator: javascript|python

Ranges
two characters with dash between them
[0-9] one of 0,1,2,3,4,5,6,7,8,9
[a-z] one of a,b,c,...,z -> from ASCII table (so there will be no any polish or chinese characters)
[A-Z] one of A,B,C,...,Z -> from ASCII table

Negation
We can negate anything that we put into square bracket using ^ symbol
[^abc] search for any character but not a or b or c


CHARACTER CLASSES
Short way to match one of several characters.
.  = any character except newline
\d = [0-9],
\w = [a-zA-Z0-9_],
\s = [ \t\n\r\f\v]

Inversed
\D = [^0-9]
\W = [^a-zA-Z0-9_]
\S = [^ \t\n\r\f\v]

*/

/*

goals:
1. search for all occurences of letter a, b, c
2. search for all occurences of word 'script' or 'Script'
3. search for all occurences of word 'javascript' or 'JavaScript' or 'Javascript' or 'javaScript'
4. search for all numbers and underscores in string
5. search for substrings that are minimum 2 characters long and consist of letters

goals:
1. search for any characters but not whitespaces and not digits
2. given string 'This is <inside> and this is outside' search for everything that is between < and > with these signs included
3. given template with placeholders = 'My name is <name>. I am <age> years old.' search for all placeholders

*/


// searchAndLog(/a|b|c/g, 'this is a  12 3 _string_ c++');
// searchAndLog(/[abc]/g, 'this is a  12 3 _string_ c++');

// searchAndLog(/[sS]cript/g, 'this is a script and Script 12 3 _string_');

// searchAndLog(/javascript|JavaScript|Javascript|javaScript/g, '/javascript| lorem JavaScript| and so on Javascript| and some 123 javaScript/');
// searchAndLog(/[jJ]ava[sS]cript/g, '/javascript| lorem JavaScript| and so on Javascript| and some 123 javaScript/');

// searchAndLog(/[0-9]+|_/g, 'this is a  12 3 _string_');

// searchAndLog(/[a-zA-Z]{2,}/g, 'this is a  12 3 _string_');


// searchAndLog(/[^\s\d]/g, 'thi2s 6 is a 1string');

// searchAndLog(/<.*>/g, 'This is <inside> and this is outside');

// searchAndLog(/<.+?>/g, 'My name is <name>. I am <age> years old.');


/*

GREEDY AND LAZY QUANTIFIERS

GREEDY - search for the last possible match
LAZY - search for the first possible match

*/


// searchAndLog(/<.+>/g, 'My name is <name>. I am <age> years old.');


// searchAndLog(/<.+?>/g, 'My name is <name>. I am <age> years old.');



