/*                     Select a random facilitator
For this project, you should build the following features:

provide the user with the ability to input a list of names
add a "select facilitator" button that selects and displays a random name from the list.      */

let names = [];

// Event listener for adding names
document.getElementById('add-name').addEventListener('click', (event) => {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput.trim()) { // Ensure the input is not empty or just spaces
        names.push(nameInput); // Add the name to the array
        let element_list = document.getElementById('list');
        let new_li = document.createElement('li');
        new_li.innerText = nameInput; // Set the name as the text for the new list item
        element_list.appendChild(new_li); // Add the list item to the unordered list
        document.getElementById('name-input').value = ''; // Clear the input field
    }
});

// Event listener for selecting a facilitator
document.getElementById('select-facilitator').addEventListener('click', (event) => {
    if (names.length > 0) { // Ensure there are names in the array
        let randomIndex = Math.floor(Math.random() * names.length); // Get a random index
        let selectedName = names[randomIndex]; // Get the name at that index
        document.getElementById('selected-name').innerText = `Selected facilitator: ${selectedName}`; // Display the selected name
    } else {
        document.getElementById('selected-name').innerText = 'No names available'; // Show a message if no names are available
    }
});