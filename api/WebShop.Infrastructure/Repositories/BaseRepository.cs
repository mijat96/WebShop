using Microsoft.EntityFrameworkCore;
using Services.Interfaces.IRepositories;
using WebShop.Domain;

namespace WebShop.Infrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseType
    {
        public WebShopDbContext _context { get; set; }

        protected DbSet<T> Items => _context.Set<T>();

        public BaseRepository(WebShopDbContext context)
        {
            _context = context;
        }

        public async Task<T> Create(T item)
        {
            await Items.AddAsync(item);
            await _context.SaveChangesAsync();

            return item;
        }

        public async Task<T> GetSingle(int id)
        {
            return await Items.FirstAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<T>> Search(string searchTerm, int numberOfResults)
        {
            var result = await Items
                    .Where(item => item.Name.Contains(searchTerm ?? ""))
                    .OrderBy(item => item.CreationTimestamp)
                    .Take(numberOfResults).ToListAsync();

            return result;
        }
    }
}
