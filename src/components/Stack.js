import React from "react";

import Group from "./Group";

const type = [
  "Databases",
  "Language",
  "Web Server",
  "Javascript UI Library",
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
  "open-source container-orchestration system",
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
          "Go is an open source programming language that makes it easy to build simple, reliable, and efficient software."
      }
    ]
  },
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: "react-original.svg",
        background: "#1c1c1c",
        type: type[3],
        about: "A JavaScript library for building user interfaces"
      },
      {
        name: "Redux",
        icon: "redux.svg",
        background: "#1c1c1c",
        type: type[3],
        about: "Predictable state container for JavaScript apps"
      },
      {
        name: "Gatsby",
        icon: "gatsby.png",
        background: "white",
        type: type[11],
        about: "A Static Site Generator for React"
      },
      {
        name: "Next.js",
        icon: "next.jslogo.svg",
        background: "white",
        type: type[8],
        about: "A small framework for server-rendered universal JavaScript apps"
      },
      {
        name: "Wordpress",
        icon: "wordpress-plain.svg",
        background: "white",
        type: type[23],
        about:
          "A semantic personal publishing platform with a focus on aesthetics, web standards, and usability"
      },
      {
        name: "Contentful",
        icon: "contentful.png",
        background: "black",
        type: type[26],
        about: "Manage content once, publish it anywhere"
      },
      {
        name: "Mocha",
        icon: "mocha-plain.svg",
        background: "white",
        type: type[20],
        about:
          "Simple, flexible, fun javascript test framework for node.js & the browser"
      },
      {
        name: "Jest",
        icon: "jest.png",
        background: "white",
        type: type[20],
        about: "Painless JavaScript Unit Testing"
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
      }
    ]
  },
  {
    title: "DevOps",
    items: [
      {
        name: "Docker",
        icon: "docker-original-wordmark.svg",
        background: "white",
        type: type[14],
        about:
          "An open source project to pack, ship and run any application as a lightweight container"
      },
      {
        name: "Kubernetes",
        icon: "kubernetes_logo.svg",
        background: "white",
        type: type[15],
        about:
          "An open-source container-orchestration system for automating computer application deployment, scaling, and management."
      },
      {
        name: "AWS",
        icon: "amazonwebservices-original-wordmark.svg",
        background: "white",
        type: type[16]
      },
      {
        name: "Heroku",
        icon: "heroku-plain.png",
        type: type[7],
        about:
          "Build, deliver, monitor and scale web apps and APIs with a trail blazing developer experience."
      },
      {
        name: "Git",
        icon: "git-plain.svg",
        background: "white",
        type: type[13],
        about: "Fast, scalable, distributed revision control system"
      },
      {
        name: "Firebase",
        icon: "firebase.png",
        background: "#039be6",
        type: type[9],
        about: "The Realtime App Platform"
      },
      {
        name: "Nginx",
        icon: "nginx-original.svg",
        background: "#333",
        type: type[2]
      },
      {
        name: "Apache",
        icon: "apache-original-wordmark.svg",
        background: "white",
        type: type[2]
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
          "CircleCI’s continuous integration and delivery platform helps software teams rapidly release code with confidence."
      }
    ]
  },
  {
    title: "Utilities",
    items: [
      {
        name: "Webpack",
        icon: "webpack-original.svg",
        background: "white",
        type: type[18],
        about: "A bundler for javascript and friends."
      },
      { name: "Linux", icon: "linux-original.svg", type: type[6] },
      {
        name: "Slack",
        icon: "slack-original.svg",
        background: "white",
        type: type[22],
        about: "Slack brings all your communication together in one place"
      },
      {
        name: "Trello",
        icon: "trello.png",
        background: "#007fc9",
        type: type[21],
        about: "Your entire project, in a single glance."
      },
      {
        name: "Visual Studio Code",
        icon: "vscode_icon.png",
        type: type[16],
        about:
          "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications."
      },
      {
        name: "VIM",
        icon: "vim-original.svg",
        type: type[16],
        about:
          "Highly configurable text editor built to enable efficient text editing"
      }
      //{ name: 'Ubuntu', icon: 'ubuntu-plain.svg', background: 'white', type: type[6], about: "The leading OS for PC, tablet, phone and cloud" },
      //{ name: 'Debian', icon: 'debian-plain.svg', background: 'white', type: type[6], about: "The Universal Operating System" },
    ]
  }
];

const Stack = props => (
  <div className="Stack">
    <div className="">
      <h2 className="Page__title">My Stack</h2>
    </div>
    {groups.map((group, index) => (
      <Group key={index} group={group} />
    ))}
  </div>
);

export default Stack;
