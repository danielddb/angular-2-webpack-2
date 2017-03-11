import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { RouterStoreModule } from '@ngrx/router-store'

import { routing } from './app.routes'
import { reducer } from './reducers'
import { AppComponent } from './app.component'
import { CounterComponent } from './components'
import { LoginContainer } from './containers'
import '@/theme/styles.styl'

@NgModule({
  imports: [
    BrowserModule,
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
    LoginContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
