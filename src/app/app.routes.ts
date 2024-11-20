import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderComponent } from './pages/order/order.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Burguer Mania'
    },
    {
        path: 'menu/:category',
        component: MenuComponent,
        title: 'Cardápio'
    },
    {
        path: 'order',
        component: OrderComponent,
        title: 'Fazer pedido'
    },
    {
        path: 'hamburger/:id',
        component: DetailComponent,
        title: 'Hambúrguer'
    },
    {
        path: 'categories',
        component: CategoryComponent,
        title: 'Categorias'
    },
    {
        path: '**',
        component: NotfoundComponent,
        title: 'Página não encontrada'
    }
];
