// app.js

// Get the DOM elements
const addHabitButton = document.getElementById('add-habit');
const habitNameInput = document.getElementById('habit-name');
const habitList = document.getElementById('habit-list');

// Function to add a new habit
function addHabit() {
  const habitName = habitNameInput.value.trim();

  if (habitName === '') {
    alert('Please enter a habit!');
    return;
  }

  // Create a new list item for the habit
  const li = document.createElement('li');
  li.classList.add('habit');
  
  // Create a span for the habit name
  const habitText = document.createElement('span');
  habitText.textContent = habitName;
  li.appendChild(habitText);
  
  // Create a button to delete the habit
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => li.remove();
  li.appendChild(deleteButton);
  
  // Add the new habit to the list
  habitList.appendChild(li);
  
  // Clear the input field
  habitNameInput.value = '';
}

// Event listener for the Add Habit button
addHabitButton.addEventListener('click', addHabit);

// Allow user to press "Enter" to add a habit
habitNameInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addHabit();
  }
});
