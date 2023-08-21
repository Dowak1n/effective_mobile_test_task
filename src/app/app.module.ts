import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {AuthorizationComponent} from "./component/authorization/authorization.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RegistrationComponent} from "./component/registration/registration.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {HeaderComponent} from "./component/header/header.component";
import {InternalApiService} from "./shared/services/internalapi.service";
import {CurrencyDataApiService} from "./shared/services/currencyDataApi.service";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HomeComponent} from "./component/home/home.component";
import {ErrorMessageService} from "./shared/services/error-message.service";

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'authorization', component: AuthorizationComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'posts',  loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent, AuthorizationComponent, RegistrationComponent, HeaderComponent, HomeComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        RouterOutlet,
        RouterModule.forRoot(appRoutes),
        MatTableModule,
        HttpClientModule,
        MatProgressSpinnerModule,
    ],
  providers: [InternalApiService, CurrencyDataApiService, ErrorMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
