using WebShop.Domain.Enums;

namespace WebShop.Domain.Models
{
    public class Item : BaseType
    {
        public int CompanyId { get; set; }
        public int GroupId { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
        public double Price { get; set; }
        public bool Highlited { get; set; }
        public double SaledPrice { get; set; }
        public bool Available { get; set; }
        public Unit Unit { get; set; }
    }
}
