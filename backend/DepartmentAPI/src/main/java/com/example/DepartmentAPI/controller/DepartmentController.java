package com.example.DepartmentAPI.controller;

import com.example.DepartmentAPI.model.Department;
import com.example.DepartmentAPI.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:5173"})
@RestController
@RequestMapping("/api/departments")
@Tag(name = "Departments", description = "Department management APIs")
public class DepartmentController {

    @Autowired
    private DepartmentRepository departmentRepository;

    // GET all departments
    @Operation(
        summary = "Get all departments",
        description = "Retrieves a list of all departments in the system",
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the list of departments")
        }
    )
    @GetMapping
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    // GET a single department by ID
    @Operation(
        summary = "Get department by ID",
        description = "Retrieves a specific department by its ID",
        responses = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the department"),
            @ApiResponse(responseCode = "404", description = "Department not found")
        }
    )
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
    @Operation(
        summary = "Create a department",
        description = "Creates a new department with the provided information",
        responses = {
            @ApiResponse(responseCode = "200", description = "Department successfully created"),
            @ApiResponse(responseCode = "400", description = "Invalid input")
        }
    )
    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return departmentRepository.save(department);
    }

    // PUT (update) an existing department
    @Operation(
        summary = "Update a department",
        description = "Updates the information of an existing department",
        responses = {
            @ApiResponse(responseCode = "200", description = "Department successfully updated"),
            @ApiResponse(responseCode = "404", description = "Department not found"),
            @ApiResponse(responseCode = "400", description = "Invalid input")
        }
    )
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
    @Operation(
        summary = "Delete a department",
        description = "Deletes a department by its ID",
        responses = {
            @ApiResponse(responseCode = "204", description = "Department successfully deleted"),
            @ApiResponse(responseCode = "404", description = "Department not found")
        }
    )
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