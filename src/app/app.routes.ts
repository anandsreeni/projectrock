import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Apparels } from './apparels/apparels';
import { Carosel } from './carosel/carosel';
import { Products } from './products/products';
import { SingleviewList } from './singleview-list/singleview-list';
import { Contact } from './contact/contact';
export const routes: Routes = [{path:'',component:Home},{path:'apparels',component:Apparels},{path:'singleview-list/:titleid',component:SingleviewList},{path:'contact',component:Contact},{path:'products',component:Products}];

