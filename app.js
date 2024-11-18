const simpleArray = [3, 5, 6, 7, 8];
let summe = 0;
let i = 0;

while (i<simpleArray.length){
    summe+=simpleArray[i];
    i++
}

console.log("summe is: ", summe);


const durschnitt = summe / simpleArray.length;
console.log("sashualo aritmetikuli is: ", durschnitt)


const book = {
    title: "The big Five for Life",
    author: "John Strelechy",
    yearPublished: 2009
}

console.log('"' + book.title +'"' + ' by ' + book.author + ' was published in '  + book.yearPublished);
//or
// console.log(`${book.title}  by ${book.author} was published in ${book.yearPublished}`);

book.yearPublished = 2010;

console.log(book);

const persArray = [
    pers1= {
        name: "giorgi",
        age: 23,
        score: 8
    },
    pers2= {
        name: "maria",
        age: 28,
        score: 9
    },
    pers3={
        name: "nia",
        age: 18,
        score: 10
    }
];

console.log(persArray)