module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    data.cakes = [
      {
        name: 'Mango cheese cake',
        description: 'A delicious, 4-layer Japanese cheese cake with chiffon, mango pudding, mango jelly and cheese cake',
        image: 'fallback.png',
      },
      {
        name: 'Basque cheese cake',
        description: 'Based on a traditional Basque recipe, this ugly brother of the mango cheese cake is no less delicious',
        image: 'fallback.png',
      },
      {
        name: 'Pecan cake',
        description: 'Traditional American pecan pie, with a nutty based covered in fruits, nuts and cream',
        image: 'fallback.png',
      }
    ]
    return data
  },
  // template: 'Home.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};
