const BASE_URL = "http://localhost:3000/books";
const bookListDiv = document.getElementById("book-list");
const bookDetailDiv = document.getElementById("book-detail");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const closeDetailBtn = document.getElementById("closeDetailBtn");

let allBooks = []; 

// Event Listener 1: Loading all books
document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();
});

// Event Listener 2: Search functionality 
searchInput.addEventListener("input", filterAndDisplayBooks);

// Event Listener 3: Genre filter 
genreFilter.addEventListener("change", filterAndDisplayBooks);



function fetchBooks() {
    fetch(BASE_URL)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(books => {

            allBooks = books.map(book => ({
                id: book.id,
                title: book.title,
                author: book.author,
                genre: book.genre, 
                publicationYear: book.publicationYear,
                year: book.publicationYear,
                summary: book.summary, 
                image: book.image
            }));
            displayBooks(allBooks);
        })
        .catch(err => {
            bookListDiv.innerHTML = `<p class="error-message">Failed to load books: ${err.message}</p>`;
            console.error("Error fetching books:", err);
        });
}

function displayBooks(booksToDisplay) {
    bookListDiv.innerHTML = ""; 
    if (booksToDisplay.length === 0) {
        bookListDiv.innerHTML = '<p class="no-results">No books found matching your criteria.</p>';
        return;
    }

    // Array iteration: forEach to display each book
    booksToDisplay.forEach(book => displayBookCard(book));
}

function displayBookCard(book) {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-card-image" />
        <h4 class="book-card-title">${book.title}</h4>
        <p class="book-card-author">${book.author}</p>
    `;

    card.addEventListener("click", () => showBookDetail(book));
    bookListDiv.appendChild(card);
}



function filterAndDisplayBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreFilter.value.toLowerCase();

    let filteredBooks = allBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                                book.author.toLowerCase().includes(searchTerm);

        
        const matchesGenre = selectedGenre === "" || book.genre.toLowerCase() === selectedGenre;
        return matchesSearch && matchesGenre;
    });

    
    displayBooks(filteredBooks);
}


function showBookDetail(book) {
    bookDetailDiv.classList.remove("hidden");
    document.body.classList.add("detail-open");
    bookListDiv.classList.add("shrink"); 

    bookDetailDiv.innerHTML = `
        <button class="close-btn">X</button> <img src="${book.image}" alt="${book.title}" class="detail-image" />
        <h2 class="detail-title">${book.title}</h2>
        <p class="detail-author"><strong>Author:</strong> ${book.author}</p>
        <p class="detail-genre"><strong>Genre:</strong> ${book.genre}</p>
        <p class="detail-year"><strong>Year:</strong> ${book.year || 'N/A'}</p> <p class="detail-summary">${book.summary || 'No summary available.'}</p>
    `;
    bookDetailDiv.querySelector(".close-btn").addEventListener("click", closeBookDetail);
}

function closeBookDetail() {
    bookDetailDiv.classList.add("hidden");
    document.body.classList.remove("detail-open");
    bookListDiv.classList.remove("shrink");
}