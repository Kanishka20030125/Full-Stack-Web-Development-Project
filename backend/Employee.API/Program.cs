using Microsoft.EntityFrameworkCore;
using Employee.API.Data;

var builder = WebApplication.CreateBuilder(args);

// *** START OF CORS CONFIGURATION (STEP 1) ***
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins(
                              "http://localhost:4200", // Angular app
                              "http://localhost:5173"  // React app
                          )
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                      });
});
// *** END OF CORS CONFIGURATION (STEP 1) ***

// Add services to the dependency injection container.
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    // Include XML comments (generated from project) in Swagger UI
    var xmlFile = System.IO.Path.ChangeExtension(System.Reflection.Assembly.GetExecutingAssembly().Location, ".xml");
    if (System.IO.File.Exists(xmlFile))
    {
        options.IncludeXmlComments(xmlFile);
    }

    options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Employee API",
        Version = "v1",
        Description = "CRUD API for managing employees"
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

// *** START OF CORS CONFIGURATION (STEP 2) ***
// This line MUST be after UseHttpsRedirection and before UseAuthorization
app.UseCors(MyAllowSpecificOrigins);
// *** END OF CORS CONFIGURATION (STEP 2) ***

app.UseAuthorization();

app.MapControllers();

app.Run();