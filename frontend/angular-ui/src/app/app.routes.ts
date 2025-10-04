import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { DepartmentListComponent } from './components/department-list/department-list';

export const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Default route
    { path: 'employees', component: EmployeeListComponent },
    { path: 'departments', component: DepartmentListComponent }
];