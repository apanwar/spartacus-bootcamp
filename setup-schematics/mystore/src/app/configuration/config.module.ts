import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Config, ConfigModule } from '@spartacus/core';
import { defaultThemeConfig } from './default-theme-config';
import { ThemeConfig } from './theme.config';

export function getDemoThemeConfigFactory(config: ThemeConfig) {
  return (): Promise<any> => {
    console.log('Custom theme configured:' + config.theme);
    return null;
  };
}

@NgModule({
  declarations: [],
  imports: [ConfigModule.withConfig(defaultThemeConfig)],
  providers: [
    { provide: ThemeConfig, useExisting: Config },
    {
      provide: APP_INITIALIZER,
      useFactory: getDemoThemeConfigFactory,
      deps: [Config],
      multi: true,
    },
  ],
})
export class MyfeatureModule {}
