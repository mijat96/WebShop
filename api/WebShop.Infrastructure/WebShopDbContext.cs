
using Microsoft.EntityFrameworkCore;
using WebShop.Domain.Models;

namespace WebShop.Infrastructure
{
    public class WebShopDbContext : DbContext
    {
        public WebShopDbContext(DbContextOptions<WebShopDbContext> options) : base(options) { }
        public DbSet<Company> Company { get; set; }
        public DbSet<Group> Group { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<User> User { get; set; }
    }
}
