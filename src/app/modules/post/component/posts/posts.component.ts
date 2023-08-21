import {Component, OnInit} from '@angular/core';
import {CurrencyDataApiService} from "../../../../shared/services/currencyDataApi.service";
import {Post} from "../../../../shared/model/posts.model";

@Component({
  selector: 'posts-component',
  templateUrl: './posts.component.html',
})

export class PostsComponent implements OnInit{
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private currencyApi: CurrencyDataApiService) {}

  ngOnInit() {
    this.currencyApi.getPosts().subscribe((data) => {
      this.posts = data;
      this.isLoading = false;
    });
  }

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  protected readonly String = String;
}
