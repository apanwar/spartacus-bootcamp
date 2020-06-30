import {
  CmsPageConfig,
  CmsSearchBoxComponent,
  CmsStructureConfig,
  ContentSlotComponentData,
} from '@spartacus/core';

export const staticCMSComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  SearchBoxComponent: {
    typeCode: 'SearchBoxComponent',
    flexType: 'SearchBoxComponent',
    displayProducts: false,
    displaySuggestions: true,
    maxProduct: 5,
    displayProductimages: true,
  } as CmsSearchBoxComponent,
};

export const staticPages: CmsPageConfig[] = [
  {
    ignoreBackend: false,
    pageId: '/faq',
    template: 'ContentPage1Template',
    slots: {
      StaticSlot: {
        componentIds: ['SearchBoxComponent'],
      },
    },
  },
  {
    ignoreBackend: true,
    pageId: '/static/page',
    template: 'ContentPage1Template',
    slots: {
      StaticSlot: {
        componentIds: ['SearchBoxComponent'],
      },
    },
  },
];

export const staticCmsConfig: CmsStructureConfig = {
  cmsStructure: {
    components: {
      staticCMSComponents,
    },
    slots: {},
    pages: staticPages,
  },
};
