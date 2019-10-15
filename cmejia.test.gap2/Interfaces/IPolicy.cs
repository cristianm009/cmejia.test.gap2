using cmejia.test.gap2.Models;
using System.Collections.Generic;

namespace cmejia.test.gap2.Interfaces
{
    public interface IPolicy
    {
        IEnumerable<Policy> GetAllPolicy();
        int AddPolicy(Policy employee);
        int UpdatePolicy(Policy employee);
        Policy GetPolicyData(int id);
        int DeletePolicy(int id);
        List<TypeRisk> GetTypeRisks();
        List<TypeCovering> GetTypeCoverings();
    }
}
