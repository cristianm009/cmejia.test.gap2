using System;
using System.Collections.Generic;

namespace cmejia.test.gap2.Models
{
    public partial class TypeCovering
    {
        public TypeCovering()
        {
            Policy = new HashSet<Policy>();
        }

        public int TypeCoveringId { get; set; }
        public string Name { get; set; }
        public string Descripcion { get; set; }
        public double? Percentage { get; set; }

        public virtual ICollection<Policy> Policy { get; set; }
    }
}
