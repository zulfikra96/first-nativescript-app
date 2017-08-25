import { CreateComponent } from './components/create/create.component'
import { ListComponent } from './components/list/list.component'

export const Routes: any = [
    {path:'', component:CreateComponent},
    {path:'list', component:ListComponent}
]

export const Components: any = [
    CreateComponent,
    ListComponent
]