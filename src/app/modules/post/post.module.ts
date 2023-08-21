import { NgModule } from '@angular/core';
import {PostsComponent} from "./component/posts/posts.component";
import {PostComponent} from "./component/item/post.component";
import {InternalApiService} from "../../shared/services/internalapi.service";
import {CurrencyDataApiService} from "../../shared/services/currencyDataApi.service";
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {AuthGuard} from "./shared/guards/posts.component.guard";

const PostRoutes: Routes =[
  { path: '', component: PostsComponent, canActivate: [AuthGuard]},
  { path: ':id', component: PostComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    NgIf,
    RouterModule.forChild(PostRoutes),
    RouterLink,
    MatButtonModule
  ],
  providers: [InternalApiService, CurrencyDataApiService],
})
export class PostModule { }
