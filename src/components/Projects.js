import React from "react";
import Project from "./Project";
import Translate from "@docusaurus/Translate";
const Projects = () => {
  const works = [
    {
      stack: ["Golang", "Kubernetes", "Flink","Presto"],
      description:
        "数芯是公司孵化的一套数据中台产品,主要聚焦数据资产建设。除了拥有ETL、指标建模、数据服务等基础模块外，\
        还提供应用商店、标签工厂、算法模型等功能模块",
      title: "数芯",
      github: "https://github.com/OnfireMrHuang",
      url: "https://bigdata-test.mypaas.com/home",
      image: "img/data-core.png",
      index: 0,
    },
    {
      stack: ["Php", "Rust", "Golang"],
      description:
        "数字货币交易所",
      title: "托管你的数字货币",
      github: "https://github.com/OnfireMrHuang",
      url: "",
      image: "img/APP.jpg",
      index: 1,
    },
    {
      stack: ["C", "DPDK", "Python"],
      description:
        "网络监控分析平台",
      title: "7 Element",
      github: "https://github.com/OnfireMrHuang",
      url: "",
      image: "img/furniture-store.png",
      index: 2,
    }
  ];
  return (
    <div className="projects">
      <h1 className="recent-projects">
        <Translate>Recent Projects</Translate>
      </h1>
      <div className="underline"></div>
      <div className="section-center projects-center">
        {works.map(
          ({ description, stack, title, github, url, image, index }) => (
            <Project
              stack={stack}
              key={index}
              description={description}
              title={title}
              url={url}
              github={github}
              image={image}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
