
const express = require('express');


const app = express();
const PORT = 3000;

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Novel', year: 1925 },
    { id: 2, title: 'Youve Been warned', author: 'James Patterson', genre: 'Thriller', year: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', year: 1951 },
    
];


app.get('/books', (req, res) => {
    
    const { genre, year } = req.query;

    
    let filteredBooks = books;
    if (genre) {
        filteredBooks = filteredBooks.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
    }
    if (year) {
        filteredBooks = filteredBooks.filter(book => book.year.toString() === year);
    }

    
    res.json(filteredBooks);
});

r
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
