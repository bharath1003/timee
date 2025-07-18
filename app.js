Const goalForm = document.getElementById(‘goal-form’);
Const goalInput = document.getElementById(‘goal-input’);
Const goalList = document.getElementById(‘goal-list’);

goalForm.addEventListener(‘submit’, function€ {
  e.preventDefault();
  const goalText = goalInput.value.trim();
  if (goalText !== ‘’) {
    addGoal(goalText);
    goalInput.value = ‘’;
  }
});

Function addGoal(text) {
  Const li = document.createElement(‘li’);
  li.innerHTML = `
    <span>${text}</span>
    <button onclick=”toggleComplete(this)”>✅</button>
  `;
  goalList.appendChild(li);
}

Function toggleComplete(button) {
  Const li = button.parentElement;
  li.classList.toggle(‘completed’);
}


