module.exports = {
  permalink: function(data) {
    if (data.page.filePathStem === "/feed.xml") return undefined;
    if (data.page.filePathStem.startsWith("/blog/") && data.page.filePathStem !== "/blog/index") return undefined; 
    if (data.page.filePathStem === "/blog") return "/blog/index.html";
    // Private compare pages use directory data permalinks (/private/compare/<slug>/).
    if (data.page.filePathStem.startsWith("/private/compare/")) return undefined;
    return `${data.page.filePathStem}.html`;
  }
};
