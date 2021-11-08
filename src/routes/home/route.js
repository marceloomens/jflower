module.exports = {
  // the all function returns an array of all of the 'request' objects of a route. Since this is the homepage, there is only one.
  all: () => [{ slug: '/' }],
  // the permalink function takes a 'request' object and returns a relative permalink. In this case "/"
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {
    const products = data.markdown.products.map((p) => p.frontmatter);
    products.filter((a) => a.promoted);
    products.sort((a, b) => {
      if (a.available && !b.available) {
        return -1;
      } else if (!a.available && b.available) {
        return 1;
      } else if (a.order > b.order) {
        return 1;
      } else if (a.order < b.order) {
        return -1;
      } else {
        return 0;
      }
    });

    data.products = products;

    return data;
  },
  // template: 'Home.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};
