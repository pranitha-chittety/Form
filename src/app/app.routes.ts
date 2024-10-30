import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        // loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
        loadChildren: () => import('./components/todo-list/todo-list.module').then(m => m.TodoListModule)
    }
];
