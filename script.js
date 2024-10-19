const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

let expenses = [];
let total = 0;

// Add event listener to the form
expenseForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    // Create an expense object
    const expense = {
        name: expenseName,
        amount: expenseAmount
    };

    // Add expense to the array
    expenses.push(expense);
    
    // Update total expenses
    total += expenseAmount;
    
    // Render expenses
    renderExpenses();

    // Clear form fields
    expenseForm.reset();
});

// Function to render expenses
function renderExpenses() {
    // Clear the current list
    expenseList.innerHTML = '';

    // Render each expense
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${expense.name}: <span>₦${expense.amount.toFixed(2)}</span>`;
        expenseList.appendChild(li);
    });

    // Update total expenses
    totalExpense.textContent = `₦${total.toFixed(2)}`;
}
