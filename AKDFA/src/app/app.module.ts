import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterPageComponent } from './pages/footer-page/footer-page.component';
import { HomePageMainContentComponent } from './pages/home-page-main-content/home-page-main-content.component';
import { NavHeaderComponent } from './pages/nav-header/nav-header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LattestNewsComponent } from './pages/lattest-news/lattest-news.component';
import { GovernamentOrdersComponent } from './pages/governament-orders/governament-orders.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FooterPageComponent,
    HomePageMainContentComponent,
    NavHeaderComponent,
    AboutUsComponent,
    LattestNewsComponent,
    GovernamentOrdersComponent,
    ProjectsComponent,
    DownloadsComponent,
    ContactComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
