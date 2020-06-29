import { NgModule } from '@angular/core';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: null,
      },
    } as LayoutConfig),

    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
          slots: [
            'Section1',
            'Section2A',
            'Section2B',
            'Section2C',
            'Section3',
            'Section4',
            'Section5',
          ],
        },
      },
    } as LayoutConfig),
  ],
})
export class BootcampLayoutConfigModule {}
