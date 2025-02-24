using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebShop.Domain.Models;

namespace WebShop.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection RegisterSqlDataAccess(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<WebShopDbContext>(builder =>
            {
                var connectionString = configuration["ConnectionStrings:DefaultConnection"];
                builder.UseSqlServer(connectionString);
            });

            return RegisterRepositories(services);
        }

        private static IServiceCollection RegisterRepositories(this IServiceCollection services)
        {
            //services.AddScoped<,>();

            return services;
        }
    }
}
