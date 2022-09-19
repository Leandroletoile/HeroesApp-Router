
export const getHeroesByPublishers = (publisher, heroes) => {


  return heroes.filter(hero => hero.publisher === publisher);
}
