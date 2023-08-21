import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../../shared/services/post.service";
import { Post } from "../../../../shared/model/posts.model";


@Component({
  selector: 'post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})

export class PostComponent implements OnInit{
  post: Post;
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.postService.getPostById(Number(id)).subscribe((data) => {
        this.post = data;
        this.isLoading = false;
      });
    }
  }
}
