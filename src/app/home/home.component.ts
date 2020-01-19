import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs: any;

  constructor(public blogHttpService: BlogHttpService) {
    console.log('Home component constructor called');
  }

  ngOnInit() {
    console.log('Home component onInit called');
    // this.allBlogs = this.blogHttpService.getAllBlogs();
    // this.allBlogs = this.blogService.getAllBlogs();
    // console.log(this.allBlogs);

    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

      data => {
        console.log('data logged in');
        console.log(data);  // has every blog
        this.allBlogs = data.data;
      },
      error => {
        console.log('error occurred');
        console.log(error.errorMessage);
      }
    );
  }

  ngOnDestroy() {
    console.log('Home component destroyed');
  }

}
