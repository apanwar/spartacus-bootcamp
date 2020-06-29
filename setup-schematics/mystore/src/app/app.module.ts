import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { ConfigModule } from '@spartacus/core';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { BootcampComponentsModule } from './components/components.module';
import { MyfeatureModule } from './configuration/config.module';
import { Theme, ThemeConfig } from './configuration/theme.config';
import { BootcampI18nModule } from './i18n/i18n.module';
import { BootcampLayoutConfigModule } from './layout/layout.module';
import { BootcampOutletsModule } from './outlets/outlets.module';

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
        currency: ['USD', 'GBP'],
        language: ['en'],
        baseSite: ['electronics-spa', 'apparel-uk-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '2.0',
      },
    }),
    BrowserTransferStateModule,
    MyfeatureModule,
    BootcampLayoutConfigModule,
    ConfigModule.withConfig({ theme: Theme.STRAWBERRIES } as ThemeConfig),
    BootcampOutletsModule,
    // DatabindingModule,
    BootcampComponentsModule,
    BootcampI18nModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
