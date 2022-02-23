import { PAGE_LIST } from '../const';

export type TPageListKeys = keyof typeof PAGE_LIST;

export type TPageList = typeof PAGE_LIST[TPageListKeys];
