namespace WebShop.Domain
{
    public abstract class BaseType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        //public Guid CreatorId { get; set; }
        public DateTime CreationTimestamp { get; set; }
    }
}
