/* English is the initial document; only a visitor's explicit choice changes it. */
(() => {
  'use strict';
  const translations = {
  "attribute.jiangyan-zhao-postdoctoral-researcher-in-statistic": {
    "en": "Jiangyan Zhao, postdoctoral researcher in statistics at East China Normal University. Bayesian statistics, statistical learning and optimization, biostatistics, and statistical computing.",
    "zh": "赵江彦，华东师范大学统计学博士后。研究方向包括贝叶斯统计、统计学习与优化、生物统计和统计计算。"
  },
  "attribute.jiangyan-zhao-statistics": {
    "en": "Jiangyan Zhao | Statistics",
    "zh": "赵江彦 | 统计学"
  },
  "attribute.bayesian-statistics-statistical-learning-and-optim": {
    "en": "Bayesian statistics, statistical learning and optimization, biostatistics, and statistical computing.",
    "zh": "贝叶斯统计、统计学习与优化、生物统计及统计计算。"
  },
  "text.skip-to-content": {
    "en": "Skip to content",
    "zh": "跳至正文"
  },
  "html.jiangyan-zhao-span-statistics-span": {
    "en": "Jiangyan Zhao<span>Statistics</span>",
    "zh": "赵江彦<span>统计学</span>"
  },
  "attribute.main-navigation": {
    "en": "Main navigation",
    "zh": "主导航"
  },
  "text.research": {
    "en": "Research",
    "zh": "研究方向"
  },
  "text.publications": {
    "en": "Publications",
    "zh": "论文成果"
  },
  "text.software": {
    "en": "Software",
    "zh": "统计软件"
  },
  "text.experience": {
    "en": "Experience",
    "zh": "教育经历"
  },
  "text.teaching": {
    "en": "Teaching",
    "zh": "教学经历"
  },
  "text.contact": {
    "en": "Contact",
    "zh": "联系方式"
  },
  "html.span-class-status-dot-aria-hidden-true-span-statis": {
    "en": "<span class=\"status-dot\" aria-hidden=\"true\"></span> STATISTICS · METHODS · COMPUTATION",
    "zh": "<span class=\"status-dot\" aria-hidden=\"true\"></span> 统计 · 方法 · 计算"
  },
  "attribute.en": {
    "en": "en",
    "zh": "zh-CN"
  },
  "text.jiangyan-zhao": {
    "en": "Jiangyan Zhao",
    "zh": "赵江彦"
  },
  "attribute.zh-cn": {
    "en": "zh-CN",
    "zh": "en"
  },
  "text.name": {
    "en": "赵江彦",
    "zh": "Jiangyan Zhao"
  },
  "html.postdoctoral-researcher-in-statistics-br-span-east": {
    "en": "Postdoctoral Researcher in Statistics<br><span>East China Normal University · Shanghai</span>",
    "zh": "统计学博士后<br><span>华东师范大学 · 上海</span>"
  },
  "html.simple-models-clear-uncertainty-br-em-practical-de": {
    "en": "Simple models. Clear uncertainty.<br><em>Practical decisions.</em>",
    "zh": "简单的模型，清晰的不确定性。<br><em>务实的决策。</em>"
  },
  "html.research-span-aria-hidden-true-span": {
    "en": "Research <span aria-hidden=\"true\">↗</span>",
    "zh": "研究方向 <span aria-hidden=\"true\">↗</span>"
  },
  "html.google-scholar-span-aria-hidden-true-span": {
    "en": "Google Scholar <span aria-hidden=\"true\">↗</span>",
    "zh": "谷歌学术 <span aria-hidden=\"true\">↗</span>"
  },
  "text.data-uncertainty-decision": {
    "en": "Data, uncertainty, decision",
    "zh": "数据、不确定性与决策"
  },
  "text.fifteen-observations-below-three-uncertainty-conto": {
    "en": "Fifteen observations below three uncertainty contours, with a sequential path rising toward a single target.",
    "zh": "十五个观测点、三条不确定性等高线，以及一条逐步通向目标的决策路径。"
  },
  "text.data-uncertainty-decision-23": {
    "en": "Data → uncertainty → decision",
    "zh": "数据 → 不确定性 → 决策"
  },
  "text.research-philosophy-kiss": {
    "en": "Research philosophy / KISS",
    "zh": "研究理念 / KISS"
  },
  "html.keep-it-br-span-simple-span-br-and-smart": {
    "en": "KEEP IT<br><span>SIMPLE</span><br>AND SMART",
    "zh": "保持<br><span>简单</span><br>兼具智慧"
  },
  "text.a-principle-for-doing-research": {
    "en": "A principle for doing research",
    "zh": "贯穿研究的原则"
  },
  "text.complex-problems-do-not-always-require-complex-mod": {
    "en": "Complex problems do not always require complex models.",
    "zh": "复杂问题，并不总需要复杂模型。"
  },
  "text.i-focus-on-statistical-methods-that-are-simple-tra": {
    "en": "I focus on statistical methods that are simple, transparent, computationally practical, and useful for real decisions.",
    "zh": "我追求简单、透明、可计算、可实施的统计方法，让研究服务于实际决策。"
  },
  "text.research-areas": {
    "en": "Research areas",
    "zh": "研究方向"
  },
  "text.questions-that-connect": {
    "en": "Questions that connect.",
    "zh": "相互连接的研究问题"
  },
  "html.all-research-interests-span-aria-hidden-true-span": {
    "en": "All research interests <span aria-hidden=\"true\">↗</span>",
    "zh": "查看研究方向 <span aria-hidden=\"true\">↗</span>"
  },
  "text.bayesian-statistics": {
    "en": "Bayesian Statistics",
    "zh": "贝叶斯统计"
  },
  "text.how-can-we-learn-from-data-while-accounting-for-un": {
    "en": "How can we learn from data while accounting for uncertainty?",
    "zh": "如何从数据中学习，同时刻画不确定性？"
  },
  "html.statistical-learning-br-amp-optimization": {
    "en": "Statistical Learning<br>&amp; Optimization",
    "zh": "统计学习<br>与优化"
  },
  "text.how-can-statistical-learning-support-better-decisi": {
    "en": "How can statistical learning support better decisions?",
    "zh": "统计学习如何支持更好的决策？"
  },
  "text.biostatistics": {
    "en": "Biostatistics",
    "zh": "生物统计"
  },
  "text.how-can-statistical-methods-inform-health-and-biom": {
    "en": "How can statistical methods inform health and biomedical research?",
    "zh": "统计方法如何支持健康与生物医学研究？"
  },
  "text.connected-through-statistical-computing-and-practi": {
    "en": "Connected through statistical computing and practical software.",
    "zh": "以统计计算与实用软件连接方法和应用。"
  },
  "text.selected-work": {
    "en": "Selected work",
    "zh": "代表成果"
  },
  "text.methods-in-practice": {
    "en": "Methods, in practice.",
    "zh": "让方法走向实践"
  },
  "html.full-bibliography-span-aria-hidden-true-span": {
    "en": "Full bibliography <span aria-hidden=\"true\">↗</span>",
    "zh": "全部论文 <span aria-hidden=\"true\">↗</span>"
  },
  "text.2026-accepted": {
    "en": "2026 · Accepted",
    "zh": "2026 · 已接收"
  },
  "text.probability-modeling-uncertainty-quantification-an": {
    "en": "Probability modeling, uncertainty quantification, and an R implementation.",
    "zh": "概率建模、不确定性量化及其 R 软件实现。"
  },
  "text.project-website": {
    "en": "Project website",
    "zh": "项目主页"
  },
  "text.citation-resources": {
    "en": "Citation & resources",
    "zh": "引用与资源"
  },
  "text.2024-published": {
    "en": "2024 · Published",
    "zh": "2024 · 已发表"
  },
  "text.statistical-learning-for-optimization-under-constr": {
    "en": "Statistical learning for optimization under constraints.",
    "zh": "面向约束优化问题的统计学习方法。"
  },
  "text.paper": {
    "en": "Paper",
    "zh": "论文"
  },
  "text.code": {
    "en": "Code",
    "zh": "代码"
  },
  "text.2026-published": {
    "en": "2026 · Published",
    "zh": "2026 · 已发表"
  },
  "text.bayesian-methodology-for-clinical-trial-design-and": {
    "en": "Bayesian methodology for clinical trial design and dose optimization.",
    "zh": "用于临床试验设计与剂量优化的贝叶斯方法。"
  },
  "attribute.open-the-bkp-project-website": {
    "en": "Open the BKP project website",
    "zh": "打开 BKP 项目主页"
  },
  "attribute.screenshot-of-the-real-bkp-project-website-focused": {
    "en": "Screenshot of the real BKP project website, focused on its interactive probability modeling example.",
    "zh": "BKP 真实项目网站截图，聚焦交互式概率建模示例。"
  },
  "html.bkp-project-website-span-actual-website-screenshot": {
    "en": "BKP project website <span>Actual website screenshot</span>",
    "zh": "BKP 项目主页 <span>真实网站截图</span>"
  },
  "text.software-bkp": {
    "en": "Software / BKP",
    "zh": "统计软件 / BKP"
  },
  "html.from-a-method-br-to-a-tool": {
    "en": "From a method<br>to a tool.",
    "zh": "从统计方法<br>到实用工具"
  },
  "text.bkp-is-an-r-package-for-beta-kernel-process-modeli": {
    "en": "BKP is an R package for beta kernel process modeling. Explore the software, its documentation, and the examples behind the method.",
    "zh": "BKP 是用于贝塔核过程建模的 R 软件包，可通过软件、文档与示例了解方法及其应用。"
  },
  "text.2026-jiangyan-zhao": {
    "en": "© 2026 Jiangyan Zhao",
    "zh": "© 2026 赵江彦"
  },
  "text.updated-october-2026": {
    "en": "Updated October 2026",
    "zh": "更新于 2026 年 10 月"
  },
  "attribute.research-jiangyan-zhao": {
    "en": "Research | Jiangyan Zhao",
    "zh": "研究方向 | 赵江彦"
  },
  "text.research-interests": {
    "en": "Research interests",
    "zh": "研究方向"
  },
  "text.statistical-methods-that-connect-uncertainty-compu": {
    "en": "Statistical methods that connect uncertainty, computation, and decisions.",
    "zh": "连接不确定性、计算与决策的统计方法。"
  },
  "text.my-research-connects-bayesian-statistics-statistic": {
    "en": "My research connects Bayesian statistics, statistical learning and optimization, and biostatistics. Across these areas, I aim to preserve the essential structure of a problem while keeping inference transparent and computation practical.",
    "zh": "我的研究连接贝叶斯统计、统计学习与优化、生物统计。在这些方向中，我关注问题的核心结构，追求透明的推断与实用的计算。"
  },
  "attribute.research-themes": {
    "en": "Research themes",
    "zh": "研究主题"
  },
  "html.bayesian-statistics-span-aria-hidden-true-span": {
    "en": "Bayesian Statistics <span aria-hidden=\"true\">↓</span>",
    "zh": "贝叶斯统计 <span aria-hidden=\"true\">↓</span>"
  },
  "html.statistical-learning-amp-optimization-span-aria-hi": {
    "en": "Statistical Learning &amp; Optimization <span aria-hidden=\"true\">↓</span>",
    "zh": "统计学习与优化 <span aria-hidden=\"true\">↓</span>"
  },
  "html.biostatistics-span-aria-hidden-true-span": {
    "en": "Biostatistics <span aria-hidden=\"true\">↓</span>",
    "zh": "生物统计 <span aria-hidden=\"true\">↓</span>"
  },
  "html.bayesian-br-statistics": {
    "en": "Bayesian<br>Statistics",
    "zh": "贝叶斯<br>统计学"
  },
  "text.probability-modeling-and-uncertainty": {
    "en": "Probability modeling and uncertainty",
    "zh": "概率建模与不确定性"
  },
  "text.how-can-we-model-probabilities-flexibly-while-keep": {
    "en": "How can we model probabilities flexibly while keeping uncertainty easy to compute and interpret?",
    "zh": "如何灵活地建模概率，同时让不确定性易于计算和解释？"
  },
  "text.method": {
    "en": "Method",
    "zh": "方法思路"
  },
  "text.i-study-kernel-based-probability-models-that-borro": {
    "en": "I study kernel-based probability models that borrow evidence across nearby inputs. Beta and Dirichlet conjugate updates provide pointwise posterior summaries for binomial and categorical responses, with scalable approximations for larger datasets.",
    "zh": "我研究基于核的概率模型，在相近输入之间借用信息。通过贝塔与狄利克雷共轭更新，为二项和分类响应提供逐点后验摘要，并利用可扩展的近似方法处理更大规模的数据。"
  },
  "text.representative-work": {
    "en": "Representative work",
    "zh": "代表工作"
  },
  "html.em-journal-of-statistical-software-em-2026-accepte": {
    "en": "<em>Journal of Statistical Software</em> · 2026 · Accepted",
    "zh": "<em>Journal of Statistical Software</em> · 2026 · 已接收"
  },
  "text.r-package": {
    "en": "R package",
    "zh": "R 软件包"
  },
  "text.learning-for-constrained-decisions": {
    "en": "Learning for constrained decisions",
    "zh": "面向约束决策的学习"
  },
  "text.how-can-we-make-good-decisions-when-evaluations-ar": {
    "en": "How can we make good decisions when evaluations are expensive and constraints matter?",
    "zh": "当评估代价高昂且必须满足约束时，如何作出好的决策？"
  },
  "text.i-combine-statistical-surrogate-modeling-with-nume": {
    "en": "I combine statistical surrogate modeling with numerical optimization. Bayesian optimization within an exact penalty framework brings objectives and constraints into one sequential search, including problems with equality constraints and infeasible starting points.",
    "zh": "我将统计代理模型与数值优化相结合，在精确罚函数框架中开展贝叶斯优化，将目标与约束纳入统一的序贯搜索，并处理等式约束及不可行初始点等问题。"
  },
  "html.em-technometrics-em-2024-published": {
    "en": "<em>Technometrics</em> · 2024 · Published",
    "zh": "<em>Technometrics</em> · 2024 · 已发表"
  },
  "text.adaptive-learning-in-clinical-studies": {
    "en": "Adaptive learning in clinical studies",
    "zh": "临床研究中的自适应学习"
  },
  "text.how-can-a-clinical-trial-learn-as-it-progresses-wh": {
    "en": "How can a clinical trial learn as it progresses while balancing safety and treatment benefit?",
    "zh": "临床试验如何在进行中持续学习，并兼顾安全性与治疗获益？"
  },
  "text.i-develop-bayesian-methods-for-adaptive-clinical-t": {
    "en": "I develop Bayesian methods for adaptive clinical trials and dose optimization. This includes borrowing information across doses or indications, incorporating delayed outcomes, and translating updated toxicity and efficacy estimates into interim decisions.",
    "zh": "我研究用于自适应临床试验与剂量优化的贝叶斯方法，包括在剂量或适应症之间借用信息、处理延迟结局，并将更新后的毒性和疗效估计转化为期中决策。"
  },
  "html.em-statistical-methods-in-medical-research-em-2026": {
    "en": "<em>Statistical Methods in Medical Research</em> · 2026 · Published",
    "zh": "<em>Statistical Methods in Medical Research</em> · 2026 · 已发表"
  },
  "text.joint-modeling-of-toxicity-and-survival-efficacy-s": {
    "en": "Joint modeling of toxicity and survival efficacy supports dose decisions across indications.",
    "zh": "联合建模毒性与生存疗效，支持不同适应症的剂量决策。"
  },
  "html.preprint-major-revision-at-em-statistical-methods-": {
    "en": "Preprint · Major revision at <em>Statistical Methods in Medical Research</em>",
    "zh": "预印本 · 大修中，投稿期刊： <em>Statistical Methods in Medical Research</em>"
  },
  "text.controlled-borrowing-across-nearby-doses-retains-t": {
    "en": "Controlled borrowing across nearby doses retains the transparent decision structure of the Keyboard design.",
    "zh": "在相邻剂量之间进行可控的信息借用，同时保留 Keyboard 设计透明的决策结构。"
  },
  "text.preprint": {
    "en": "Preprint",
    "zh": "预印本"
  },
  "text.across-all-three-themes": {
    "en": "Across all three themes",
    "zh": "贯穿三条研究主线"
  },
  "text.statistical-computing": {
    "en": "Statistical computing",
    "zh": "统计计算"
  },
  "text.computation-connects-the-method-to-its-use-scalabl": {
    "en": "Computation connects the method to its use: scalable algorithms, simulation studies, reproducible code, and R software. BKP, SKBD, and EPBO make these research ideas available as tools and implementations.",
    "zh": "计算连接方法与应用：可扩展算法、模拟研究、可复现代码与 R 软件。BKP、SKBD 和 EPBO 将这些研究思路转化为工具与实现。"
  },
  "html.explore-software-span-aria-hidden-true-span": {
    "en": "Explore software <span aria-hidden=\"true\">↗</span>",
    "zh": "查看统计软件 <span aria-hidden=\"true\">↗</span>"
  },
  "attribute.jiangyan-zhao-postdoctoral-researcher-in-statistic-92": {
    "en": "Jiangyan Zhao, postdoctoral researcher in statistics at East China Normal University. Bayesian statistics, optimization, clinical trial design, and R software.",
    "zh": "赵江彦，华东师范大学统计学博士后。研究领域涉及贝叶斯统计、优化、临床试验设计与 R 软件。"
  },
  "attribute.publications-jiangyan-zhao": {
    "en": "Publications | Jiangyan Zhao",
    "zh": "论文成果 | 赵江彦"
  },
  "attribute.bayesian-statistics-optimization-clinical-trial-de": {
    "en": "Bayesian statistics, optimization, clinical trial design, and statistical computing.",
    "zh": "贝叶斯统计、优化、临床试验设计与统计计算。"
  },
  "text.google-scholar": {
    "en": "Google Scholar",
    "zh": "谷歌学术"
  },
  "html.sup-sup-joint-first-authors": {
    "en": "<sup>†</sup> Joint first authors.",
    "zh": "<sup>†</sup> 共同第一作者。"
  },
  "html.sup-sup-alphabetical-author-order-equal-contributi": {
    "en": "<sup>‡</sup> Alphabetical author order; equal contribution.",
    "zh": "<sup>‡</sup> 作者按字母顺序排列；贡献相同。"
  },
  "text.preprints": {
    "en": "Preprints",
    "zh": "预印本"
  },
  "html.major-revision-at-strong-em-statistical-methods-in": {
    "en": "Major revision at <strong><em>Statistical Methods in Medical Research</em></strong>.",
    "zh": "大修中，投稿期刊： <strong><em>Statistical Methods in Medical Research</em></strong>."
  },
  "text.materials": {
    "en": "Materials",
    "zh": "配套材料"
  },
  "html.under-review-at-strong-em-ecology-em-strong": {
    "en": "Under review at <strong><em>Ecology</em></strong>.",
    "zh": "审稿中，投稿期刊： <strong><em>Ecology</em></strong>."
  },
  "text.published-accepted": {
    "en": "Published & accepted",
    "zh": "已发表与已接收"
  },
  "html.strong-zhao-j-strong-sup-sup-qing-k-sup-sup-and-xu": {
    "en": "<strong>Zhao, J.</strong><sup>†</sup>, Qing, K.<sup>†</sup>, and Xu, J. (2026). <a href=\"https://arxiv.org/abs/2508.10447\">BKP: An R package for beta kernel process modeling</a>. <strong><em>Journal of Statistical Software</em></strong>. Accepted.",
    "zh": "<strong>Zhao, J.</strong><sup>†</sup>, Qing, K.<sup>†</sup>, and Xu, J. (2026). <a href=\"https://arxiv.org/abs/2508.10447\">BKP: An R package for beta kernel process modeling</a>. <strong><em>Journal of Statistical Software</em></strong>。已接收。"
  },
  "text.slides": {
    "en": "Slides",
    "zh": "报告幻灯片"
  },
  "text.website": {
    "en": "Website",
    "zh": "项目主页"
  },
  "attribute.bkp-r-package-on-cran": {
    "en": "BKP R package on CRAN",
    "zh": "CRAN 上的 BKP R 软件包"
  },
  "text.reproducibility": {
    "en": "Reproducibility",
    "zh": "复现代码"
  },
  "attribute.software-jiangyan-zhao": {
    "en": "Software | Jiangyan Zhao",
    "zh": "统计软件 | 赵江彦"
  },
  "text.statistical-software": {
    "en": "Statistical software",
    "zh": "统计软件"
  },
  "text.methods-into-r-software": {
    "en": "Methods into R software.",
    "zh": "将统计方法实现为 R 软件。"
  },
  "text.r-package-cran": {
    "en": "R package · CRAN",
    "zh": "R 软件包 · CRAN"
  },
  "text.beta-kernel-process-modeling": {
    "en": "Beta Kernel Process Modeling",
    "zh": "贝塔核过程建模"
  },
  "text.an-r-package-for-binomial-and-multinomial-probabil": {
    "en": "An R package for binomial and multinomial probability modeling with pointwise Beta and Dirichlet posterior summaries. Includes TwinBKP and TwinDKP for scalable global-local modeling.",
    "zh": "用于二项与多项概率建模的 R 软件包，提供逐点贝塔和狄利克雷后验摘要，并包含 TwinBKP 与 TwinDKP，以支持可扩展的全局—局部建模。"
  },
  "html.accepted-in-em-journal-of-statistical-software-em": {
    "en": "Accepted in <em>Journal of Statistical Software</em>",
    "zh": "已被接收，期刊： <em>Journal of Statistical Software</em>"
  },
  "attribute.the-real-bkp-project-website-and-its-interactive-p": {
    "en": "The real BKP project website and its interactive probability modeling example.",
    "zh": "BKP 真实项目网站及其交互式概率建模示例。"
  },
  "text.actual-project-website": {
    "en": "Actual project website",
    "zh": "真实项目网站"
  },
  "text.shared-keyboard-designs": {
    "en": "Shared Keyboard Designs",
    "zh": "共享 Keyboard 设计"
  },
  "text.tools-for-phase-i-dose-finding-decision-tables-ope": {
    "en": "Tools for phase I dose-finding: decision tables, operating-characteristic simulations, delayed toxicity outcomes, and adaptive dose insertion. Includes an interactive Shiny application.",
    "zh": "用于 I 期剂量探索，提供决策表、运行特征模拟、延迟毒性结局处理与自适应剂量插入，并包含交互式 Shiny 应用。"
  },
  "text.research-implementation": {
    "en": "Research implementation",
    "zh": "研究代码实现"
  },
  "text.bayesian-optimization-via-exact-penalty": {
    "en": "Bayesian Optimization via Exact Penalty",
    "zh": "基于精确罚函数的贝叶斯优化"
  },
  "text.research-implementation-of-constrained-bayesian-op": {
    "en": "Research implementation of constrained Bayesian optimization using exact penalty functions. Companion code for the Technometrics paper.",
    "zh": "利用精确罚函数开展约束贝叶斯优化的研究实现，为 Technometrics 论文提供配套代码。"
  },
  "attribute.experience-jiangyan-zhao": {
    "en": "Experience | Jiangyan Zhao",
    "zh": "教育经历 | 赵江彦"
  },
  "html.education-amp-br-research-experience": {
    "en": "Education &amp;<br>research experience",
    "zh": "教育与<br>研究经历"
  },
  "text.academic-training-and-research-appointments": {
    "en": "Academic training and research appointments.",
    "zh": "学术训练与研究任职经历。"
  },
  "text.2024-07-present": {
    "en": "2024.07–present",
    "zh": "2024.07–至今"
  },
  "text.current-appointment": {
    "en": "Current appointment",
    "zh": "当前任职"
  },
  "text.postdoctoral-researcher-in-statistics": {
    "en": "Postdoctoral Researcher in Statistics",
    "zh": "统计学博士后"
  },
  "text.east-china-normal-university-shanghai-china": {
    "en": "East China Normal University · Shanghai, China",
    "zh": "华东师范大学 · 中国上海"
  },
  "text.combined-master-s-and-ph-d-program-in-statistics": {
    "en": "Combined Master’s and Ph.D. Program in Statistics",
    "zh": "统计学硕博连读"
  },
  "text.research-visits-at-technion-israel-institute-of-te": {
    "en": "Research visits at Technion – Israel Institute of Technology",
    "zh": "以色列理工学院访问经历"
  },
  "html.2021-07-2022-09-joint-ph-d-visiting-student-br-202": {
    "en": "2021.07–2022.09 · Joint Ph.D. visiting student<br>2020.01–2020.03 · Visiting Ph.D. student",
    "zh": "2021.07–2022.09 · 联合培养博士生<br>2020.01–2020.03 · 访问博士生"
  },
  "text.b-sc-in-mathematics-and-applied-mathematics": {
    "en": "B.Sc. in Mathematics and Applied Mathematics",
    "zh": "数学与应用数学学士"
  },
  "text.yantai-university-yantai-china": {
    "en": "Yantai University · Yantai, China",
    "zh": "烟台大学 · 中国烟台"
  },
  "attribute.teaching-jiangyan-zhao": {
    "en": "Teaching | Jiangyan Zhao",
    "zh": "教学经历 | 赵江彦"
  },
  "text.teaching-experience": {
    "en": "Teaching experience",
    "zh": "教学经历"
  },
  "text.biostatistics-teaching-assistance": {
    "en": "Biostatistics · Teaching assistance.",
    "zh": "生物统计学 · 助教经历。"
  },
  "text.teaching-assistant-appointments": {
    "en": "Teaching assistant appointments",
    "zh": "助教任职年份"
  },
  "html.teaching-assistant-br-em-biostatistics-em": {
    "en": "Teaching Assistant,<br><em>Biostatistics</em>",
    "zh": "助教，<br><em>生物统计</em>"
  },
  "text.responsible-for-computer-lab-sessions-and-course-q": {
    "en": "Responsible for computer lab sessions and course Q&A.",
    "zh": "负责上机实践教学与课程答疑。"
  },
  "text.computer-labs": {
    "en": "Computer labs",
    "zh": "上机实践"
  },
  "text.course-q-a": {
    "en": "Course Q&A",
    "zh": "课程答疑"
  },
  "attribute.contact-jiangyan-zhao": {
    "en": "Contact | Jiangyan Zhao",
    "zh": "联系方式 | 赵江彦"
  },
  "text.get-in-touch": {
    "en": "Get in touch",
    "zh": "联系方式"
  },
  "text.contact-details-and-academic-profiles": {
    "en": "Contact details and academic profiles.",
    "zh": "联系信息与学术主页。"
  },
  "text.email": {
    "en": "Email",
    "zh": "电子邮箱"
  },
  "html.east-china-normal-university-br-shanghai-china": {
    "en": "East China Normal University<br>Shanghai, China",
    "zh": "华东师范大学<br>中国上海"
  },
  "text.papers-citations": {
    "en": "Papers & citations",
    "zh": "论文与引用"
  },
  "text.software-code": {
    "en": "Software & code",
    "zh": "软件与代码"
  }
};
  const root = document.documentElement;
  const button = document.querySelector('.language-toggle');
  let language = 'en';
  try { if (localStorage.getItem('jiangyan-language') === 'zh') language = 'zh'; } catch (_) {}
  const setLanguage = next => {
    language = next === 'zh' ? 'zh' : 'en';
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    root.dataset.language = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const entry = translations[element.dataset.i18n];
      if (entry) element.textContent = entry[language];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const entry = translations[element.dataset.i18nHtml];
      if (entry) element.innerHTML = entry[language];
    });
    ['aria-label', 'alt', 'title', 'content', 'lang'].forEach(attribute => {
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
    window.dispatchEvent(new Event('languagechange'));
  };
  setLanguage(language);
  if (button) button.addEventListener('click', () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
    try { localStorage.setItem('jiangyan-language', language); } catch (_) {}
  });
})();
