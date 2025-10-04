import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // The URL of your Spring Boot Department API
  private apiUrl = 'http://localhost:8082/api/departments'; // <-- Note the port is 8082

  constructor(private http: HttpClient) { }

  // Method to get all departments
  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}