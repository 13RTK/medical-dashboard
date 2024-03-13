import type BasicInfo from '@/types/BasicInfo';

import { getFakeBasicInfo } from '@/utils/fakeHelper';

const demo = [
  {
    item: '血压',
    data: [
      {
        head: '2/日',
        wards: [
          '17(李)',
          '29(刘)',
          '34(魏)',
          '28(张)',
          '19(王)',
          '58(杨)',
          '88(陈)',
          '99(赵)',
          '56(吴)',
        ],
      },
      { head: '3/日', wards: ['17(李)', '29(刘)'] },
      { head: '4/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '6/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '8/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
    ],
  },

  {
    item: '血糖',
    data: [
      {
        head: '2/日',
        wards: [
          '17(李)',
          '29(刘)',
          '34(魏)',
          '28(张)',
          '19(王)',
          '58(杨)',
          '88(陈)',
          '99(赵)',
          '56(吴)',
        ],
      },
      { head: '3/日', wards: ['17(李)', '29(刘)'] },
      { head: '4/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '6/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '8/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
    ],
  },

  {
    item: '雾化',
    data: [
      {
        head: '2/日',
        wards: [
          '17(李)',
          '29(刘)',
          '34(魏)',
          '28(张)',
          '19(王)',
          '58(杨)',
          '88(陈)',
          '99(赵)',
          '56(吴)',
        ],
      },
      { head: '3/日', wards: ['17(李)', '29(刘)'] },
      { head: '4/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '6/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '8/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
    ],
  },

  {
    item: '体温',
    data: [
      {
        head: '2/日',
        wards: [
          '17(李)',
          '29(刘)',
          '34(魏)',
          '28(张)',
          '19(王)',
          '58(杨)',
          '88(陈)',
          '99(赵)',
          '56(吴)',
        ],
      },
      { head: '3/日', wards: ['17(李)', '29(刘)'] },
      { head: '4/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '6/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
      { head: '8/日', wards: ['17(李)', '29(刘)', '34(魏)'] },
    ],
  },
];

// TODO: Fetch from /home?basicInfo={value}
export const getBasicInfo = (item: string): BasicInfo => {
  const fakeBasicItem = getFakeBasicInfo(item);

  console.log(fakeBasicItem);

  return fakeBasicItem;
};
