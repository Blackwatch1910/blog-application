import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allBlogs = [
    {
      blogId: '1',
      lastModified: '2017-10-20',
      created: '2017-10-20',
      tags: [],
      author: 'Admin1',
      isPublished: true,
      views: 0,
      bodyHtml: 'this is long body',
      description: 'this is blog 1 description',
      title: 'This is blog 1'
    },
    {
      blogId: '2',
      lastModified: '2018-10-20',
      created: '2018-10-20',
      tags: [],
      author: 'Admin2',
      isPublished: true,
      views: 1,
      bodyHtml: 'this is long body',
      description: 'this is blog 2 description',
      title: 'This is blog 2'
    },
    {
      blogId: '3',
      lastModified: '2019-10-20',
      created: '2019-10-20',
      tags: [],
      author: 'Admin3',
      isPublished: true,
      views: 0,
      bodyHtml: 'this is long body',
      description: 'this is blog 3 description',
      title: 'This is blog 3'
    }
  ];

  constructor() {
    console.log('Service component called');
  }

  public getAllBlogs(): any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any {

    for (const blog of this.allBlogs) {
      if (blog.blogId === currentBlogId) {
        this.currentBlog = blog;
      }
    }
    console.log(this.currentBlog);
    return this.currentBlog;
  }
}
