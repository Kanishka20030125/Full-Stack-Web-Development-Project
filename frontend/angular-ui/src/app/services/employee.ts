import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // The URL of your ASP.NET Core Employee API
  private apiUrl = 'http://localhost:5263/api/Employees'; // <-- IMPORTANT: Use your actual port number

  constructor(private http: HttpClient) { }

  // Method to get all employees
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}