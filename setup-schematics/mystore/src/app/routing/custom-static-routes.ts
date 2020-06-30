import { Routes } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { CustomStaticRouteComponent } from './custom-static-route.component';

export const staticRoutes: Routes = [
  {
    path: 'sale',
    component: CustomStaticRouteComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'demo/static/page',
    component: PageLayoutComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard],
  },
];
