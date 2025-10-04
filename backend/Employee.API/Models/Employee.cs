namespace Employee.API.Models;

public class Employee
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Email { get; set; }
    public string? Department { get; set; }
    public decimal Salary { get; set; }
}