using System;
using System.Collections.Generic;

namespace cmejia.test.gap2.Models
{
    public partial class Policy
    {
        public int PolicyId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? StartVadilityTime { get; set; }
        public int? Coveragetime { get; set; }
        public double? Price { get; set; }
        public int ClientId { get; set; }
        public int TypeRiskId { get; set; }
        public int TypeCoveringId { get; set; }

        public virtual Client Client { get; set; }
        public virtual TypeCovering TypeCovering { get; set; }
        public virtual TypeRisk TypeRisk { get; set; }
    }
}
