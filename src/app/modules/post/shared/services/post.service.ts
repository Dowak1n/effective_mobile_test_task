import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ApiService } from '../../../../shared/services/api.service'
import { Observable } from 'rxjs'
import { Post } from "../../../../shared/model/posts.model";

@Injectable()
export class PostService extends ApiService {
  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/')
  }

  getPosts(): Observable<Post[]> {
    return this.get<Post[]>('posts')
  }

  getPostById(id: number): Observable<Post> {
    return this.get<Post>(`posts/${id}`)
  }
}
