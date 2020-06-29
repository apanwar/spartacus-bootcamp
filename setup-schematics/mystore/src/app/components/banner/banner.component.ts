import { Component } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './custom-banner.component.html',
})
export class CustomBannerComponent {
  constructor(private componentData: CmsComponentData<CmsBannerComponent>) {}

  data$: Observable<CmsBannerComponent> = this.componentData.data$;
}
