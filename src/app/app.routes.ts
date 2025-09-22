import { Routes } from '@angular/router';
import { Clasicos } from './features/clasicos/clasicos';
import { Experiencias} from './features/experiencias/experiencias';
import { Poncheras} from './features/poncheras/poncheras';
import { Calientes } from './features/calientes/calientes';
import { Promociones } from './features/promociones/promociones';

export const routes: Routes = [
    { path: 'clasicos', component: Clasicos },
    { path: 'experiencias', component: Experiencias },
    { path: 'poncheras', component: Poncheras },
    { path: 'calientes', component: Calientes },
    { path: 'promociones', component: Promociones},
    { path: '', redirectTo: '/clasicos', pathMatch: 'full' }, // Redirige a 'Clasicos' por defecto
];
