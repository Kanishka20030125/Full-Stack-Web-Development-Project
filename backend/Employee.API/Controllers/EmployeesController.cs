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

        // GET: api/Employees
        [HttpGet]
        // Use the fully qualified name here
        public async Task<ActionResult<IEnumerable<Models.Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        // GET: api/Employees/5
        [HttpGet("{id}")]
        // Use the fully qualified name here
        public async Task<ActionResult<Models.Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        // Use the fully qualified name for the parameter type
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

        // POST: api/Employees
        [HttpPost]
        // Use the fully qualified name for the parameter type and return type
        public async Task<ActionResult<Models.Employee>> PostEmployee(Models.Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            // The action name "GetEmployee" must match the method name
            return CreatedAtAction(nameof(GetEmployee), new { id = employee.Id }, employee);
        }

        // DELETE: api/Employees/5
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