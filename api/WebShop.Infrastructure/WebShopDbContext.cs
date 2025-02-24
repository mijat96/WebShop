
using Microsoft.EntityFrameworkCore;
using WebShop.Domain.Models;

namespace WebShop.Infrastructure
{
    public class WebShopDbContext(DbContextOptions<WebShopDbContext> options) : DbContext(options)
    {
        public DbSet<Company> Company => Set<Company>();
        public DbSet<Group> Group => Set<Group>();
        public DbSet<Item> Item => Set<Item>();
        public DbSet<Order> Order => Set<Order>();
        public DbSet<OrderItem> OrderItem => Set<OrderItem>();
        public DbSet<User> User => Set<User>();
    }
}
