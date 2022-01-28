
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
    component: ComponentCreator('/zh-cn/blog','c12'),
    exact: true
  },
  {
    path: '/zh-cn/blog/保证领域模型和代码模型的一致性',
    component: ComponentCreator('/zh-cn/blog/保证领域模型和代码模型的一致性','306'),
    exact: true
  },
  {
    path: '/zh-cn/blog/架构设计原则和关键设计',
    component: ComponentCreator('/zh-cn/blog/架构设计原则和关键设计','3ba'),
    exact: true
  },
  {
    path: '/zh-cn/blog/如何构建领域模型',
    component: ComponentCreator('/zh-cn/blog/如何构建领域模型','fa7'),
    exact: true
  },
  {
    path: '/zh-cn/blog/DDD代码模型',
    component: ComponentCreator('/zh-cn/blog/DDD代码模型','fdd'),
    exact: true
  },
  {
    path: '/zh-cn/blog/DDD服务间协作',
    component: ComponentCreator('/zh-cn/blog/DDD服务间协作','4ba'),
    exact: true
  },
  {
    path: '/zh-cn/blog/DDD设计实例',
    component: ComponentCreator('/zh-cn/blog/DDD设计实例','f30'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags',
    component: ComponentCreator('/zh-cn/blog/tags','8c6'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/golang',
    component: ComponentCreator('/zh-cn/blog/tags/golang','230'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/java',
    component: ComponentCreator('/zh-cn/blog/tags/java','e58'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/kubernetes',
    component: ComponentCreator('/zh-cn/blog/tags/kubernetes','694'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/rust',
    component: ComponentCreator('/zh-cn/blog/tags/rust','9cd'),
    exact: true
  },
  {
    path: '/zh-cn/blog/tags/spark',
    component: ComponentCreator('/zh-cn/blog/tags/spark','1d1'),
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
