import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list';
import { DepartmentListComponent } from './components/department-list/department-list';
import { EmployeeForm } from './components/employee-form/employee-form';
import { DepartmentFormComponent } from './components/department-form/department-form';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit';
import { DepartmentEditComponent } from './components/department-edit/department-edit';

export const routes: Routes = [
    { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Default route
    { path: 'employees', component: EmployeeListComponent },
    { path: 'departments', component: DepartmentListComponent },
    { path: 'employees/new', component: EmployeeForm },
    { path: 'employees/edit/:id', component: EmployeeEditComponent },
    { path: 'departments/new', component: DepartmentFormComponent },
    { path: 'departments/edit/:id', component: DepartmentEditComponent }
];