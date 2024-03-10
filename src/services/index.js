const dataRealeses = [
  {
    id: 10,
    imageUrl:
      'https://wallpapers.com/images/featured-full/avengers-vm16xv4a69smdauy.jpg',
    description: {
      name: 'Avengers',
      year: '2012',
      genre: 'Action',
      stars: '3'
    }
  },
  {
    id: 11,
    imageUrl:
      'https://wallpapers.com/images/high/spiderman-black-and-red-i1i2nmcafdcevpen.webp',
    description: {
      name: 'Spiderman',
      year: '2012',
      genre: 'Action',
      stars: '3'
    }
  },
  {
    id: 12,
    imageUrl:
      'https://wallpapers.com/images/high/the-100-television-series-p389841deayu6ky2.webp',
    description: {
      name: 'The 100',
      year: '2012',
      genre: 'Action',
      stars: '3'
    }
  }
];

const dataCategories = [
  {
    id: 1,
    category: 'Recomendadas para ti'
  },
  {
    id: 2,
    category: 'Seguir viendo'
  },
  {
    id: 3,
    category: 'Documentales'
  },
  {
    id: 4,
    category: 'Terror'
  },
  {
    id: 5,
    category: 'Anime'
  }
];

const categoryData = [
  {
    categoryId: 1,
    movies: [
      {
        id: 1,
        imageUrl:
          'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp',
        description: {
          name: 'Spiderman',
          year: '2017',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 2,
        imageUrl:
          'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp',
        description: {
          name: 'Superman',
          year: '2007',
          genre: 'Action',
          stars: '4'
        }
      },
      {
        id: 3,
        imageUrl:
          'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp',
        description: {
          name: 'Iron Man 1',
          year: '2018',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 4,
        imageUrl:
          'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp',
        description: {
          name: 'Capitan America',
          year: '2012',
          genre: 'Action',
          stars: '2'
        }
      },
      {
        id: 5,
        imageUrl:
          'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp',
        description: {
          name: 'Spiderman 2',
          year: '2012',
          genre: 'Action',
          stars: '3'
        }
      }
    ]
  },
  {
    categoryId: 2,
    movies: [
      {
        id: 6,
        imageUrl:
          'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp',
        description: {
          name: 'Spiderman',
          year: '2017',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 7,
        imageUrl:
          'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp',
        description: {
          name: 'Superman',
          year: '2007',
          genre: 'Action',
          stars: '4'
        }
      },
      {
        id: 8,
        imageUrl:
          'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp',
        description: {
          name: 'Iron Man 1',
          year: '2018',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 9,
        imageUrl:
          'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp',
        description: {
          name: 'Capitan America',
          year: '2012',
          genre: 'Action',
          stars: '2'
        }
      },
      {
        id: 10,
        imageUrl:
          'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp',
        description: {
          name: 'Spiderman 2',
          year: '2012',
          genre: 'Action',
          stars: '3'
        }
      }
    ]
  },
  {
    categoryId: 3,
    movies: [
      {
        id: 11,
        imageUrl:
          'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp',
        description: {
          name: 'Spiderman',
          year: '2017',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 12,
        imageUrl:
          'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp',
        description: {
          name: 'Superman',
          year: '2007',
          genre: 'Action',
          stars: '4'
        }
      },
      {
        id: 13,
        imageUrl:
          'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp',
        description: {
          name: 'Iron Man 1',
          year: '2018',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 14,
        imageUrl:
          'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp',
        description: {
          name: 'Capitan America',
          year: '2012',
          genre: 'Action',
          stars: '2'
        }
      },
      {
        id: 15,
        imageUrl:
          'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp',
        description: {
          name: 'Spiderman 2',
          year: '2012',
          genre: 'Action',
          stars: '3'
        }
      }
    ]
  },
  {
    categoryId: 4,
    movies: [
      {
        id: 21,
        imageUrl:
          'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp',
        description: {
          name: 'Spiderman',
          year: '2017',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 22,
        imageUrl:
          'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp',
        description: {
          name: 'Superman',
          year: '2007',
          genre: 'Action',
          stars: '4'
        }
      },
      {
        id: 23,
        imageUrl:
          'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp',
        description: {
          name: 'Iron Man 1',
          year: '2018',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 24,
        imageUrl:
          'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp',
        description: {
          name: 'Capitan America',
          year: '2012',
          genre: 'Action',
          stars: '2'
        }
      },
      {
        id: 25,
        imageUrl:
          'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp',
        description: {
          name: 'Spiderman 2',
          year: '2012',
          genre: 'Action',
          stars: '3'
        }
      }
    ]
  },
  {
    categoryId: 5,
    movies: [
      {
        id: 31,
        imageUrl:
          'https://wallpapers.com/images/high/spiderman-1366x768-dnkwrtg111y9d8hu.webp',
        description: {
          name: 'Spiderman',
          year: '2017',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 32,
        imageUrl:
          'https://wallpapers.com/images/high/image-man-of-steel-wallpaper-superman-34759958-1280-dc-ywtl7gk6azox6l96.webp',
        description: {
          name: 'Superman',
          year: '2007',
          genre: 'Action',
          stars: '4'
        }
      },
      {
        id: 44,
        imageUrl:
          'https://wallpapers.com/images/hd/iron-man-repulser-87jqqc12bkvqa38a.webp',
        description: {
          name: 'Iron Man 1',
          year: '2018',
          genre: 'Action',
          stars: '5'
        }
      },
      {
        id: 64,
        imageUrl:
          'https://wallpapers.com/images/high/captain-america-android-2560-x-1600-ke1dn4ni9e9lorxq.webp',
        description: {
          name: 'Capitan America',
          year: '2012',
          genre: 'Action',
          stars: '2'
        }
      },
      {
        id: 55,
        imageUrl:
          'https://wallpapers.com/images/high/black-spiderman-tobey-maguire-ixu2s8zl68o17tma.webp',
        description: {
          name: 'Spiderman 2',
          year: '2012',
          genre: 'Action',
          stars: '3'
        }
      }
    ]
  }
];

export const login = () => {};

export const getCategories = () => {
  return dataCategories;
};

export const getRealeses = () => {
  return dataRealeses;
};

export const getMoviesbyCategory = (id) => {
  const data = categoryData.filter((data) => data.categoryId === id)[0];
  return data.movies;
};
