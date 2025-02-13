using WebShop.Domain.Enums;

namespace WebShop.Domain.Models
{
    public class Company : BaseType
    {
        public string ExternalId { get; set; }
        public string Surname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string PostCode { get; set; }
        public DeliveryType DeliveryType { get; set; }
    }
}
