const pages = (() => {
  const retObj = {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      description: "Nouns Art Festival (NounsFes) is an online art festival with a purpose to promote a peaceful and sustainable world, founded by members of NounsDAO.",
    },
    indexja: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: `index-ja.html`,
      description: "ナウンズ・アート・フェスティバル (ナウンズフェス) は、平和で維持可能な地球の大切さを 一人でも多くの人に知ってもらうことを目的に、NounsDAO のメンバーによって作られた、オンライン・アート・フェスティバルです。",
    }
  };
  return retObj;
})();

module.exports = {
  pages,
};
