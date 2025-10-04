import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-list',
  standalone: true,
imports: [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  RouterModule
],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'department', 'salary', 'actions'];
  constructor(private employeeService: EmployeeService) {}

  deleteEmployee(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          console.log('Employee deleted successfully');
          // Refresh the list after deletion
          this.employees = this.employees.filter((employee) => employee.id !== id);
        },
        error: (err) => console.error('Error deleting employee:', err),
      });
    }
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }
}
