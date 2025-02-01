import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { Expense } from './expense.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExpenseFormComponent, ExpenseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  expenses: Expense[] = [];
  onExpenseAdded(newExpense: Expense) {
    this.expenses.push(newExpense);
  }
  title = 'expense-tracker-frontend-angular';
}
