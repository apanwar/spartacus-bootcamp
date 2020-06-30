import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentPageMetaResolver, PageMetaResolver } from '@spartacus/core';
import { CustomContentPageMetaResolver } from './custom.contewnt-page-meta.resolver';
import { LoginPageMetaResolver } from './login-meta.resolver';

@NgModule({
  providers: [
    {
      provide: ContentPageMetaResolver,
      useClass: CustomContentPageMetaResolver,
    },
    {
      provide: PageMetaResolver,
      useExisting: LoginPageMetaResolver,
      multi: true,
    },
  ],
  declarations: [],
  imports: [CommonModule],
})
export class BootcampSeoModule {}
