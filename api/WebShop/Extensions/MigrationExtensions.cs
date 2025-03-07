using Microsoft.EntityFrameworkCore;
using WebShop.Infrastructure;

namespace WebShop.Server.Extensions
{
    public static class MigrationExtensions
    {
        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using IServiceScope scope = app.ApplicationServices.CreateScope();

            using WebShopDbContext dbContext =
                scope.ServiceProvider.GetRequiredService<WebShopDbContext>();

            dbContext.Database.Migrate();
        }
    }
}
