import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from '../services/policyservice.service';
import { TypeRisk } from '../../models/typeRisk';
import { TypeCovering } from '../../models/typeCovering';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html'
})

export class AddPolicyComponent implements OnInit {

  policyForm: FormGroup;
  title: string = "Create";
  policyId: number;
  errorMessage: any;
  typeRiskList: Array<any> =[];
  typeCoveringList: Array<any> =[];

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _policyService: PolicyService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.policyId = this._avRoute.snapshot.params["id"];
    }

    this.policyForm = this._fb.group({
      policyId: 0,
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      startVadilityTime: ['', [Validators.required]],
      coveragetime: ['', [Validators.required]],
      price: ['', [Validators.required]],
      typeRisk: ['', [Validators.required]],
      typeCovering: ['', [Validators.required]]
    })
  }

  ngOnInit() {

    this._policyService.getTypeRisk().subscribe(
      data => this.typeRiskList = data  
    );

    this._policyService.getTypeCovering().subscribe(
      data => this.typeCoveringList = data  
    );

    if (this.policyId > 0) {
      this.title = "Edit";
      this._policyService.getPolicyById(this.policyId)
        .subscribe(resp => this.policyForm.setValue(resp)
          , error => this.errorMessage = error);
    }

  }

  save() {

    if (!this.policyForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._policyService.savePolicy(this.policyForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-policy']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._policyService.updatePolicy(this.policyForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-policy']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-policy']);
  }

  get name() { return this.policyForm.get('name'); }
  get description() { return this.policyForm.get('description'); }
  get startVadilityTime() { return this.policyForm.get('startVadilityTime'); }
  get coveragetime() { return this.policyForm.get('coveragetime'); }
  get price() { return this.policyForm.get('price'); }
  get typeRisk() { return this.policyForm.get('typeRisk'); }
  get typeCovering() { return this.policyForm.get('typeCovering'); }
}
