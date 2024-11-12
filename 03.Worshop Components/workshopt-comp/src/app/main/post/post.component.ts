import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  posts: Post[]= [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((posts)=> {
      this.posts = posts;

    })
  }

}
