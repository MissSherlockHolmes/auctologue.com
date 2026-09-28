module.exports = {
  eleventyExcludeFromCollections: true,
  permalink: function (data) {
    // Pretty URL: /private/compare/<slug>/
    return `/private/compare/${data.page.fileSlug}/`;
  },
};
