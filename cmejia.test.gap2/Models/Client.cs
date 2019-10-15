using System;
using System.Collections.Generic;

namespace cmejia.test.gap2.Models
{
    public partial class Client
    {
        public Client()
        {
            Policy = new HashSet<Policy>();
        }

        public int ClientId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Idnumber { get; set; }
        public DateTime? DateOfBirth { get; set; }

        public virtual ICollection<Policy> Policy { get; set; }
    }
}
