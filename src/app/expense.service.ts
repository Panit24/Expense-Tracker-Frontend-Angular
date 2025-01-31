import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Expense {
  id?: number;
  title: string;
  description: string;
  amount: number;
  category: string;
  date?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:8000/expenses';
  constructor(private http: HttpClient) {}

  // Get all expenses
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  // Add a new expense
  addExpense(expense: Expense): Observable<Expense> {
    // Ensure the date is in ISO format with seconds and timezone offset
    if (expense.date) {
      expense.date = new Date(expense.date).toISOString(); // Format to ISO 8601 string
    }
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  // Update an expense
  updateExpense(id: number, expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${this.apiUrl}/${id}`, expense);
  }

  // Delete an expense
  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
