module.exports = {
  permalink: function(data) {
    if (data.page.filePathStem === "/feed.xml") return undefined;
    if (data.page.filePathStem.startsWith("/blog/") && data.page.filePathStem !== "/blog/index") return undefined; 
    if (data.page.filePathStem === "/blog") return "/blog/index.html";
    return `${data.page.filePathStem}.html`;
  }
};
