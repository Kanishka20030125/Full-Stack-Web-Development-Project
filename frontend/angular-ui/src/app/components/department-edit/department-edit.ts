import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DepartmentService, Department } from '../../services/department';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './department-edit.html',
  styleUrl: './department-edit.css'
})
export class DepartmentEditComponent implements OnInit {
  departmentForm: FormGroup;
  departmentId: number = 0;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Load department data
    this.departmentService.getDepartment(this.departmentId).subscribe({
      next: (department) => {
        this.departmentForm.patchValue(department);
      },
      error: (err) => console.error('Error loading department:', err)
    });
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      const updatedDepartment = {
        ...this.departmentForm.value,
        id: this.departmentId
      };
      
      this.departmentService.updateDepartment(this.departmentId, updatedDepartment).subscribe({
        next: () => this.router.navigate(['/departments']),
        error: (err) => console.error('Error updating department:', err)
      });
    }
  }
}