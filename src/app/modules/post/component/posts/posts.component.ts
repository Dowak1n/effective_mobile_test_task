import { Component, OnInit } from '@angular/core';
import { PostService } from "../../shared/services/post.service";
import { Post } from "../../../../shared/model/posts.model";

@Component({
  selector: 'posts-component',
  templateUrl: './posts.component.html',
})

export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.isLoading = false;
    });
  }
}
