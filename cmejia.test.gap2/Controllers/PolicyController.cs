using cmejia.test.gap2.DataAccess;
using cmejia.test.gap2.Interfaces;
using cmejia.test.gap2.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace cmejia.test.gap2.Controllers
{
    [Route("api/[controller]")]
    public class PolicyController : Controller
    {
        private readonly IPolicy objpolicy;

        public PolicyController(IPolicy objpolicy)
        {
            this.objpolicy = objpolicy;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Policy> Index()
        {
            return objpolicy.GetAllPolicy();
        }

        [HttpPost]
        [Route("Create")]
        public int Create(Policy policy)
        {
            if (policy != null)
                return objpolicy.AddPolicy(policy);
            else
                return 0;
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Policy Details(int id)
        {
            return objpolicy.GetPolicyData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]Policy Policy)
        {
            return objpolicy.UpdatePolicy(Policy);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objpolicy.DeletePolicy(id);
        }

        [HttpGet]
        [Route("GetTypeRisk")]
        public IEnumerable<TypeRisk> TypeRiskDetails()
        {
            return objpolicy.GetTypeRisks();
        }

        [HttpGet]
        [Route("GetTypeCovering")]
        public IEnumerable<TypeCovering> TypeCoveringDetails()
        {
            return objpolicy.GetTypeCoverings();
        }
    }
}
