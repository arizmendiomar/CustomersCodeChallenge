using CustomersApi.Entities;

namespace CustomersApi.Data
{
    public class CustomersContextSeed
    {
        public static void SeedAsync(CustomersContext customersContext)
        {
            if (!customersContext.Customers.Any())
            {
                var customers = new List<Customer>
                {
                    new Customer { Id = 1, FirstName = "James", LastName = "Logan", Email = "jlogan@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 2, FirstName = "Scott", LastName = "Summers", Email = "ssummers@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 3, FirstName = "Ororo", LastName = "Monroe", Email = "omonroe@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 4, FirstName = "Jason", LastName = "Asano", Email = "jasano@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 5, FirstName = "Bruce", LastName = "Wayne", Email = "bwayne@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 6, FirstName = "Lionel", LastName = "Messi", Email = "lmessi@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 7, FirstName = "Josep", LastName = "Guardiola", Email = "jguardiola@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 8, FirstName = "Ronaldo", LastName = "Nazario", Email = "rnazario@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 9, FirstName = "Peter", LastName = "Parker", Email = "pparker@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 10, FirstName = "Felicia", LastName = "Hardy", Email = "fhardy@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 11, FirstName = "Jean", LastName = "Grey", Email = "jgrey@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 12, FirstName = "Jubilation", LastName = "Lee", Email = "jlee@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 13, FirstName = "Sue", LastName = "Storm", Email = "sstorm@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 14, FirstName = "Serena", LastName = "Williams", Email = "swilliams@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 15, FirstName = "Rafael", LastName = "Nadal", Email = "rnadal@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 16, FirstName = "Carlos", LastName = "Alcaraz", Email = "calcaraz@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 17, FirstName = "Michael", LastName = "Jordan", Email = "mjordan@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 18, FirstName = "Hugo", LastName = "Sanchez", Email = "hsanchez@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 19, FirstName = "Thierry", LastName = "Henry", Email = "thenry@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now },
                    new Customer { Id = 20, FirstName = "Sergio", LastName = "Busquets", Email = "sbusquets@gmail.com", Created = DateTime.Now, LastUpdated = DateTime.Now }
                };

                customersContext.Customers.AddRange(customers);
                customersContext.SaveChanges();
            }
        }
    }
}
