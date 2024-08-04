using CustomersApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomersApi.Data
{
    public class CustomersContext :  DbContext
    {
        public CustomersContext(DbContextOptions<CustomersContext> options) : base(options)
        { }

        public DbSet<Customer> Customers { get; set; } = null!;
    }
}
