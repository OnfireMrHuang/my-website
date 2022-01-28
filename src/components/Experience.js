import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";
const experience = [
  {
    company: "深圳明源云",
    position: "Golang后端开发工程师",
    date: "2021年4月 - 至今",
    desc: {
      1: "负责指标建模体系建设、多维模型、标签生产等相关的开发工作",
      2: "推动团队微服务架构建设落地",
      3: "学习研究spark、presto、flink在团队的应用并实践",
    },
  },
  {
    company: "深圳比特时代",
    position: "后端开发工程师",
    date: "2019年3月 - 2021年3月",
    desc: {
      1: "主要技术栈是golang、php",
      2: "负责btc、eth等公链的底层技术研究与对接",
      3: "负责钱包交易相关开发和进度把控",
    },
  },
  {
    company: "深圳七七元素",
    position: "网络开发工程师",
    date: "2018年3月 - 2019年2月",
    desc: {
      1: "网络抓包、分析模块设计、开发",
      2: "主要技术栈: C、Python、DPDK",
    },
  }
];
function Experience() {
  const [value, setValue] = useState(0);
  const { company, position, date, desc } = experience[value];

  return (
    <section className="experience">
      <h2 className="experience-title">
        <Translate>Experience</Translate>
      </h2>
      <div className="underline"></div>
      <div className="experiences-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`experience-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="experience-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="experience-date">{date}</p>
          {Object.keys(desc).map((key, index) => {
            return (
              <div key={index} className="experience-desc">
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="experience-icon"
                ></FontAwesomeIcon>
                <p>{desc[key]}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default Experience;
