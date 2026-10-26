/*
  Dados do portfólio.
  Para adicionar um item, copie um objeto existente e altere os textos.
  Para ocultar uma categoria da formação, deixe "items" vazio ou use visible: false.
  Imagens: coloque em assets/images e informe o caminho em "image" (ex.: "assets/images/projeto.png").
 */

const featuredProject = {
  name: "Plataforma de Projetos e TCCs do IFMS",
  category: "Projeto acadêmico · Trabalho de Conclusão de Curso (TCC)",
  description: "O projeto consiste no desenvolvimento de uma plataforma para registrar, relacionar e divulgar projetos e Trabalhos de Conclusão de Curso do IFMS Campus Nova Andradina. A proposta é facilitar o acesso às informações e dar mais visibilidade aos trabalhos acadêmicos desenvolvidos no campus. Participo do desenvolvimento da plataforma como parte do meu TCC, aplicando conhecimentos de programação e desenvolvimento de sistemas. O projeto também foi apresentado na FECINOVA e está sendo utilizado como base para a continuidade de atividades acadêmicas.",
  technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS", "shadcn/ui", 
    "Express", "Prisma", "PostgreSQL"],
  image: "assets/images/plataforma.png",
  github: "https://github.com/RebecaZaia/Trabalho-PTAC-e-PTAS-5semestre", 
};

const projectsData = [
  {
    name: "Calculadora de Redes IP",
    category: "Projeto acadêmico",
    description: "Aplicação desenvolvida para facilitar cálculos relacionados ao endereçamento IPv4 e à divisão de redes em sub-redes. O projeto permite praticar conceitos de redes de computadores por meio de uma ferramenta interativa.",
    technologies: ["JavaScript", "React Native", "Expo"],
    image: "assets/images/calculadoraIp.png",
    github: "https://snack.expo.dev/@rebeca.zaia/calculadora-de-redes-ip",
  },
  {
    name: "NFT Collection",
    category: "Projeto acadêmico",
    description: "O projeto apresenta uma coleção de NFTs em cards individuais, contendo imagem, nome, descrição, preço, tempo restante e informações sobre o criador. A interface também possui um Header com logo personalizada, efeitos de hover e animações de entrada.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Vite", "Animate.css"],
    image: "assets/images/image.png",
    github: "https://github.com/RebecaZaia/nft-card",
  }
];

const educationData = [
  {
    title: "Formação",
    icon: "graduation-cap",
    color: "lilac",
    visible: true,
    items: [
      { 
        name: "Curso Técnico em Informática", 
        meta: "Instituto Federal de Mato Grosso do Sul (IFMS-NA) · 2024 a 2026", 
        description: "Formação profissionalizante voltada ao desenvolvimento de conhecimentos em informática e tecnologia, com atividades práticas envolvendo programação, desenvolvimento web, banco de dados, redes de computadores e outras áreas da computação." 
      }
    ]
  },
  {
    title: "Feiras e eventos",
    icon: "calendar-days",
    color: "pink",
    visible: true,
    items: [
      { 
        name: "FECINOVA", 
        meta: "Desenvolvimento de uma plataforma para registrar, relacionar e publicizar os projetos e TCCs no âmbito do IFMS Campus Nova Andradina · 2025", 
        description: "O projeto busca organizar e divulgar os trabalhos acadêmicos desenvolvidos no campus, facilitando o acesso às informações sobre projetos e TCCs." 
      }
    ]
  },
  {
    title: "Cursos e certificados",
    icon: "award",
    color: "mint",
    visible: true,
    items: [
      { 
        name: "Algoritmos e Lógica de Programação - O Curso COMPLETO", 
        meta: "Udemy · 31 horas · 2024", 
        description: "Curso introdutório de programação que abordou fundamentos de lógica e algoritmos, com contato inicial com linguagens como C, C++, C#, Java e Python. Foi uma das experiências que despertaram meu interesse pela programação e pelo desenvolvimento de sistemas." 
      },
      { 
        name: "Informática 4.0 Interativo", 
        meta: "ESM Informética · 90 horas · 2023", 
        description: "Curso voltado ao aprofundamento de conhecimentos em informática, incluindo fundamentos de hardware, utilização do computador, ferramentas de escritório e práticas de digitação." 
      },
      { 
        name: "Inglês", 
        meta: "Wizard · 2018 a 2026", 
        description: "Conhecimentos de inglês, com compreensão de conteúdos e vocabulário relacionados ao idioma." 
      }
    ]
  },
  {
    title: "Atividades acadêmicas",
    icon: "book-open",
    color: "lilac",
    visible: true,
    items: [
      { 
        name: "Olimpíada de Matemática", 
        meta: "2022 e 2024", 
        description: "Participei da 17ª Olimpíada Brasileira de Matemática das Escolas Públicas - OBMEP 2022, e conquistei o Certificado de Menção Honrosa. Também, em 2024, estive envolvida ao Projeto de Extensão Apoio às Olimpíadas de Matemática." 
      },
      { 
        name: "Olimpíada Brasileira de Informática (OBI)", 
        meta: "2024", 
        description: 
          "Participei da XXVI Olimpíada Brasileira de Informática (OBI2024) e Competição Feminina da mesma."
      },
    ]
  }
];

