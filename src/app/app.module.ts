import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { RouterStoreModule } from '@ngrx/router-store'
import { ChartsModule } from 'ng2-charts'

import { routing } from './app.routes'
import { reducer } from './reducers'
import { AppComponent } from './app.component'
import { CounterComponent, MixedChartComponent } from './components'
import { LoginContainer } from './containers'

@NgModule({
  imports: [
    BrowserModule,
    ChartsModule,
    routing,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter()
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: [
    AppComponent,
    CounterComponent,
    LoginContainer,
    MixedChartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
