module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    data.cakes = [
      // {
      //   name: '2021 Year of the Ox cake（新春蛋糕）',
      //   description: 'A very special 2021 Year of the Ox delicacy, with chiffon, sesame cream, rice wine and raspberry jelly',
      //   image: 'spring.jpg',
      // },
      // {
      //   name: '2020 Christmas log cake',
      //   description: 'Traditional Christmas log cake decorated with tropical and forest fruits, chocolate and christmas decorations',
      //   image: 'christmas.jpg',
      // },
      {
        name: '2021 New Year Passion cake',
        description: 'New year specialty passion fruit cheese cake with chiffon, cream cheese, and passion fruit two ways',
        image: 'passion.jpg',
      },
      {
        name: 'Taro Lava cake',
        decription: '',
        image: 'tarolava.jpg'
      },
      {
        name: 'Black Sesame & Soy Bean pudding',
        decription: '',
        image: 'sesamesoy.jpg'
      },
      {
        name: 'Oreolis',
        decription: '',
        image: 'oreo.jpg'
      },
    ]
    return data
  },
  // template: 'Home.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};
