using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Employee.API.Data;
// Note we are now just using the namespace, not the specific class
using Employee.API.Models; 

namespace Employee.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EmployeesController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Retrieves the list of all employees.
        /// </summary>
        /// <remarks>
        /// Returns an array of employee objects. Supports reading all employee records.
        /// </remarks>
        /// <returns>List of employees</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

    /// <summary>
    /// Retrieves a single employee by ID.
    /// </summary>
    /// <param name="id">Employee identifier</param>
    /// <returns>Employee object or 404 if not found</returns>
    [HttpGet("{id}")]
    public async Task<ActionResult<Models.Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

    /// <summary>
    /// Updates an existing employee.
    /// </summary>
    /// <param name="id">Employee identifier</param>
    /// <param name="employee">Employee object with updated fields</param>
    /// <returns>204 No Content on success, 400 if id mismatch, 404 if not found</returns>
    [HttpPut("{id}")]
    public async Task<IActionResult> PutEmployee(int id, Models.Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

    /// <summary>
    /// Creates a new employee.
    /// </summary>
    /// <param name="employee">Employee object to create</param>
    /// <returns>201 Created with location header</returns>
    [HttpPost]
    public async Task<ActionResult<Models.Employee>> PostEmployee(Models.Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            // The action name "GetEmployee" must match the method name
            return CreatedAtAction(nameof(GetEmployee), new { id = employee.Id }, employee);
        }

    /// <summary>
    /// Deletes an employee by ID.
    /// </summary>
    /// <param name="id">Employee identifier</param>
    /// <returns>204 No Content on success or 404 if not found</returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.Id == id);
        }
    }
}