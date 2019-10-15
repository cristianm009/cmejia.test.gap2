import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PolicyService } from '../services/policyservice.service';
import { Policy } from '../../models/policy';

@Component({
  templateUrl: './fetchpolicy.component.html'
})

export class FetchPolicyComponent {
  public policyList: Policy[];

  constructor(public http: Http, private _router: Router, private _PolicyService: PolicyService) {
    this.getPolicys();
  }

  getPolicys() {
    this._PolicyService.getPolicys().subscribe(
      (data: Policy[]) => this.policyList = data
    )
  }

  delete(PolicyID) {
    var ans = confirm("Do you want to delete policy with Id: " + PolicyID);
    if (ans) {
      this._PolicyService.deletePolicy(PolicyID).subscribe((data) => {
        this.getPolicys();
      }, error => console.error(error))
    }
  }
}

interface PolicyData {
  policyId: number;
  name: string;
  description: string;
  startVadilityTime: Date;
  coveragetime: number;
  price: number;
  typeRisk: number;
  typeCovering: number;

}
