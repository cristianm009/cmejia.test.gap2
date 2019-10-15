import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchPolicyComponent } from '../fetchpolicy/fetchpolicy.component';
import { PolicyService } from '../../services/empservice.service';

@Component({
  templateUrl: './AddPolicy.component.html'
})

export class createpolicy implements OnInit {
  policyForm: FormGroup;
  title: string = "Create";
  policyId: number;
  errorMessage: any;
  typeRiskList: Array<any> = [];
  typeCoveringList: Array<any> = [];

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
    )
    this._policyService.getTypeCovering().subscribe(
      data => this.typeCoveringList = data
    )

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
  get description() { return this.typeRisk.get('description'); }
  get startVadilityTime() { return this.typeRisk.get('startVadilityTime'); }
  get coveragetime() { return this.typeRisk.get('coveragetime'); }
  get price() { return this.typeRisk.get('price'); }
  get typeRisk() { return this.typeRisk.get('typeRisk'); }
  get typeCovering() { return this.typeRisk.get('typeCovering'); }
}
