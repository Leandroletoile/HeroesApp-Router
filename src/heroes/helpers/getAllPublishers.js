
export const getAllPublishers = (heroes) => {

  return [...new Set(heroes.map((hero) => hero.publisher))].filter(

    (publisher) =>
      publisher !== null &&
      publisher !== ""

  ).sort();
};

