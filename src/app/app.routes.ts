import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginContainer } from './containers'
import { CounterComponent, MixedChartComponent } from './components'

const routes: Routes = [
  { path: 'mixed-chart', component: MixedChartComponent },
  { path: 'login', component: LoginContainer },
  { path: 'counter', component: CounterComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
