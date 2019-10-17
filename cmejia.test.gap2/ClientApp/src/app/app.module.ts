import { BrowserModule } from '@angular/platform-browser';
import { PolicyService } from './services/policyservice.service'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { FetchPolicyComponent } from './fetchpolicy/fetchpolicy.component';
import { AddPolicyComponent } from './addpolicy/addpolicy.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchPolicyComponent,
    AddPolicyComponent, 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'fetch-policy', component: FetchPolicyComponent },
      { path: 'register-policy', component: AddPolicyComponent },
      { path: 'policy/edit/:id', component: AddPolicyComponent },
      { path: '**', redirectTo: 'home' }  
    ])
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
