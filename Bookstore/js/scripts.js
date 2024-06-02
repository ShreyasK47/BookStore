$(document).ready(function(){
    
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');
    if (bookId) {
        fetchBookDetails(bookId);
    }
});

function fetchBookDetails(bookId) {
    
    const books = [
        { id: 1, title: "The Night Circus", author: "Erin Morgenstern", price: "₹1999", description: "A magical competition between two young illusionists unfolds within an enchanting circus. As the contest progresses, the stakes become higher than they ever imagined", image: "img/book1.jpg" },
        { id: 2, title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: "₹1599", description: "This book explores the history of our species from the emergence of Homo sapiens in the Stone Age to the modern age. Harari combines history and science to examine how humans have shaped the world.", image: "img/book2.jpg" },
        { id: 3, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", price: "₹1299", description: " A young boy discovers he is a wizard on his eleventh birthday and attends Hogwarts School of Witchcraft and Wizardry. He embarks on magical adventures with his friends.", image: "img/book3.jpg" },
        { id: 4, title: "Dune", author: "Frank Herbert", price: "₹1199", description: "On the desert planet Arrakis, young Paul Atreides becomes embroiled in a battle for control over the most valuable substance in the universe, melange, or spice. ", image: "img/book4.jpg" },
        { id: 5, title: "Becoming", author: "Michelle Obama", price: "₹1699", description: "In this memoir, former First Lady Michelle Obama chronicles her journey from the South Side of Chicago to the White House, sharing her personal experiences and insights.", image: "img/book5.jpg" },
        { id: 6, title: "Gone Girl", author: "Gillian Flynn", price: "₹1999", description: "The disappearance of Amy Dunne on her fifth wedding anniversary shocks the nation, and her husband Nick becomes the prime suspect. Twists and turns reveal dark secrets.", image: "img/book6.jpg" },
        { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", price: "₹1599", description: "Bilbo Baggins, a hobbit, is recruited by the wizard Gandalf and a group of dwarves for an epic adventure to reclaim their homeland from the dragon Smaug.", image: "img/book7.jpg" },
        { id: 8, title: "Pride and Prejudice", author: "Jane Austen", price: "₹1699", description: "The romantic clash between the opinionated Elizabeth Bennet and the proud Mr. Darcy is a classic tale of love, reputation, and class in early 19th-century England.", image: "img/book8.jpg" }
    ];

    const book = books.find(item => item.id === parseInt(bookId));
    if (book) {
        document.getElementById('bookImage').src = book.image;
        document.getElementById('bookTitle').textContent = book.title;
        document.getElementById('bookAuthor').textContent = `Author: ${book.author}`;
        document.getElementById('bookPrice').textContent = `Price: ${book.price}`;
        document.getElementById('bookDescription').textContent = book.description;
    } else {
        console.error('Book not found.');
    }
}

function submitContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

   
    $('#contactModal').modal('hide');

   
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    
  }