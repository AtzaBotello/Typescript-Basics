type Person = {
    name: string;
    age: number;
    email: string;
}

let person: Person = {
    name: "Atza",
    age: 26,
    email: "atza@atza.com"
};

interface Book {
    title: string,
    author: string,
    pages: number
};

let book1: Book = {
    title: "Harry Potter 1",
    author: "JK Rowling",
    pages: 200
};

let book2: Book = {
    title: "El origen de los guardianes",
    author: "William Joyce",
    pages: 350
}

let book3: Book = {
    title: "Ready Player One",
    author: "Ernest Cline",
    pages: 643
}

let books: Book[] = [
    book1,
    book2,
    book3
];

function displayBookInfo({title, author, pages}: Book) {
    console.log("Title: ", title);
    console.log("Author: ", author);
    console.log("Pages: ", pages);
}

books.map((book: Book) => displayBookInfo(book));