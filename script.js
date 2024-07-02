//your code here!

const list = document.getElementById('infi-list');

// Function to create and append list items
function addListItems(numItems) {
  for (let i = 0; i < numItems; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Add initial 10 list items
addListItems(10);

// Function to handle scroll event and load more items
function handleScroll() {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Check if the user has scrolled to the bottom
  if (scrollPosition >= documentHeight) {
    addListItems(2); // Add 2 more list items
  }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);