import type BasicItem from './BasicItem';

export default class {
  item: string;
  basicItems: BasicItem[];

  constructor(item: string, basicItems: BasicItem[]) {
    this.item = item;
    this.basicItems = basicItems;
  }
}
