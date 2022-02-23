import {filterByKey, sortChampions} from '../src/data.js';
const dataTest = [
  {
    name: "Aatrox",
    tags: ["Assassin", "Mage"]
  },
  {
    name: "Galio",
    tags: ["Fighter", "Marksman"]
  },
  {
    name: "Zyra",
    tags: ["Assassin", "Tank"]
  }
]

describe('Deberia filtrar por tags', () => {
  it("Deberia filtrar por Assassin", () => {
    const result = [
      {
        name: "Aatrox",
        tags: ["Assassin", "Mage"]
      },
      {
        name: "Zyra",
        tags: ["Assassin", "Tank"]
      }
    ]
    expect(filterByKey(dataTest, "Assassin")).toEqual(result)
  });
 it("Deberia filtrar por Marksman", () => {
   const result = [
    {
      name: "Galio",
      tags: ["Fighter", "Marksman"]
    }
   ]
    expect(filterByKey(dataTest, "Marksman")).toEqual(result)
  })
});


describe('Deberia ordenar por name', () => {
  it('Deberia ordenar de Z-A', () => {
    const result = sortChampions(dataTest)
    expect(result[0].name).toEqual("Zyra");
  });
});