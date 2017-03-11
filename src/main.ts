import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'

export function main (): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err))
}

main()

// bootloader(main)
