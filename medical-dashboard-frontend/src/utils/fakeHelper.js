import { faker } from '@faker-js/faker';

function random_chinese_name() {
  function random(a, l) {
    const x = [];
    x.push(a[Math.ceil(Math.random() * a.length)]);
    while (l > 1) {
      x.push(a[Math.ceil(Math.random() * a.length)]);
      l--;
    }
    return x.join('');
  }

  return (
    random(
      '李 王 張 劉 陳 楊 黃 趙 周 吳 徐 孫 朱 馬 胡 郭 林 何 高 梁 鄭 羅 宋 謝 唐 韓 曹 許 鄧 蕭 馮 曾 程 蔡 彭 潘 袁 於 董 餘 蘇 葉 呂 魏 蔣 田 杜 丁 沈 姜 範 江 傅 鐘 盧 汪 戴 崔 任 陸 廖 姚 方 金 邱 夏 譚 韋 賈 鄒 石 熊 孟 秦 閻 薛 侯 雷 白 龍 段 郝 孔 邵 史 毛 常 萬 顧 賴 武 康 賀 嚴 尹 錢 施 牛 洪 龔'.split(
        ' '
      )
    ) +
    random(
      '世 中 仁 伶 佩 佳 俊 信 倫 偉 傑 儀 元 冠 凱 君 哲 嘉 國 士 如 娟 婷 子 孟 宇 安 宏 宗 宜 家 建 弘 強 彥 彬 德 心 志 忠 怡 惠 慧 慶 憲 成 政 敏 文 昌 明 智 曉 柏 榮 欣 正 民 永 淑 玉 玲 珊 珍 珮 琪 瑋 瑜 瑞 瑩 盈 真 祥 秀 秋 穎 立 維 美 翔 翰 聖 育 良 芬 芳 英 菁 華 萍 蓉 裕 豪 貞 賢 郁 鈴 銘 雅 雯 霖 青 靜 韻 鴻 麗 龍'.split(
        ' '
      ),
      Math.ceil(Math.random() * 2)
    )
  );
}

const getFakeNumber = (min, max) => {
  return faker.number.int({ min, max });
};

const getFakeWard = () => {
  return new Array(getFakeNumber(5, 20)).fill('').map(() => {
    const wardNum = getFakeNumber(1, 99);
    const firstName = random_chinese_name()[0];

    return {
      wardNum,
      firstName,
    };
  });
};

export const getFakeBasicItem = (item) => {
  const dataArr = [
    { head: '2/日', wards: getFakeWard() },
    { head: '3/日', wards: getFakeWard() },
    { head: '4/日', wards: getFakeWard() },
    { head: '6/日', wards: getFakeWard() },
    { head: '8/日', wards: getFakeWard() },
  ];

  return {
    item,
    data: dataArr,
  };
};