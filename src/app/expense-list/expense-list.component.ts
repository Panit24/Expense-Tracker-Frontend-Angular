import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from '../expense.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported here

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add CommonModule here
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})

//Update the expense-list.component.ts file to fetch and display expenses:
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
    // Fetch the expenses when the component is initialized
    // this.expenseService.getExpenses().subscribe((expenses: Expense[]) => {
    //   this.expenses = expenses; // Assign the fetched expenses to the component property
    // });
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
      console.log('Expenses fetched:', data); // Log the data for debugging
    });
  }

  addExpense(newExpense: Expense): void {
    this.expenseService.addExpense(newExpense).subscribe(
      () => {
        // Reload the page after the expense is added
        location.reload();
      },
      (error) => {
        console.error('Error adding expense:', error); // Handle error if any
      }
    );
  }

  editExpense(expense: Expense): void {
    this.selectedExpense = { ...expense }; // Clone the expense to avoid modifying original object
    this.isModalOpen = true;
  }

  updateExpense(id: number, expense: Expense): void {
    if (id === undefined || id === 0) {
      console.error('Invalid expense ID');
      return;
    }
    // Assuming you have a variable 'updatedExpense' that holds the updated expense data
    // const updatedExpense: Expense = {
    //   id,
    //   title: 'Updated Title',
    //   description: 'Updated Description',
    //   amount: 100,
    //   category: 'Updated Category',
    //   date: '2025-01-31 13:27:15.960758+07', // You should use the correct updated date format
    // };
    // this.expenseService.updateExpense(id, updatedExpense).subscribe(() => {
    //   this.loadExpenses(); // Refresh the list after update
    // });
    this.expenseService.updateExpense(id, expense).subscribe(() => {
      this.loadExpenses(); // Refresh the list after update
    });
    this.isModalOpen = false;
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.loadExpenses(); // Refresh the list after deletion
    });
  }

  onExpenseAdded(): void {
    this.loadExpenses(); // Refresh expense list when a new expense is added
  }

  isModalOpen = false;

  selectedExpense: Expense = {
    id: 0,
    title: '',
    description: '',
    amount: 0,
    category: '',
    date: '',
  };

  // Open the edit modal and populate it with the selected expense data
  openEditModal(expense: Expense): void {
    this.selectedExpense = { ...expense }; // Create a copy of the expense
    this.isModalOpen = true;
  }

  // Close the edit modal
  closeEditModal() {
    this.isModalOpen = false;
  }
}
