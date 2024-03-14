const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');

    const isEmpty = workoutInput === '' || workoutInput === null || workoutInput === undefined;

    if(isEmpty){return;} // If 'Workout Input' is empty, return.

    if(!goalExist(workoutInput, workoutList)) {
        const newWorkout = document.createElement('li');
        newWorkout.textContent = workoutInput;
        workoutList.appendChild(newWorkout);
    }
    else {
        // A duplicate is found, display an alert to the user and don't add the workout to the list by returning back.
        alert(`Workout ${workoutInput} already exist.`);
        document.querySelector('#workoutInput').value = '';
        return;
    }

    // Get all existing workouts and add event listener that removes each workout when clicked.
    Array.from(workoutList.querySelectorAll('li')).forEach(workout => {
        workout.addEventListener('click', () => {
            workout.remove();
        });
    });
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');

    const isEmpty = goalInput === '' || goalInput === null || goalInput === undefined;

    if(isEmpty){return;} // If 'Goal Input' is empty, return.

    if(!goalExist(goalInput, goalList)) { // If it's not a duplicate, proceed with adding it as a new goal.
        const newGoal = document.createElement('li'),
        makeGoalText = goalInput.charAt(0).toUpperCase() + goalInput.slice(1); // Ensure that first letter is uppercase
        newGoal.textContent = makeGoalText;
        goalList.appendChild(newGoal);
        document.querySelector('#goalInput').value = ''; 
    }
    else {
        // A duplicate is found, display an alert to the user and don't add the goal to the list by returning back.
        alert(`Goal ${goalInput} already exist.`);
        document.querySelector('#goalInput').value = '';
        return;
    }

    // Get all existing goals and add event listener that removes each goal when clicked.
    Array.from(goalList.querySelectorAll('li')).forEach(goal => {
        goal.addEventListener('click', () => {
            goal.remove();
        });
    });
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// 'goalExist' function to get all existing goals and check if 'goalInput' matches any of them.
const goalExist = (inputText, list) => {
    const lowercaseText = inputText.toLowerCase(),
    goals = list.querySelectorAll('li');

    return Array.from(goals).some(goal => goal.textContent.toLowerCase().trim() === lowercaseText.trim());
}


///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
