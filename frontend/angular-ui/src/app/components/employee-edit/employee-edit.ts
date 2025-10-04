import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService, Employee } from '../../services/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './employee-edit.html',
  styleUrl: './employee-edit.css'
})
export class EmployeeEditComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId: number = 0;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: [''],
      salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Load employee data
    this.employeeService.getEmployee(this.employeeId).subscribe({
      next: (employee) => {
        this.employeeForm.patchValue(employee);
      },
      error: (err) => console.error('Error loading employee:', err)
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const updatedEmployee = {
        ...this.employeeForm.value,
        id: this.employeeId
      };
      
      this.employeeService.updateEmployee(this.employeeId, updatedEmployee).subscribe({
        next: () => this.router.navigate(['/employees']),
        error: (err) => console.error('Error updating employee:', err)
      });
    }
  }
}