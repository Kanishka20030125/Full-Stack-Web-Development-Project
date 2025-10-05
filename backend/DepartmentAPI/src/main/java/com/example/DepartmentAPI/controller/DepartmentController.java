package com.example.DepartmentAPI.controller;

import com.example.DepartmentAPI.model.Department;
import com.example.DepartmentAPI.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:5173"})
@RestController
@RequestMapping("/api/departments")

public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;

    // GET all departments
    @Operation(summary = "Get all departments", description = "Returns a list of all departments")
    @GetMapping
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    // GET a single department by ID
    @Operation(summary = "Get department by ID", description = "Returns a single department when given its ID")
    @GetMapping("/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable(value = "id") Long departmentId) {
        Optional<Department> department = departmentRepository.findById(departmentId);
        if(department.isPresent()) {
            return ResponseEntity.ok().body(department.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // POST a new department
    @Operation(summary = "Create a department", description = "Add a new department record")
    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return departmentRepository.save(department);
    }

    // PUT (update) an existing department
    @Operation(summary = "Update a department", description = "Updates name and location for a department")
    @PutMapping("/{id}")
    public ResponseEntity<Department> updateDepartment(@PathVariable(value = "id") Long departmentId,
                                                       @RequestBody Department departmentDetails) {
        Optional<Department> optionalDepartment = departmentRepository.findById(departmentId);
        if(optionalDepartment.isPresent()) {
            Department department = optionalDepartment.get();
            department.setName(departmentDetails.getName());
            department.setLocation(departmentDetails.getLocation());
            final Department updatedDepartment = departmentRepository.save(department);
            return ResponseEntity.ok(updatedDepartment);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE a department
    @Operation(summary = "Delete a department", description = "Deletes a department by ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDepartment(@PathVariable(value = "id") Long departmentId) {
        Optional<Department> department = departmentRepository.findById(departmentId);
        if(department.isPresent()) {
            departmentRepository.delete(department.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}