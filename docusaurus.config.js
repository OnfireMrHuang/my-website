module.exports = {
  title: "Jessie",
  tagline: "Learning is a Lifelong Process",
  //disableTitleTagline: true,
  //titleDelimiter: "*",
  url: "https://jeesie.work",
  baseUrl: "/",
  //onBrokenLinks: "throw",
  //onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  //organizationName: "Haochen", // Usually your GitHub org/user name.
  projectName: "Jessie-Blog", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "Jessie",
      logo: {
        alt: "My Site Logo",
        src: "img/jessie.logo.svg",
      },
      items: [
        { type: "localeDropdown", position: "right" },
        { to: "blog", label: "Blog", position: "right" },

        {
          href: "https://github.com/OnfireMrHuang",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "social media",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/haochen-qi-a36393171/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/haochen.qi.520",
            },
          ],
        },
        {
          title: "more",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/OnfireMrHuang",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jessie. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          path: "./blog",
          //routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "zh-cn": {
        label: "中文",
      },
    },
  },
};