const skillsData = [
  { 
    title: "Desenvolvimento web", 
    icon: "code-2", 
    color: "lilac", 
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ] 
  },
  { 
    title: "Desenvolvimento mobile", 
    icon: "code", 
    color: "pink", 
    tags: [
      "React Native",
      "Expo"
    ] 
  },
  { 
    title: "Banco de dados", 
    icon: "database", 
    color: "mint", 
    tags: [
      "PostgreSQL",
      "Prisma",
      "SQL",
      "MySQL"
    ] 
  },
  { 
    title: "Ferramentas", 
    icon: "wrench", 
    color: "lilac", 
    tags: [
      "Git", 
      "GitHub", 
      "VS Code", 
      "Packet Tracer"
    ] 
  },
  { 
    title: "Bibliotecas e componentes", 
    icon: "wrench", 
    color: "pink", 
    tags: [
      "shadcn/ui", 
      "Animate.css"
    ] 
  },
  { 
    title: "Em aprendizado", 
    icon: "sprout", 
    color: "mint", 
    tags: [
      "Progressive Web Apps (PWA)", 
      "Aprimoramento em desenvolvimento web e mobile"
    ] 
  }
];

/* ===== Componentes ===== */

function isPlaceholder(text) {
  return typeof text === "string" && text.trim().startsWith("[");
}

function textClass(text) {
  return isPlaceholder(text) ? ' class="placeholder-text"' : "";
}

function createMedia(project) {
  if (project.image) {
    return `<div class="media-placeholder"><img src="${project.image}" alt="Captura de tela do projeto ${project.name}" loading="lazy"></div>`;
  }
  return `
    <div class="media-placeholder" aria-hidden="true">
      <span><i data-lucide="image"></i>[Espaço para screenshot do projeto]</span>
    </div>`;
}

function createTags(list, color = "lilac") {
  return `<ul class="tag-list">${list.map((item) => `<li class="tag tag-${color}">${item}</li>`).join("")}</ul>`;
}

function createProjectLinks(project) {
  const github = project.github || "#";
  return `
    <div class="project-links">
      <a class="project-link" href="${github}" target="_blank" rel="noopener"><i data-lucide="github"></i> ${project.github ? "Repositório" : "[Link para o GitHub.]"}</a>
    </div>`;
}

function createFeaturedProject(project) {
  return `
    <article class="card featured-project reveal" data-animation="fadeInUp">
      ${createMedia(project)}
      <div class="featured-body">
        <span class="featured-label"><i data-lucide="star"></i> Projeto em destaque</span>
        <span class="tag tag-mint">${project.category}</span>
        <h3>${project.name}</h3>
        <p${textClass(project.description)}>${project.description}</p>
        ${createTags(project.technologies)}
        ${createProjectLinks(project)}
      </div>
    </article>`;
}

function createProjectCard(project) {
  return `
    <article class="card project-card reveal" data-animation="fadeInUp">
      ${createMedia(project)}
      <div class="project-body">
        <span class="tag tag-pink">${project.category}</span>
        <h3>${project.name}</h3>
        <p class="project-description${isPlaceholder(project.description) ? " placeholder-text" : ""}">${project.description}</p>
        ${createTags(project.technologies)}
        ${createProjectLinks(project)}
      </div>
    </article>`;
}

function createEducationCard(item) {
  return `
    <article class="card education-card reveal" data-animation="fadeInUp">
      <h4>${item.name}</h4>
      ${item.meta ? `<p class="education-meta">${item.meta}</p>` : ""}
      ${item.description ? `<p${textClass(item.description)}>${item.description}</p>` : ""}
    </article>`;
}

function createEducationGroup(group) {
  return `
    <div class="education-group">
      <h3 class="reveal" data-animation="fadeIn"><span class="icon-badge icon-${group.color}"><i data-lucide="${group.icon}"></i></span>${group.title}</h3>
      <div class="timeline">${group.items.map(createEducationCard).join("")}</div>
    </div>`;
}

function createSkillCard(skill) {
  return `
    <article class="card skill-card reveal" data-animation="fadeInUp">
      <span class="icon-badge icon-${skill.color}"><i data-lucide="${skill.icon}"></i></span>
      <h3>${skill.title}</h3>
      <ul class="tag-list">${skill.tags.map((tag) => `<li class="tag${isPlaceholder(tag) ? " placeholder-text" : ""}">${tag}</li>`).join("")}</ul>
    </article>`;
}

function renderSection(containerId, html) {
  const container = document.getElementById(containerId);
  if (container) container.innerHTML = html;
}

function renderPortfolioContent() {
  renderSection("featured-project", createFeaturedProject(featuredProject));
  renderSection("projects-grid", projectsData.map(createProjectCard).join(""));
  renderSection(
    "education-groups",
    educationData.filter((group) => group.visible && group.items.length > 0).map(createEducationGroup).join("")
  );
  renderSection("skills-grid", skillsData.map(createSkillCard).join(""));
}
