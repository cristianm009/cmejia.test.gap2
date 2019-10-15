using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace cmejia.test.gap2.Models
{
    public class PolicyDataAccessLayer
    {
        dbtestcmgapContext db = new dbtestcmgapContext();

        public IEnumerable<Policy> GetAllPolicies()
        {
            try
            {
                return db.Policy.ToList();
            }
            catch
            {
                throw;
            }
        }
        public int AddPolicy(Policy policy)
        {
            try
            {
                db.Policy.Add(policy);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        public int UpdatePolicy(Policy policy)
        {
            try
            {
                db.Entry(policy).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public Policy GetPolicyData(int id)
        {
            try
            {
                Policy policy = db.Policy.Find(id);
                return policy;
            }
            catch
            {
                throw;
            }
        }

        public int DeletePolicy(int id)
        {
            try
            {
                Policy policy = db.Policy.Find(id);
                db.Policy.Remove(policy);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        public List<TypeRisk> GetTypeRisks()
        {
            List<TypeRisk> lstTypeRisk = new List<TypeRisk>();
            lstTypeRisk = (from TypeRiskList in db.TypeRisk select TypeRiskList).ToList();

            return lstTypeRisk;
        }

        public List<TypeCovering> GetTypeCovering()
        {
            List<TypeCovering> lstTypeCovering = new List<TypeCovering>();
            lstTypeCovering = (from TypeCoveringList in db.TypeCovering select TypeCoveringList).ToList();

            return lstTypeCovering;
        }
    }

}
