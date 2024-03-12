const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');

    // 'goalExist' function to get all existing goals and check if 'goalInput' matches any of them.
    const goalExist = (inputText, list) => {
        const lowercaseText = inputText.toLowerCase(),
        goals = list.querySelectorAll('li');

        return Array.from(goals).some(goal => goal.textContent.toLowerCase() === lowercaseText);
    }

    // If 'Goal Input' is empty, return.
    if(goalInput === ''){return;}

    // If it's not a duplicate, proceed with adding it as a new goal.
    if(!goalExist(goalInput, goalList)) {
        // If it's not a duplicate, proceed with adding it as a new goal.

        const newGoal = document.createElement('li'),
        makeGoalText = goalInput.charAt(0).toUpperCase() + goalInput.slice(1); // Ensure that first letter is uppercase
        // newGoal.textContent = goalInput;
        newGoal.textContent = makeGoalText;
        goalList.appendChild(newGoal); 
    }
    else {
        // A duplicate is found, display an alert to the user and don't add the goal to the list by returning back.
        alert(`Goal already exist.`);
        return;
    }

    // Get all existing goals and add event listener that removes each goal when clicked.
    Array.from(goalList.querySelectorAll('li')).forEach(goal => {
        goal.addEventListener('click', () => {
            goal.remove();
        });
    });
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    
    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
    
    
};