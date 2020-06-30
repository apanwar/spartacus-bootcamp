import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { CustomStaticRouteComponent } from './custom-static-route.component';
import { staticRoutes } from './custom-static-routes';
import { CustomProductRoutesModule } from './product-routes.module';

@NgModule({
  imports: [
    UrlModule,

    RouterModule.forChild(staticRoutes),
    CustomProductRoutesModule,
  ],
  declarations: [CustomStaticRouteComponent],
  exports: [RouterModule],
})
export class BootcampRoutingModule {}
