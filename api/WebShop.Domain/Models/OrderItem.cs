using WebShop.Domain.Enums;

namespace WebShop.Domain.Models
{
    public class OrderItem : BaseType
    {
        public double Quantity { get; set; }
        public Unit Unit { get; set; }
        public double Price { get; set; }
    }
}
