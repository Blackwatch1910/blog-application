import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  constructor(private route: ActivatedRoute, private router: Router, public blogHttpService: BlogHttpService) {
    console.log('Constructor Called');
    // console.log('Route value:' + route);
    // console.log('Router value:' + Router);
   }

  ngOnInit() {
    console.log('ngOnInit called');
    const myBlogId = this.route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data.data;
      },
      error => {
        console.log('some error occurred');
        console.log(error.errorMessage);
      }
    );

  }

}
