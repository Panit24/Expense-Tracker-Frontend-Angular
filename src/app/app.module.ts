import { NgModule } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from './expense.service';

import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ExpenseListComponent,
    ExpenseFormComponent,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
