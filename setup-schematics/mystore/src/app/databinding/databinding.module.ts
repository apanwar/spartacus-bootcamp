import { NgModule } from '@angular/core';
import { ProductAdapter, PRODUCT_NORMALIZER } from '@spartacus/core';
import { BestBuyProductAdapter } from './product.adapter';
import { BestBuyProductNormalizer } from './product.converter';

@NgModule({
  providers: [
    {
      provide: ProductAdapter,
      useExisting: BestBuyProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: BestBuyProductNormalizer,
      multi: true,
    },
  ],
})
export class DatabindingModule {}
