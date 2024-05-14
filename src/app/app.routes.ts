import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        title: 'List',
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create',
    },
    {
        //:tenParam
        path: 'detail/:user', 
        component: DetailComponent,
        title: 'Detail',
    },
    {
        path: 'edit',
        component: EditComponent,
        title: 'Edit',
    }

];
