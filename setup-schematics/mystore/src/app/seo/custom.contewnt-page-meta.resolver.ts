import { Injectable } from '@angular/core';
import {
  CmsParagraphComponent,
  ContentPageMetaResolver,
  ContentSlotData,
  Page,
  PageDescriptionResolver,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomContentPageMetaResolver extends ContentPageMetaResolver
  implements PageDescriptionResolver {
  resolveDescription(): Observable<string> {
    return this.cms.getCurrentPage().pipe(
      map((page) => this.getFirstContentComponent(page)),
      switchMap((compUid) => this.cms.getComponentData(compUid)),
      map((paragraph: CmsParagraphComponent) => paragraph.content)
    );
  }

  private getFirstContentComponent(page: Page): string {
    if (!page) {
      return null;
    }

    const firstSlot = Object.keys(page.slots).find((uid) => {
      return (
        (page.slots[uid] as ContentSlotData).components &&
        !!(page.slots[uid] as ContentSlotData).components.find((c) => {
          return c.typeCode === 'CMSParagraphComponent';
        })
      );
    });

    return firstSlot
      ? (page.slots[firstSlot] as ContentSlotData).components.find((c) => {
          return c.typeCode === 'CMSParagraphComponent';
        }).uid
      : null;
  }
}
