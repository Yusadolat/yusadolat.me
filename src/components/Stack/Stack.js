import React from "react";

import Group from "../Group";

const type = [
  "Databases",
  "Language",
  "Web Server",
  "Javascript UI Libraries",
  "Cloud Hosting",
  "CSS Pre-processor",
  "Operating System",
  "Platform as a Service",
  "Framework (Full Stack)",
  "Realtime Backend/API",
  "Microframework (Backend)",
  "Static Site Generator",
  "Code Collaboration & VCS",
  "Version Control System",
  "Virtual Machine Platforms and containers",
  "Text Editor",
  "Infrastructure as a service",
  "Continuous Integration",
  "JS Build Tool/JS Task Runner",
  "Javascript Compiler",
  "JS Testing Framework",
  "Project Management",
  "Group Chat & Notifications",
  "CMS",
  "Query Languages",
  "JS MVC Framework",
  "Cloud Content Management System"
];
const groups = [
  {
    title: "Languages",
    items: [
      {
        name: "Javascript",
        icon: "javascript-original.svg",
        background: "#f0db4f",
        type: type[1],
        about:
          "Lightweight, interpreted, object-oriented language with first-class functions"
      },
      {
        name: "Python",
        icon: "python-original.svg",
        type: type[1],
        about:
          "Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java."
      },
      {
        name: "Golang",
        icon: "go-original.svg",
        type: type[1],
        about:
          "A statically typed, compiled programming language designed for building simple, reliable, and efficient software"
      },
      {
        name: "Bash",
        icon: "bash-original.svg",
        background: "white",
        type: type[1],
        about:
          "Unix shell and command language for scripting and automation"
      }
    ]
  },
  {
    title: "Application Development",
    items: [
      {
        name: "React",
        icon: "react-original.svg",
        background: "#1c1c1c",
        type: type[3],
        about: "A JavaScript library for building user interfaces"
      },
      {
        name: "Next.js",
        icon: "next.jslogo.svg",
        background: "white",
        type: type[8],
        about: "A framework for server-rendered React applications"
      },
      {
        name: "Gatsby",
        icon: "gatsby.png",
        background: "white",
        type: type[11],
        about: "A Static Site Generator for React"
      }
    ]
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node",
        icon: "nodejs-original.svg",
        type: type[8],
        about:
          "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"
      },
      {
        name: "Express",
        icon: "express-original.svg",
        background: "white",
        type: type[10],
        about: "Infraestructura web rápida, minimalista y flexible para Node.js"
      },
      {
        name: "MySQL",
        icon: "mysql-original-wordmark.svg",
        background: "white",
        type: type[0],
        about: "The world's most popular open source database"
      },
      {
        name: "MongoDB",
        icon: "mongodb-original.svg",
        background: "#40474f",
        type: type[0],
        about: "The database for giant ideas"
      },
      {
        name: "PostgreSQL",
        icon: "postgresql-original.svg",
        type: type[0],
        about: "A powerful, open source object-relational database system"
      },
      {
        name: "GraphQL",
        icon: "graphql.svg",
        type: type[24],
        background: "white",
        about: "A data query language and runtime"
      },
      {
        name: "Redis",
        icon: "redis-original.svg",
        type: "Cache & Message Broker",
        about: "In-memory data structure store, used as cache, message broker, and database"
      },
      {
        name: "Kafka",
        icon: "apachekafka-original.svg",
        background: "white",
        type: "Message Queue",
        about: "Distributed event streaming platform for high-performance data pipelines and streaming analytics"
      },
      {
        name: "RabbitMQ",
        icon: "rabbitmq.svg",
        background: "white",
        type: "Message Queue",
        about: "Open source message broker that supports multiple messaging protocols"
      }
    ]
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        name: "Kubernetes",
        icon: "kubernetes-plain.svg",
        background: "white",
        type: "Container Orchestration",
        about:
          "Production-Grade Container Orchestration - automated container deployment, scaling, and management"
      },
      {
        name: "Docker",
        icon: "docker-original-wordmark.svg",
        background: "white",
        type: type[14],
        about:
          "An open source project to pack, ship and run any application as a lightweight container"
      },
      {
        name: "Terraform",
        icon: "terraform-original.svg",
        background: "white",
        type: "Infrastructure as Code",
        about:
          "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently"
      },
      {
        name: "Ansible",
        icon: "ansible-original.svg",
        background: "white",
        type: "Configuration Management",
        about:
          "Simple, agentless IT automation that anyone can use for app deployment, configuration management, and orchestration"
      },
      {
        name: "AWS",
        icon: "amazonwebservices-original-wordmark.svg",
        background: "white",
        type: type[16],
        about: "Amazon Web Services - comprehensive cloud computing platform"
      },
      {
        name: "Google Cloud",
        icon: "googlecloud-original.svg",
        background: "white",
        type: type[16],
        about: "Google Cloud Platform - suite of cloud computing services"
      },
      {
        name: "Azure",
        icon: "azure-original.svg",
        background: "white",
        type: type[16],
        about: "Microsoft Azure - cloud computing service for building, testing, deploying, and managing applications"
      },
      {
        name: "Git",
        icon: "git-plain.svg",
        background: "white",
        type: type[13],
        about: "Fast, scalable, distributed revision control system"
      },
      {
        name: "GitHub Actions",
        icon: "github-original.svg",
        background: "white",
        type: type[17],
        about: "Automate, customize, and execute software development workflows in GitHub"
      },
      {
        name: "GitLab CI",
        icon: "gitlab-original.svg",
        background: "white",
        type: type[17],
        about: "Built-in continuous integration, delivery, and deployment"
      },
      {
        name: "Jenkins",
        icon: "jenkins-original.svg",
        background: "white",
        type: type[17],
        about: "Leading open source automation server for building, deploying and automating projects"
      },
      {
        name: "Travis CI",
        icon: "travisci.png",
        type: type[17],
        about:
          "A hosted continuous integration service for open source and private projects"
      },
      {
        name: "Circle CI",
        icon: "circleci.svg",
        background: "white",
        type: type[17],
        about:
          "CircleCI's continuous integration and delivery platform helps software teams rapidly release code with confidence"
      },
      {
        name: "ArgoCD",
        icon: "argocd.png",
        background: "white",
        type: "GitOps",
        about: "Declarative GitOps continuous delivery tool for Kubernetes"
      },
      {
        name: "Nginx",
        icon: "nginx-original.svg",
        background: "#333",
        type: type[2],
        about: "High-performance HTTP server and reverse proxy"
      }
    ]
  },
  {
    title: "Monitoring & Observability",
    items: [
      {
        name: "Prometheus",
        icon: "prometheus-original.svg",
        background: "white",
        type: "Monitoring",
        about: "Open-source systems monitoring and alerting toolkit"
      },
      {
        name: "Grafana",
        icon: "grafana-original.svg",
        background: "white",
        type: "Visualization",
        about: "Open source analytics and interactive visualization web application"
      },
      {
        name: "Datadog",
        icon: "datadog.png",
        background: "white",
        type: "Monitoring",
        about: "Monitoring and analytics platform for cloud-scale applications"
      },
      {
        name: "ELK Stack",
        icon: "elasticsearch.svg",
        background: "white",
        type: "Logging",
        about: "Elasticsearch, Logstash, and Kibana for search, analysis, and visualization"
      },
      {
        name: "New Relic",
        icon: "newrelic.png",
        background: "white",
        type: "APM",
        about: "Application Performance Monitoring and Observability platform"
      }
    ]
  },
  {
    title: "Infrastructure & Tools",
    items: [
      {
        name: "Helm",
        icon: "helm.svg",
        background: "white",
        type: "Package Manager",
        about: "The package manager for Kubernetes - helps define, install, and upgrade Kubernetes applications"
      },
      {
        name: "Vault",
        icon: "vault.png",
        background: "white",
        type: "Secrets Management",
        about: "HashiCorp Vault - secure, store and tightly control access to tokens, passwords, certificates, and encryption keys"
      },
      {
        name: "Linux",
        icon: "linux-original.svg",
        type: type[6],
        about: "Open source Unix-like operating system - foundation for modern infrastructure"
      },
      {
        name: "Ubuntu",
        icon: "ubuntu-plain.svg",
        background: "white",
        type: type[6],
        about: "Popular Linux distribution for cloud and server workloads"
      },
      {
        name: "Visual Studio Code",
        icon: "vscode.png",
        background: "#474747",
        type: type[15],
        about: "Modern source code editor with built-in support for debugging, Git control, and extensions"
      },
      {
        name: "Slack",
        icon: "slack-original.svg",
        background: "white",
        type: type[22],
        about: "Team collaboration and communication platform"
      },
      {
        name: "Jira",
        icon: "jira-original.svg",
        background: "white",
        type: type[21],
        about: "Issue tracking and project management tool for agile teams"
      }
    ]
  }
];

export default props => (
  <div className="Stack">
    <div className="">
      <h2 className="Page__title"> My Stack </h2> {}{" "}
    </div>{" "}
    {groups.map((group, index) => (
      <Group key={index} group={group} />
    ))}{" "}
  </div>
);
