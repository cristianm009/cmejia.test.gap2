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
        [Route("api/Policy/Index")]
        public IEnumerable<Policy> Index()
        {
            return objpolicy.GetAllPolicy();
        }

        [HttpPost]
        [Route("api/Policy/Create")]
        public int Create([FromBody] Policy policy)
        {
            return objpolicy.AddPolicy(policy);
        }

        [HttpGet]
        [Route("api/Policy/Details/{id}")]
        public Policy Details(int id)
        {
            return objpolicy.GetPolicyData(id);
        }

        [HttpPut]
        [Route("api/Policy/Edit")]
        public int Edit([FromBody]Policy Policy)
        {
            return objpolicy.UpdatePolicy(Policy);
        }

        [HttpDelete]
        [Route("api/Policy/Delete/{id}")]
        public int Delete(int id)
        {
            return objpolicy.DeletePolicy(id);
        }

        [HttpGet]
        [Route("api/Policy/GetTypeRisk")]
        public IEnumerable<TypeRisk> TypeRiskDetails()
        {
            return objpolicy.GetTypeRisks();
        }

        [HttpGet]
        [Route("api/Policy/GetTypeCovering")]
        public IEnumerable<TypeCovering> TypeCoveringDetails()
        {
            return objpolicy.GetTypeCoverings();
        }
    }
}
