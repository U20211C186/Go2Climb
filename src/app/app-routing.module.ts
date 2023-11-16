import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { HomeComponent } from './common/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';
import { AddServiceComponent } from 'src/app/agency/agency-service/pages/add-service-form/add-service.component';
import { ServiceDetailsComponent } from 'src/app/agency/agency-service/pages/service-details/service-details.component';
import { ChangePasswordComponent } from './agency/change-password/change-password.component';
import { UpgradePlansComponent } from './agency/upgrade-plans/upgrade-plans.component';
import { SignUpTouristComponent } from './security/pages/sign-up/tourist/sign-up-tourist/sign-up-tourist.component';
import { SignUpAgencyComponent } from './security/pages/sign-up/agency/sign-up-agency/sign-up-agency.component';
import { ForgotPasswordComponent } from './security/pages/forgot-password/forgot-password.component';
import { SearchComponent } from './common/search/search.component';
import { PaymentDetailsComponent } from './agency/payment-details/payment-details.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { RequestAgencyComponent } from './agency/request-agency/request-agency.component';
import { MyServicesComponent } from './agency/my-services/my-services.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: SignInComponent },
  { path: 'sign-up-tourist', component: SignUpTouristComponent },
  { path: 'sign-up-agency', component: SignUpAgencyComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'my-services', component: MyServicesComponent},
  { path: 'account', component: AccountComponent },
  { path: 'account-agency', component: AccountAgencyComponent },
  { path: 'account-change-password', component: ChangePasswordComponent },
  { path: 'account-upgrade-plan', component: UpgradePlansComponent },
  { path: 'account-payment-details', component: PaymentDetailsComponent },
  { path: 'request', component: RequestAgencyComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'add-service/:id', component: AddServiceComponent },
  { path: 'service-detail/:id', component: ServiceDetailsComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
