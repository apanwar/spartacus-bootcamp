import { NgModule } from '@angular/core';
import { CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { layoutConfig } from './layout.config';
import { staticCmsConfig } from './static-cms.config';

@NgModule({
  imports: [
    ConfigModule.withConfig(staticCmsConfig as CmsStructureConfig),
    ConfigModule.withConfig(layoutConfig),
  ],
})
export class BootcampStaticcmsModule {}
