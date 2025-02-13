using WebShop.Domain.Enums;

namespace WebShop.Domain.Models
{
    public class Order : BaseType
    {
        public int CompanyId { get; set; }
        public long OrderNumber { get; set; }
        public string CustomerName { get; set; }
        public DateTime Date { get; set; }
        public double Price { get; set; }
        public OrderStatus Status { get; set; }
        public IEnumerable<OrderItem> OrderItems { get; set; }
        public DeliveryType DeliveryType { get; set; }
        public string CustomerAddress { get; set; }

    }
}
