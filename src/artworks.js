// prettier-ignore
const artworks = [
    {
        name: 'pepe',
        code: ['56BC58','56BC58','56BC58','56BC58','56BC58','56BC58','56BC58','000000','56BC58','56BC58','000000','010000','56BC58','000000','010000','000000','56BC58','56BC58','56BC58','56BC58','56BC58','56BC58','56BC58','000000','4663ce','56BC58','ff0000','ff0000','ff0000','ff0000','ff0000','000000','4663ce','56BC58','56BC58','56BC58','56BC58','56BC58','000000','000000']
    },
    {
        name: 'rainbow',
        code: ['ff0000','ff0000','ff0000','ff0000','ff0000','ff0000','ff0000','ff0000','ffa270','ffa270','ffa270','ffa270','ffa270','ffa270','ffa270','ffa270','fdff70','fdff70','fdff70','fdff70','fdff70','fdff70','fdff70','fdff70','04db00','04db00','04db00','04db00','04db00','04db00','04db00','04db00','4ca4f0','4ca4f0','4ca4f0','4ca4f0','4ca4f0','4ca4f0','4ca4f0','4ca4f0']
    },
    {
        name: 'heart',
        code: ['010000','010000','ff0033','ff0033','010000','ff0033','ff0033','010000','010000','ff0033','ff0033','ff0033','ff0033','ff0033','ff0033','ff0033','010000','010000','ff0033','ff0033','ff0033','ff0033','ff0033','010000','ff0033','010000','010000','ff0033','ff0033','ff0033','010000','010000','ff0033','ff0033','010000','010000','ff0033','010000','010000','ff0033']
    }
]

export const getRandomArtwork = () => {
  const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
  const cells = randomArtwork.code.map((c) => ({
    on: c !== '000000',
    color: `#${c}`,
  }));
  return cells;
};
