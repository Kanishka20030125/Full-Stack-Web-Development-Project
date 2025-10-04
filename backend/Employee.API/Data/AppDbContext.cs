using Microsoft.EntityFrameworkCore;


namespace Employee.API.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

   public DbSet<Employee.API.Models.Employee> Employees { get; set; }
}