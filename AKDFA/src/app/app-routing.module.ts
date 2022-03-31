import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageMainContentComponent } from './pages/home-page-main-content/home-page-main-content.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LattestNewsComponent } from './pages/lattest-news/lattest-news.component';
import { GovernamentOrdersComponent } from './pages/governament-orders/governament-orders.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: 'Home', component: HomePageComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'LattestNews', component: LattestNewsComponent },
  { path: 'GovernamentOrders', component: GovernamentOrdersComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Downloads', component: DownloadsComponent },
  { path: 'Contact', component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
