import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AccountAgencyComponent } from './agency/account-agency/account-agency.component';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './common/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './security/pages/sign-in/sign-in.component';
import { AuthService } from './security/service/auth.service';
import { ChangePasswordComponent } from './agency/change-password/change-password.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SignUpTouristComponent } from './security/pages/sign-up/tourist/sign-up-tourist/sign-up-tourist.component';
import { SignUpAgencyComponent } from './security/pages/sign-up/agency/sign-up-agency/sign-up-agency.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ForgotPasswordComponent } from './security/pages/forgot-password/forgot-password.component';
import { UpgradePlansComponent } from './agency/upgrade-plans/upgrade-plans.component';
import { SearchComponent } from './common/search/search.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { PaymentDetailsComponent } from './agency/payment-details/payment-details.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AddServiceComponent } from './agency/agency-service/pages/add-service-form/add-service.component';
import { ServiceDetailsComponent } from './agency/agency-service/pages/service-details/service-details.component';
import { RequestAgencyComponent } from './agency/request-agency/request-agency.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MyServicesComponent } from './agency/my-services/my-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountAgencyComponent,
    HomeComponent,
    AccountComponent,
    SignInComponent,
    SignUpTouristComponent,
    SignUpAgencyComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    UpgradePlansComponent,
    SearchComponent,
    PaymentDetailsComponent,
    PageNotFoundComponent,
    AddServiceComponent,
    ServiceDetailsComponent,
    RequestAgencyComponent,
    MyServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
  ],
  providers: [AuthService, MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
