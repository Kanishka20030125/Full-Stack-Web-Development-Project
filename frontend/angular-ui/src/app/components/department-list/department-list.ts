import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.css'
})
export class DepartmentListComponent implements OnInit {

  departments: any[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }
}