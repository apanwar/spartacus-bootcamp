import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActiveCartService, OrderEntry, Product } from '@spartacus/core';
import {
  CurrentProductService,
  ProductDetailOutlets,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-outlets-component',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OutletComponent {
  outlets = ProductDetailOutlets;

  constructor(
    private currentProductService: CurrentProductService,
    private cartService: ActiveCartService
  ) {}

  private product$: Observable<
    Product
  > = this.currentProductService.getProduct().pipe(filter(Boolean));

  quantity$: Observable<number> = this.product$
    .pipe(
      switchMap((product: Product) => this.cartService.getEntry(product.code)),
      filter(Boolean)
    )
    .pipe(map((cartEntry: OrderEntry) => cartEntry.quantity));

  hasBrand(brand: string): Observable<boolean> {
    return this.product$.pipe(
      map(
        (p) =>
          !!p.categories.find(
            (c) => c.name.toLowerCase() === brand.toLowerCase()
          )
      )
    );
  }
}
