import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

 // router model used for setting up the app level route
import {RouterModule, Routes} from '@angular/router';

// using ng -g createComponent
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

// import service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';

// decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    NotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // to import routes
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'about', component: AboutComponent},
      {path: 'blog/:blogId', component: BlogViewComponent},
      {path: 'create', component: BlogCreateComponent},
      {path: 'edit/:blogId', component: BlogEditComponent},
      {path: '**', component: NotFoundComponent},
    ]),
    // till here
    AppRoutingModule
  ],
  providers: [BlogService, BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
