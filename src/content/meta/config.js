const base = {
  name: 'Nikhil B Lal',
  url: 'https://nikhilblal.com'
};

const config = {
  /* meta tags */
  siteTitle: `${base.name}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  }  engineer, innovator, designer, outdoorsman.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
//  headerSubTitle: 'a series of starters for GatsbyJS',

  /* url */
  siteUrl: base.url
  // pathPrefix: '',
};

module.exports = config;
