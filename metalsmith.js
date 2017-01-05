const Metalsmith       = require('metalsmith');
const pkg              = require('./package.json');
const loadPlugins      = require('./load-plugins');

const $ = loadPlugins(pkg, 'devDependencies', 'metalsmith-');

// Site Variables.
const sitename = 'Bobrov Blog';
const siteurl = 'https://vitaliy-bobrov.github.io/';

Metalsmith(__dirname)
  .metadata({
    locale: 'en',
    sitename,
    siteurl,
    sitelogo: '/images/logo',
    siteogimg: 'images/blog-og.jpg',
    description: 'Blog about web development, but not only...',
    themeColor: '#00bcd4',
    generatorname: 'Metalsmith',
    generatorurl: 'http://metalsmith.io/'
  })
  .source('./source')
  .destination('./build')
  .clean(false)
  // .use(debug())
  .use($.updated())
  .use($.drafts())
  .use($.collections({
    pages: {
      pattern: 'pages/*.md'
    },
    posts: {
      pattern: 'blog/*.md',
      sortBy: 'created',
      reverse: true
    }
  }))
  .use($.author({
    collection: 'posts',
    authors: {
      me: {
        name: 'Vitaliy Bobrov',
        url: siteurl,
        github: 'https://github.com/vitaliy-bobrov',
        twitter: 'https://twitter.com/bobrov1989',
        linkedin: 'https://www.linkedin.com/in/vitaliybobrov'
      }
    }
  }))
  .use($.pagination({
    'collections.posts': {
      perPage: 8,
      layout: 'blog.html',
      first: 'index.html',
      noPageOne: true,
      path: 'blog/page/:num/index.html',
      pageMetadata: {}
    }
  }))
  .use($.headings('h2'))
  .use($.markdown())
  .use($.codeHighlight({
    tabReplace: '  ',
    classPrefix: '',
    languages: ['js', 'html', 'css']
  }))
  .use($.permalinks({
    relative: false
  }))
  .use($.excerptor({
    maxLength: 300,
    keepImageTag: false,
    ellipsis: '…'
  }))
  .use($.registerHelpers({
    directory: './helpers'
  }))
  .use($.layouts({
    engine: 'handlebars',
    default: 'post.html',
    partials: './partials'
  }))
  .use($.disqus({
    siteurl,
    shortname: 'bobrov-blog'
  }))
  .use($.openGraph({
    sitename,
    siteurl,
    title: 'ogtitle',
    description: 'ogdescr',
    image: 'ogimage',
    decodeEntities: false
  }))
  .use($.mapsite({
    hostname: siteurl
  }))
  .build(function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Metalsmith build completed')
    }
  });
