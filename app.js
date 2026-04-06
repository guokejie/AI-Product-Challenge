const translations = {
  zh: {
    lang: "zh-CN",
    pageTitle: "AI Product",
    pageDescription: "一个用于记录已开发 AI 产品的静态作品集页面。",
    heroEyebrow: "精选作品",
    heroTitle: "AI Product",
    heroText: "挑战一年 vibe coding 20 个 AI 产品。",
    archiveProgress: "归档进度",
    portfolioIndex: "作品索引",
    archiveTitle: "项目归档",
    openProject: "打开项目",
    projectListAria: "AI 产品项目列表",
    paginationAria: "项目分页",
    pageIndicator: "第 {current} / {total} 页",
    visibleIndicator: "当前展示 {count} 个项目",
    prev: "上一页",
    next: "下一页",
    languageToggle: "中文 / EN",
    languageToggleAria: "切换语言",
    themeLight: "浅色模式",
    themeDark: "深色模式",
    themeToggleToDark: "切换到深色模式",
    themeToggleToLight: "切换到浅色模式",
    paginationJump: "跳转到第 {page} 页",
    statuses: {
      Shipped: "已上线",
      Prototype: "原型",
      Internal: "内部",
      Mock: "模拟",
    },
    projects: [
      {
        title: "Raccoon Vocab",
        description: "面向语言学习的词汇产品，聚焦记忆节奏、练习反馈和轻量复习体验。",
        tags: ["iOS", "SwiftUI", "学习"],
      },
      {
        title: "Twitter Frontend",
        description: "社交内容流原型，尝试信息密度、互动节奏和轻量创作的页面组织方式。",
        tags: ["Web", "前端", "Feed"],
      },
      {
        title: "Raccoon API",
        description: "为词汇产品提供服务端能力的接口项目，承载内容、同步与业务编排逻辑。",
        tags: ["后端", "API", "Node"],
      },
      {
        title: "Focus Timer",
        description: "一个用于番茄专注和任务回顾的实验产品，强调快速进入和数据轻记录。",
        tags: ["效率", "计时器", "模拟"],
      },
      {
        title: "Prompt Lab",
        description: "用于保存、测试和对比提示词效果的轻量工具，适合作为 AI 工作流组件。",
        tags: ["AI", "提示词", "实验"],
      },
      {
        title: "Landing Forge",
        description: "一个帮助快速生成产品落地页结构和视觉风格的静态页面生成器概念。",
        tags: ["落地页", "生成器", "模拟"],
      },
      {
        title: "Habit Canvas",
        description: "围绕习惯追踪与每周回顾的概念型产品，强调轻量记录和连续反馈。",
        tags: ["习惯", "仪表盘", "模拟"],
      },
      {
        title: "Voice Notes AI",
        description: "将语音记录整理为结构化要点的效率工具，用于个人研究和项目梳理。",
        tags: ["AI", "语音", "笔记"],
      },
      {
        title: "Studio Frame",
        description: "用于快速搭建产品展示页与案例页的实验模板库，强调简洁的视觉和清晰叙述。",
        tags: ["作品集", "模板", "Web"],
      },
    ],
  },
  en: {
    lang: "en",
    pageTitle: "AI Product",
    pageDescription: "A static portfolio page for documenting AI products already built.",
    heroEyebrow: "Selected Works",
    heroTitle: "AI Product",
    heroText: "Challenge: build 20 AI products in one year with vibe coding.",
    archiveProgress: "Archive Progress",
    portfolioIndex: "Portfolio Index",
    archiveTitle: "Project Archive",
    openProject: "Open project",
    projectListAria: "AI product project list",
    paginationAria: "Project pagination",
    pageIndicator: "Page {current} / {total}",
    visibleIndicator: "Showing {count} projects",
    prev: "Prev",
    next: "Next",
    languageToggle: "EN / 中文",
    languageToggleAria: "Switch language",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    themeToggleToDark: "Switch to dark mode",
    themeToggleToLight: "Switch to light mode",
    paginationJump: "Go to page {page}",
    statuses: {
      Shipped: "Shipped",
      Prototype: "Prototype",
      Internal: "Internal",
      Mock: "Mock",
    },
    projects: [
      {
        title: "Raccoon Vocab",
        description:
          "A vocabulary product for language learners focused on memory rhythm, practice feedback, and lightweight review.",
        tags: ["iOS", "SwiftUI", "Learning"],
      },
      {
        title: "Twitter Frontend",
        description:
          "A social feed prototype exploring information density, interaction rhythm, and lightweight creation flows.",
        tags: ["Web", "Frontend", "Feed"],
      },
      {
        title: "Raccoon API",
        description:
          "A backend interface project powering the vocabulary product with content, sync, and orchestration capabilities.",
        tags: ["Backend", "API", "Node"],
      },
      {
        title: "Focus Timer",
        description:
          "An experimental productivity product for pomodoro focus sessions and lightweight task reviews.",
        tags: ["Productivity", "Timer", "Mock"],
      },
      {
        title: "Prompt Lab",
        description:
          "A lightweight tool for saving, testing, and comparing prompts as part of an AI workflow.",
        tags: ["AI", "Prompt", "Experiment"],
      },
      {
        title: "Landing Forge",
        description:
          "A concept for rapidly generating landing-page structures and visual directions for new products.",
        tags: ["Landing Page", "Generator", "Mock"],
      },
      {
        title: "Habit Canvas",
        description:
          "A concept product for habit tracking and weekly reflection with lightweight logging and continuity feedback.",
        tags: ["Habit", "Dashboard", "Mock"],
      },
      {
        title: "Voice Notes AI",
        description:
          "A productivity tool that turns voice captures into structured notes for research and project planning.",
        tags: ["AI", "Voice", "Notes"],
      },
      {
        title: "Studio Frame",
        description:
          "An experimental template library for quickly building product showcases and case-study pages with clear storytelling.",
        tags: ["Portfolio", "Template", "Web"],
      },
    ],
  },
};

