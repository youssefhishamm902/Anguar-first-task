import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartframeworkComponent } from './startframework/startframework.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo:'startframework',pathMatch:'full'},
    { path: 'startframework', component: StartframeworkComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotfoundComponent }
    
    
];
