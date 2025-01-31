import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from '../expense.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})

//Update the expense-form.component.ts file to add new expenses:
export class ExpenseFormComponent implements OnInit {
  expense: Expense = {
    title: '',
    description: '',
    amount: 0,
    category: '',
    date: '',
  };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.expenseService.addExpense(this.expense).subscribe(() => {
      alert('New expense added successfully!');
      this.expense = {
        title: '',
        description: '',
        amount: 0,
        category: '',
        date: '',
      }; // Reset form
    });
  }
}
