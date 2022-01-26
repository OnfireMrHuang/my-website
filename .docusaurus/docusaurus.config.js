export default {
  "title": "Jessie",
  "tagline": "Learning is a Lifelong Process",
  "url": "https://jeesie.work",
  "baseUrl": "/zh-cn/",
  "favicon": "img/favicon.ico",
  "projectName": "Jessie-Blog",
  "stylesheets": [
    "https://fonts.font.im/css?family=Raleway:500,700"
  ],
  "themeConfig": {
    "navbar": {
      "title": "Jessie",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/jessie.logo.svg"
      },
      "items": [
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "to": "blog",
          "label": "博客",
          "position": "right"
        },
        {
          "href": "https://github.com/OnfireMrHuang",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "social media",
          "items": [
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/in/haochen-qi-a36393171/"
            },
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/haochen.qi.520"
            }
          ]
        },
        {
          "title": "more",
          "items": [
            {
              "label": "博客",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/OnfireMrHuang"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Haochen Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/huangwenwu/workspace/my-website/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "path": "./blog",
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/Users/huangwenwu/workspace/my-website/src/css/custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "zh-cn"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr"
      },
      "zh-cn": {
        "label": "中文",
        "direction": "ltr"
      }
    }
  },
  "baseUrlIssueBanner": true,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};