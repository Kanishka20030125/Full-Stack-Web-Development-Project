import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';   
import { MatIconModule } from '@angular/material/icon';     // <-- Import

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css'
})
export class DepartmentListComponent implements OnInit {

  departments: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'location', 'actions'];


  constructor(private departmentService: DepartmentService) {}

  deleteDepartment(id: number): void {
  if (confirm('Are you sure you want to delete this department?')) {
    this.departmentService.deleteDepartment(id).subscribe({
      next: () => {
        console.log('Department deleted successfully');
        // Refresh the list by filtering out the deleted item
        this.departments = this.departments.filter(dept => dept.id !== id);
      },
      error: (err) => console.error('Error deleting department:', err)
    });
  }
}
  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }
}