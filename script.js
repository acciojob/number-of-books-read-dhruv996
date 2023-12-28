document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const library = [
    { author: 'Author 1', title: 'Book 1', readingStatus: true },
    { author: 'Author 2', title: 'Book 2', readingStatus: false },
    { author: 'Author 3', title: 'Book 3', readingStatus: true },
    // Add more books as needed
  ];

  const result = numberOfBooksRead(library);
  document.getElementById('result').innerText = `Number of books read: ${result}`;
});

function numberOfBooksRead(library) {
  return library.filter(book => book.readingStatus).length;
}

