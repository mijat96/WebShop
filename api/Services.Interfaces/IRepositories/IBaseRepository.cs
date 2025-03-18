namespace Services.Interfaces.IRepositories
{
    public interface IBaseRepository<T>
    {
        Task<T> Create(T newItem);
        Task<IEnumerable<T>> Search(string searchTerm, int numberOfResults);
        Task<T> GetSingle(int id);
    }
}
