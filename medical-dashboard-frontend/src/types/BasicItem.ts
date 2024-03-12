import WardItem from './WardItem';

export default class {
  head: string;
  wards: WardItem[];

  constructor(head: string, wards: WardItem[]) {
    this.head = head;
    this.wards = wards;
  }
}
