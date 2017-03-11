import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory'

enableProdMode()

export function main (): Promise<any> {
  return platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory)
    .catch((err) => console.error(err))
}

export function bootstrapDomReady () {
  document.addEventListener('DOMContentLoaded', main)
}

bootstrapDomReady()
