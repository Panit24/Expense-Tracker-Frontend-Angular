import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { ExpenseFormComponent } from './app/expense-form/expense-form.component';
import { ExpenseListComponent } from './app/expense-list/expense-list.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
