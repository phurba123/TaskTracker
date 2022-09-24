import {RouterModule, Routes} from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import {NgModule} from '@angular/core';

const routes:Routes = [
    {path:'', component:TasksComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class RoutingModule{};
