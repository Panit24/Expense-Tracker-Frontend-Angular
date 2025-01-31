import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from '../expense.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})

//Update the expense-list.component.ts file to fetch and display expenses:
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
      console.log('Expenses fetched:', data); // Log the data for debugging
    });
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(() => {
      this.loadExpenses(); // Refresh the list after deletion
    });
  }
}
