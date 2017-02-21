import {Routes, RouterModule} from "@angular/router";

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes=[
                          {path : 'footer',component: FooterComponent},
                          {path : '',component: HomeComponent},
                          
                                   
                                 
];

export const routing = RouterModule.forRoot(APP_ROUTES);