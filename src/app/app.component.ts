import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExpenseFormComponent, ExpenseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'expense-tracker-frontend-angular';
}
