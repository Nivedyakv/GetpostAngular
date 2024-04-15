import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PostformComponent } from './postform/postform.component';
import { PutupdateComponent } from './putupdate/putupdate.component';
import { DeleteComponent } from './delete/delete.component';
import { PatchComponent } from './patch/patch.component';

export const routes: Routes = [
    {path:'',
        component:DetailsComponent
    },
    {
        path:'form',
        component:PostformComponent
    },
    {
        path:'update',
        component:PutupdateComponent
    },
    {
        path:'delete',
        component:DeleteComponent
    },
    {
        path:'patch',
        component:PatchComponent
    }
];
