
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh-cn/',
    component: ComponentCreator('/zh-cn/','5d9'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug',
    component: ComponentCreator('/zh-cn/__docusaurus/debug','f4b'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug/config',
    component: ComponentCreator('/zh-cn/__docusaurus/debug/config','881'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug/content',
    component: ComponentCreator('/zh-cn/__docusaurus/debug/content','95d'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug/globalData',
    component: ComponentCreator('/zh-cn/__docusaurus/debug/globalData','f8a'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug/metadata',
    component: ComponentCreator('/zh-cn/__docusaurus/debug/metadata','3f1'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug/registry',
    component: ComponentCreator('/zh-cn/__docusaurus/debug/registry','664'),
    exact: true
  },
  {
    path: '/zh-cn/__docusaurus/debug/routes',
    component: ComponentCreator('/zh-cn/__docusaurus/debug/routes','af2'),
    exact: true
  },
  {
    path: '/zh-cn/blog',
    component: ComponentCreator('/zh-cn/blog','db3'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags',
    component: ComponentCreator('/zh-cn/blog/tags','8c6'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/interview-qustions',
    component: ComponentCreator('/zh-cn/blog/tags/interview-qustions','bc1'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/java-script',
    component: ComponentCreator('/zh-cn/blog/tags/java-script','0cb'),
    exact: true
  },
  {
    path: '/zh-cn/blog/understand-this-in-one-article',
    component: ComponentCreator('/zh-cn/blog/understand-this-in-one-article','a09'),
    exact: true
  },
  {
    path: '/zh-cn/docs',
    component: ComponentCreator('/zh-cn/docs','413'),
    routes: [
      {
        path: '/zh-cn/docs/',
        component: ComponentCreator('/zh-cn/docs/','4c5'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/zh-cn/docs/doc2',
        component: ComponentCreator('/zh-cn/docs/doc2','ed4'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/zh-cn/docs/doc3',
        component: ComponentCreator('/zh-cn/docs/doc3','b2f'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/zh-cn/docs/mdx',
        component: ComponentCreator('/zh-cn/docs/mdx','424'),
        exact: true,
        'sidebar': "someSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
