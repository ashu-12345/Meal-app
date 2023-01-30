// Get references to the HTML elements we need to work with
const mealList = document.getElementById("meal-list");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");

// Add a new meal to the meal list
function addMeal(name, description) {
  // Create a new div to hold the meal
  const newMeal = document.createElement("div");
  newMeal.classList.add("meal");

  // Create an h2 element for the meal name
  const mealName = document.createElement("h2");
  mealName.textContent = name;
  newMeal.appendChild(mealName);

  // Create a p element for the meal description
  const mealDescription = document.createElement("p");
  mealDescription.textContent = description;
  newMeal.appendChild(mealDescription);

  // Add the new meal to the meal list
  mealList.appendChild(newMeal);
}

// Search for meals that match the search query
function searchMeals() {
  // Get the search query
  const searchQuery = searchInput.value.toLowerCase();

  // Loop through all the meals
  const meals = document.querySelectorAll(".meal");
  for (let meal of meals) {
    // Get the name and description of the current meal
    const mealName = meal.querySelector("h2").textContent;
    const mealDescription = meal.querySelector("p").textContent;

    // Check if the search query is found in the name or description
    if (mealName.toLowerCase().includes(searchQuery) || mealDescription.toLowerCase().includes(searchQuery)) {
      // Show the meal if the search query is found
      meal.style.display = "block";
    } else {
      // Hide the meal if the search query is not found
      meal.style.display = "none";
    }
  }
}

// Add an event listener to the search button
searchButton.addEventListener("click", searchMeals);

// Add some initial meals to the meal list
addMeal("Meal 1", "Description of meal 1");
addMeal("Meal 2", "Description of meal 2");
// Get a reference to the add meal form
const addMealForm = document.getElementById("add-meal-form");

// Add an event listener to the form to handle the submit event
addMealForm.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the name and description inputs
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;

  // Call the addMeal function to add the new meal to the meal list
  addMeal(name, description);

  // Reset the form fields
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
});


// Display meals function
function displayMeals() {
    // Clear current meals
    meals.innerHTML = "";
  
    // Loop through mealList and create elements for each meal
    mealList.forEach((meal, index) => {
      // Create meal element
      const mealEl = document.createElement("div");
      mealEl.classList.add("meal");
      mealEl.innerHTML = `
        <h3>${meal.name}</h3>
        <p>Ingredients: ${meal.ingredients}</p>
        <p>Instructions: ${meal.instructions}</p>
      `;
      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.addEventListener("click", () => {
        // Remove the meal from the array
        mealList.splice(index, 1);
        
        // Display the updated meals
        displayMeals();
      });
      mealEl.appendChild(deleteBtn);
  
      // Add meal to meals element
      meals.appendChild(mealEl);
    });
  }
  