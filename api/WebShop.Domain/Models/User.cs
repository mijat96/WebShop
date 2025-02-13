using WebShop.Domain.Enums;

namespace WebShop.Domain.Models
{
    public class User : BaseType
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Surname { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int CompanyId { get; set; }
        public Role Role { get; set; }
    }
}
