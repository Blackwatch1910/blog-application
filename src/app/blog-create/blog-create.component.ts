import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})

export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService) {

    public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Drama', 'Action', 'Technology'];
}

ngOnInit() {

}

  public createBlog(): any {

  let blogData = {

    title: this.blogTitle,
    description: this.Blogdescription,
    blogBody: this.blogBodyHtml,
    category: this.blogCategory
  }; // end blog data

  console.log(blogData);

  this.blogHttpService.createBlog(blogData).subscribe(

    data => {
      console.log('Blog created');
      console.log(data);
      alert('blog created successfully');
    },

    error => {
      console.log('some error occurred');

    }
  )
}



}
