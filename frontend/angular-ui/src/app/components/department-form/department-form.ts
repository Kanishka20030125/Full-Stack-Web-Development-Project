import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DepartmentService } from '../../services/department';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './department-form.html',
  styleUrl: './department-form.css'
})
export class DepartmentFormComponent {
  departmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router
  ) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      this.departmentService.addDepartment(this.departmentForm.value).subscribe({
        next: () => this.router.navigate(['/departments']),
        error: (err) => console.error('Error creating department:', err)
      });
    }
  }
}