/* Static English content; remember an explicit language preference. */
(() => {
  'use strict';
  const translations = {
  "about.bachelor": {
    "en": "<strong>2011.09–2015.06:</strong> B.Sc. in Mathematics and Applied Mathematics, Yantai University.",
    "zh": "<strong>2011.09–2015.06：</strong>烟台大学，数学与应用数学学士。"
  },
  "about.contact": {
    "en": "Contact",
    "zh": "联系方式"
  },
  "about.education": {
    "en": "Education",
    "zh": "教育经历"
  },
  "about.experience": {
    "en": "Experience",
    "zh": "工作经历"
  },
  "about.intro": {
    "en": "I am a postdoctoral researcher in statistics at East China Normal University. I received my Ph.D. in Statistics from the same university in 2024.",
    "zh": "我目前在华东师范大学从事统计学博士后研究，2024 年于华东师范大学获得统计学博士学位。"
  },
  "about.phd": {
    "en": "<strong>2017.09–2024.06:</strong> Combined Master’s and Ph.D. Program in Statistics, East China Normal University.",
    "zh": "<strong>2017.09–2024.06：</strong>华东师范大学，统计学硕博连读。"
  },
  "about.postdoc": {
    "en": "<strong>2024.07–present:</strong> Postdoctoral Researcher in Statistics, East China Normal University.",
    "zh": "<strong>2024.07–至今：</strong>华东师范大学，统计学博士后。"
  },
  "about.research": {
    "en": "My research interests include Bayesian statistics, statistical learning and optimization, and biostatistics, with a focus on kernel process models, Bayesian optimization, and adaptive clinical trial design. I also develop R software to make these methods accessible. See my <a href=\"research.html\">publications and software</a>.",
    "zh": "我的研究方向包括贝叶斯统计、统计学习与优化、生物统计，主要研究核过程模型、贝叶斯优化和自适应临床试验设计，并开发相关 R 软件。详见<a href=\"research.html\">论文与软件</a>。"
  },
  "about.teaching": {
    "en": "Teaching",
    "zh": "教学经历"
  },
  "about.teaching-detail": {
    "en": "Teaching assistant for <em>Biostatistics</em> (2020 and 2022), responsible for computer lab sessions and course Q&amp;A.",
    "zh": "2020 年、2022 年担任《生物统计学》课程助教，负责上机教学与答疑。"
  },
  "about.technion": {
    "en": "<strong>2021.07–2022.09; 2020.01–2020.03:</strong> Visiting Ph.D. student, Technion – Israel Institute of Technology.",
    "zh": "<strong>2021.07–2022.09；2020.01–2020.03：</strong>以色列理工学院，联合培养及访学。"
  },
  "about.title": {
    "en": "About",
    "zh": "关于我"
  },
  "attribute.bkp-r-package-on-cran": {
    "en": "BKP R package on CRAN",
    "zh": "CRAN 上的 BKP R 软件包"
  },
  "footer.updated": {
    "en": "Updated November 2026",
    "zh": "更新于 2026 年 11 月"
  },
  "html.major-revision-at-strong-em-statistical-methods-in": {
    "en": "Major revision at <strong><em>Statistical Methods in Medical Research</em></strong>.",
    "zh": "投稿至 <strong><em>Statistical Methods in Medical Research</em></strong>，大修阶段。"
  },
  "html.strong-zhao-j-strong-sup-sup-qing-k-sup-sup-and-xu": {
    "en": "<strong>Zhao, J.</strong><sup>†</sup>, Qing, K.<sup>†</sup>, and Xu, J. (2026). <a href=\"https://arxiv.org/abs/2508.10447\">BKP: An R package for beta kernel process modeling</a>. <strong><em>Journal of Statistical Software</em></strong>. Accepted.",
    "zh": "<strong>Zhao, J.</strong><sup>†</sup>, Qing, K.<sup>†</sup>, and Xu, J. (2026). <a href=\"https://arxiv.org/abs/2508.10447\">BKP: An R package for beta kernel process modeling</a>. <strong><em>Journal of Statistical Software</em></strong>. 已录用。"
  },
  "html.under-review-at-strong-em-ecology-em-strong": {
    "en": "Under review at <strong><em>Ecology</em></strong>.",
    "zh": "投稿至 <strong><em>Ecology</em></strong>，审稿中。"
  },
  "link.cv": {
    "en": "Curriculum vitae (PDF)",
    "zh": "个人简历（PDF）"
  },
  "link.email": {
    "en": "Email",
    "zh": "电子邮箱"
  },
  "link.paper": {
    "en": "Paper",
    "zh": "论文"
  },
  "link.website": {
    "en": "Website",
    "zh": "项目网站"
  },
  "meta.description": {
    "en": "Jiangyan Zhao, postdoctoral researcher in statistics at East China Normal University. Bayesian statistics, optimization, clinical trial design, and R software.",
    "zh": "赵江彦，华东师范大学统计学博士后。研究方向包括贝叶斯统计、统计学习与优化、生物统计及统计计算。"
  },
  "nav.about": {
    "en": "About",
    "zh": "关于我"
  },
  "nav.label": {
    "en": "Main navigation",
    "zh": "主导航"
  },
  "nav.research": {
    "en": "Research",
    "zh": "研究成果"
  },
  "nav.skip": {
    "en": "Skip to content",
    "zh": "跳至正文"
  },
  "page.about": {
    "en": "About | Jiangyan Zhao",
    "zh": "关于我 | 赵江彦"
  },
  "page.research": {
    "en": "Research | Jiangyan Zhao",
    "zh": "研究成果 | 赵江彦"
  },
  "profile.affiliation": {
    "en": "East China Normal University",
    "zh": "华东师范大学"
  },
  "profile.label": {
    "en": "Profile",
    "zh": "个人信息"
  },
  "profile.location": {
    "en": "Shanghai, China",
    "zh": "中国 · 上海"
  },
  "profile.position": {
    "en": "Postdoctoral Researcher in Statistics",
    "zh": "统计学博士后"
  },
  "research.authorship": {
    "en": "<sup>†</sup> Joint first authors. <sup>‡</sup> Alphabetical author order; equal contribution.",
    "zh": "<sup>†</sup> 共同第一作者。<sup>‡</sup> 作者按姓氏字母顺序排列，贡献相同。"
  },
  "research.intro": {
    "en": "My work focuses on Bayesian modeling, optimization, and clinical trial design, with an emphasis on interpretable uncertainty and practical computation.",
    "zh": "我的研究围绕贝叶斯建模、优化与临床试验设计展开，注重不确定性的统计解释与方法的计算实用性。"
  },
  "research.preprints": {
    "en": "Preprints",
    "zh": "预印本"
  },
  "research.publications": {
    "en": "Publications",
    "zh": "学术论文"
  },
  "research.published": {
    "en": "Published & accepted",
    "zh": "已发表与已接受"
  },
  "research.software": {
    "en": "Software",
    "zh": "统计软件"
  },
  "research.title": {
    "en": "Research",
    "zh": "研究成果"
  },
  "software.bkp": {
    "en": "An R package for beta and Dirichlet kernel process modeling of binomial and multinomial responses, including scalable TwinBKP and TwinDKP models.",
    "zh": "用于二项和多项响应的贝塔核过程与狄利克雷核过程建模 R 包，支持适用于大规模数据的 TwinBKP 和 TwinDKP 模型。"
  },
  "software.epbo": {
    "en": "Research code for constrained Bayesian optimization using exact penalty functions, accompanying the Technometrics paper.",
    "zh": "基于精确罚函数的约束贝叶斯优化方法代码，对应发表于 Technometrics 的论文。"
  },
  "software.skbd": {
    "en": "An R package for Shared Keyboard phase I dose-finding designs, with decision tables, simulation tools, and a Shiny application.",
    "zh": "用于 I 期剂量探索的 Shared Keyboard 设计 R 包，提供决策表、模拟评估工具和 Shiny 应用。"
  },
  "text.code": {
    "en": "Code",
    "zh": "代码"
  },
  "text.materials": {
    "en": "Materials",
    "zh": "配套材料"
  },
  "text.r-package": {
    "en": "R package",
    "zh": "R 软件包"
  },
  "text.reproducibility": {
    "en": "Reproducibility",
    "zh": "复现代码"
  },
  "text.slides": {
    "en": "Slides",
    "zh": "报告幻灯片"
  },
  "text.website": {
    "en": "Website",
    "zh": "项目主页"
  }
};

  const root = document.documentElement;
  const button = document.querySelector('.language-toggle');
  let language = 'en';
  try { if (localStorage.getItem('jiangyan-language') === 'zh') language = 'zh'; } catch (_) {}
  function setLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const entry = translations[element.dataset.i18n];
      if (entry) element.textContent = entry[language];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const entry = translations[element.dataset.i18nHtml];
      if (entry) element.innerHTML = entry[language];
    });
    ['aria-label', 'title', 'content'].forEach(attribute => {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        const entry = translations[element.getAttribute(`data-i18n-${attribute}`)];
        if (entry) element.setAttribute(attribute, entry[language]);
      });
    });
    if (button) {
      button.textContent = language === 'en' ? '中文' : 'English';
      button.lang = language === 'en' ? 'zh-CN' : 'en';
      button.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换为英文');
      button.hidden = false;
    }
  }
  setLanguage(language);
  if (button) button.addEventListener('click', () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
    try { localStorage.setItem('jiangyan-language', language); } catch (_) {}
  });
})();
