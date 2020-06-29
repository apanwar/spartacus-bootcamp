import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConverterService, Product, PRODUCT_NORMALIZER } from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BestBuyProductAdapter {
  constructor(
    protected http: HttpClient,
    protected converter: ConverterService
  ) {}

  /** Method whic h makes a call to best buy for the product details with a hard coded product id.
   * This can be made dynamic using a dynamic id in a real world implementation.
   */

  load(productCode: string): Observable<Product> {
    return this.http
      .get(
        // tslint:disable-next-line: max-line-length
        `https://api.bestbuy.com/v1/products/6202761.json?show=sku,name,customerReviewAverage,customerReviewCount,regularPrice,salePrice,image,thumbnailImage,details,features.feature,onlineAvailability,description,longDescriptionHtml,categoryPath&apiKey=GIJ1DzoNuPuAoKjFJmqfJuDa`
      ) // tslint:disable-line
      .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
  }
}
