import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002/',
          prefix: '/occ/v2/',
        },
      },
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['apparel-uk-spa', 'electronics-spa'],
        language: ['en'],
        currency: ['GBP', 'USD'],
      },
      i18n: {
        chunks: translationChunksConfig,
        resources: translations,
        fallbackLang: 'en',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
