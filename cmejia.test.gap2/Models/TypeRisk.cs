using System;
using System.Collections.Generic;

namespace cmejia.test.gap2.Models
{
    public partial class TypeRisk
    {
        public TypeRisk()
        {
            Policy = new HashSet<Policy>();
        }

        public int TypeRiskId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Policy> Policy { get; set; }
    }
}
