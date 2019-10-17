import { Component } from '@angular/core';
import { PolicyService } from '../services/policyservice.service';
import { Policy } from '../../models/policy';

@Component({
  selector: 'app-fetchpolicy',
  templateUrl: './fetchpolicy.component.html'
})

export class FetchPolicyComponent {
  public policyList: Policy[];

  constructor(private _PolicyService: PolicyService) {
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

