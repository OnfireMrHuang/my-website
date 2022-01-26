
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','7e5'),
    exact: true
  },
  {
    path: '/blog/领域驱动模型设计',
    component: ComponentCreator('/blog/领域驱动模型设计','1db'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/golang',
    component: ComponentCreator('/blog/tags/golang','827'),
    exact: true
  },
  {
    path: '/blog/tags/java',
    component: ComponentCreator('/blog/tags/java','6b9'),
    exact: true
  },
  {
    path: '/blog/tags/kubernetes',
    component: ComponentCreator('/blog/tags/kubernetes','6e5'),
    exact: true
  },
  {
    path: '/blog/tags/rust',
    component: ComponentCreator('/blog/tags/rust','32d'),
    exact: true
  },
  {
    path: '/blog/tags/spark',
    component: ComponentCreator('/blog/tags/spark','cf1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','3e9'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','6b2'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/docs/doc2',
        component: ComponentCreator('/docs/doc2','fc7'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/docs/doc3',
        component: ComponentCreator('/docs/doc3','b20'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/docs/mdx',
        component: ComponentCreator('/docs/mdx','106'),
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
