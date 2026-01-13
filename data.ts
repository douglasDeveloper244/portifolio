import { FaNodeJs, FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

export const USER_DATA = {
  
  name: "Douglas Ribeiro",
  role: "Desenvolvedor Full Stack",
  avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFa4fR9B9WDVQ/profile-displayphoto-scale_200_200/B4DZu0UXcFJQAY-/0/1768256797317?e=1769644800&v=beta&t=0-1c1Vo8xhr_mtE14UAnwtZi8y53KG3C2e5i40-3mpI",
  bio: "Me chamo Douglas Ribeiro, Programador Full Stack, atuando com Node.js e Python no desenvolvimento de APIs REST e RESTful, além de interfaces web utilizando JavaScript, React, HTML e CSS. Trabalho na criação de regras de negócio, integração de sistemas e desenvolvimento de aplicações completas, sempre focando em código limpo, organizado e escalável. Atualmente, sigo em aprendizado contínuo aprofundando conhecimentos em arquitetura de software, boas práticas e desenvolvimento full stack. Busco oportunidades no mercado para evoluir profissionalmente e entregar soluções de qualidade.",
  email: "douglasdeveloper2025@gmail.com",
  whatsapp: "5531992754997",
  location: "Belo Horizonte - MG - Brasil",
  socials: {
    github: "https://github.com/douglasdeveloper244",
    linkedin: "https://www.linkedin.com/in/douglas-ribeiro-6a68542a8/",
    instagram: "https://www.instagram.com/eudouglasribeiiro/",
    twitter: "https://x.com/DouglasRib37902"
  },
  skills: [
    { 
      name: "Node.js", 
      level: 100, 
      Icon: FaNodeJs,
      color: "#339933" 
    },
    { 
      name: "Python", 
      level: 100, 
      Icon: FaPython, 
      color: "#3776AB" 
    },
    { 
      name: "React", 
      level: 100, 
      Icon: FaReact, 
      color: "#61DAFB" 
    },
    { 
      name: "JavaScript", 
      level: 100, 
      Icon: FaJs, 
      color: "#F7DF1E" 
    },
    { 
      name: "HTML", 
      level: 100, 
      Icon: FaHtml5, 
      color: "#E34F26" 
    },
    { 
      name: "CSS", 
      level: 100, 
      Icon: FaCss3Alt, 
      color: "#1572B6" 
    }
  ],
  education: [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário Una",
      period: "Cursando",
      icon: "fas fa-graduation-cap"
    },
    {
      degree: "AWS Academy Graduate - Cloud Foundations",
      institution: "Amazon Web Services (AWS)",
      period: "concluído em nov de 2025",
      icon: "fas fa-certificate"
    }
  ],
  projects: [
    {
      title: "API RESTful de Gestão",
      description: "Desenvolvimento de uma API robusta utilizando Node.js e Express, com autenticação JWT e integração com banco de dados.",
      tags: ["Node.js", "PostgreSQL", "JWT"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Interface Web Responsiva",
      description: "Criação de uma Single Page Application (SPA) moderna com React, focada em UX/UI e alta performance.",
      tags: ["React", "Tailwind", "JavaScript"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "#"
    },
    {
      title: "Automação com Python",
      description: "Scripts de automação e processamento de dados para otimização de regras de negócio internas.",
      tags: ["Python", "Automation", "Data"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      link: "#"
    }
  ],
  experience: [
      {
        company: "mypetone",
        role: "Programador",
        period: "Jun 2023 - Atual",
        description: "Belo Horizonte, MG."
      },
      {
        company: "Integral Laboratórios",
        role: "Logistica Laboratório",
        period: "Ago 2022 - Fev 2023",
        description: "Contagem, MG."
      },
      {
        company: "Pet shop independencia LTDA",
        role: "Vendedor | Entregador",
        period: "Jul 2021 - Ago 2022",
        description: "Ibirité, MG."
      },
      {
        company: "Real Alimento - Granja Brasilia",
        role: "Assistente de produção",
        period: "Ago 2017 - Jun 2021",
        description: "Ibirité, MG."
      }
    ]
};