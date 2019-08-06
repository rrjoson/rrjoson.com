const config = {
  siteTitle: "RR Joson",
  siteTitleShort: "RR Joson",
  siteTitleAlt: "RR Joson",
  siteLogo: "",
  siteUrl: "rrjoson.com",
  repo: "",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription: "",
  siteRss: "/rss.xml",
  googleAnalyticsID: "",
  disqusShortname: "",
  postDefaultCategoryID: "Tech",
  userName: "",
  userEmail: "rrjoson08@gmail.com",
  userTwitter: "rrjoson",
  userLocation: "",
  userAvatar: "",
  userDescription:
    "I build open source projects and write the missing instruction manuals of the web.",
  menuLinks: [
    {
      name: "Me",
      link: "/me/"
    },
    {
      name: "Articles",
      link: "/blog/"
    },
    {
      name: "Contact",
      link: "/contact/"
    }
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff"
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