const projects = [
  {
    year: "2026",
    status: "Shipped",
    url: "../Raccoon%20Vocab/",
  },
  {
    year: "2026",
    status: "Prototype",
    url: "../twitter/frontend/",
  },
  {
    year: "2026",
    status: "Internal",
    url: "../raccoon-vocab-server/",
  },
  {
    year: "2025",
    status: "Mock",
    url: "https://example.com/focus-timer",
  },
  {
    year: "2025",
    status: "Mock",
    url: "https://example.com/prompt-lab",
  },
  {
    year: "2025",
    status: "Mock",
    url: "https://example.com/landing-forge",
  },
  {
    year: "2025",
    status: "Prototype",
    url: "https://example.com/habit-canvas",
  },
  {
    year: "2025",
    status: "Internal",
    url: "https://example.com/voice-notes-ai",
  },
  {
    year: "2024",
    status: "Shipped",
    url: "https://example.com/studio-frame",
  },
];

const themeStorageKey = "vibe-showcase-theme";
const localeStorageKey = "vibe-showcase-locale";
const pageSize = 6;

let currentPage = 1;
let currentLocale = getInitialLocale();
let currentTheme = getInitialTheme();

const html = document.documentElement;
const metaDescription = document.querySelector("#page-description");
const grid = document.querySelector("#project-grid");
const template = document.querySelector("#project-card-template");
const coverageLabel = document.querySelector("#coverage-label");
const coverageRatio = document.querySelector("#coverage-ratio");
const coverageBar = document.querySelector("#coverage-bar");
const paginationNumbers = document.querySelector("#pagination-numbers");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const progressTrack = document.querySelector(".progress-track");
const languageToggle = document.querySelector("#language-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const pageIndicator = document.querySelector("#page-indicator");
const visibleIndicator = document.querySelector("#visible-indicator");

function getInitialLocale() {
  const savedLocale = localStorage.getItem(localeStorageKey);
  if (savedLocale && translations[savedLocale]) {
    return savedLocale;
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function t(key) {
  return translations[currentLocale][key];
}

function format(templateText, values) {
  return templateText.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function getLocalizedProjects() {
  const localizedEntries = translations[currentLocale].projects;
  return projects.map((project, index) => ({
    ...project,
    ...localizedEntries[index],
  }));
}

function getCoverage(projectList) {
  const coverage = Math.min((projectList.length / 20) * 100, 100);
  return Math.round(coverage);
}

function updateTheme() {
  html.dataset.theme = currentTheme;
  themeToggle.textContent = currentTheme === "dark" ? t("themeLight") : t("themeDark");
  themeToggle.setAttribute(
    "aria-label",
    currentTheme === "dark" ? t("themeToggleToLight") : t("themeToggleToDark")
  );
}

function updateStaticCopy() {
  html.lang = t("lang");
  document.title = t("pageTitle");
  metaDescription.setAttribute("content", t("pageDescription"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  prevButton.textContent = t("prev");
  nextButton.textContent = t("next");
  languageToggle.textContent = t("languageToggle");
  languageToggle.setAttribute("aria-label", t("languageToggleAria"));
  updateTheme();
}

function updateOverview(projectList) {
  const coverage = getCoverage(projectList);

  coverageLabel.textContent = `${coverage}%`;
  coverageRatio.textContent = `${projectList.length} / 20`;
  coverageBar.style.width = `${coverage}%`;
  progressTrack.setAttribute("aria-valuenow", String(coverage));
}

function buildCard(project, index) {
  const card = template.content.firstElementChild.cloneNode(true);

  card.href = project.url;
  card.style.animationDelay = `${index * 60}ms`;
  card.querySelector(".project-year").textContent = project.year;
  card.querySelector(".project-status").textContent = t("statuses")[project.status];
  card.querySelector(".project-title").textContent = project.title;
  card.querySelector(".project-description").textContent = project.description;
  card.querySelector(".project-link").textContent = t("openProject");

  const tags = card.querySelector(".project-tags");
  project.tags.forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "project-tag";
    pill.textContent = tag;
    tags.appendChild(pill);
  });

  return card;
}

function renderPagination(totalPages) {
  paginationNumbers.textContent = "";

  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "pagination-number";
    button.textContent = String(page);
    button.setAttribute("aria-label", format(t("paginationJump"), { page }));

    if (page === currentPage) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "page");
    }

    button.addEventListener("click", () => {
      currentPage = page;
      renderProjects();
    });

    paginationNumbers.appendChild(button);
  }

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function renderProjects() {
  const localizedProjects = getLocalizedProjects();
  const totalPages = Math.ceil(localizedProjects.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const currentProjects = localizedProjects.slice(start, start + pageSize);
  const fragment = document.createDocumentFragment();

  grid.textContent = "";
  currentProjects.forEach((project, index) => {
    fragment.appendChild(buildCard(project, index));
  });

  grid.appendChild(fragment);
  pageIndicator.innerHTML = format(t("pageIndicator"), {
    current: `<span id="current-page">${currentPage}</span>`,
    total: `<span id="total-pages">${totalPages}</span>`,
  });
  visibleIndicator.innerHTML = format(t("visibleIndicator"), {
    count: `<span id="visible-count">${currentProjects.length}</span>`,
  });
  renderPagination(totalPages);
  updateOverview(localizedProjects);
}

function rerender() {
  updateStaticCopy();
  renderProjects();
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderProjects();
  }
});

nextButton.addEventListener("click", () => {
  const totalPages = Math.ceil(getLocalizedProjects().length / pageSize);
  if (currentPage < totalPages) {
    currentPage += 1;
    renderProjects();
  }
});

languageToggle.addEventListener("click", () => {
  currentLocale = currentLocale === "zh" ? "en" : "zh";
  localStorage.setItem(localeStorageKey, currentLocale);
  rerender();
});

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem(themeStorageKey, currentTheme);
  updateTheme();
});

updateTheme();
rerender();
