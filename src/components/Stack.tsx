import React from "react";

import Group from "./Group";
import type { StackGroup } from "../types/stack";

/**
 * What this site says its author does: "infrastructure automation, container
 * orchestration, and CI/CD pipeline optimization using tools like Kubernetes,
 * Terraform, AWS, and Ansible" (see about.tsx), backed by an AWS Certified
 * DevOps Engineer – Professional cert and a HashiCorp Ambassadorship.
 *
 * This list is kept to that. It previously carried 33 entries inherited from
 * the template this site was forked from — Wordpress, Contentful, Mocha, Jest,
 * Redux, Trello, Slack — which read as a front-end developer's toolkit and
 * made up 65% of the About page's height on a phone.
 */
const groups: StackGroup[] = [
  {
    title: "Cloud & Infrastructure",
    items: [
      {
        name: "AWS",
        icon: "amazonwebservices-original-wordmark.svg",
        background: "white",
        type: "Cloud platform",
        about:
          "Primary cloud platform. AWS Certified DevOps Engineer – Professional."
      },
      {
        name: "Terraform",
        icon: "terraform.svg",
        background: "white",
        type: "Infrastructure as code",
        about: "Declarative provisioning across cloud providers."
      },
      {
        name: "Kubernetes",
        icon: "kubernetes.svg",
        background: "white",
        type: "Container orchestration",
        about:
          "Open-source system for automating deployment, scaling and management of containerised applications."
      },
      {
        name: "Docker",
        icon: "docker-original-wordmark.svg",
        background: "white",
        type: "Containers",
        about: "Packaging applications and their dependencies into containers."
      },
      {
        name: "Linux",
        icon: "linux-original.svg",
        type: "Operating system",
        about: "The platform nearly all of this runs on."
      },
      {
        name: "Nginx",
        icon: "nginx-original.svg",
        background: "#333",
        type: "Web server / reverse proxy",
        about: "Serving, proxying and load balancing HTTP traffic."
      }
    ]
  },
  {
    title: "CI/CD & Automation",
    items: [
      {
        name: "Ansible",
        icon: "ansible.svg",
        background: "white",
        type: "Configuration management",
        about: "Agentless configuration management and orchestration."
      },
      {
        name: "GitHub Actions",
        icon: "githubactions.svg",
        background: "white",
        type: "Continuous integration",
        about: "Build, test and deploy pipelines alongside the code they ship."
      },
      {
        name: "CircleCI",
        icon: "circleci.svg",
        background: "white",
        type: "Continuous integration",
        about: "Hosted CI/CD for building and releasing on every commit."
      },
      {
        name: "Git",
        icon: "git-plain.svg",
        background: "white",
        type: "Version control",
        about: "Distributed version control."
      }
    ]
  },
  {
    title: "Languages & Scripting",
    items: [
      {
        name: "Python",
        icon: "python-original.svg",
        type: "Language",
        about: "Automation, tooling and glue code."
      },
      {
        name: "Go",
        icon: "go-original.svg",
        type: "Language",
        about:
          "Open source language for building simple, reliable and efficient software."
      },
      {
        name: "TypeScript",
        icon: "typescript-original.svg",
        type: "Language",
        about: "Typed JavaScript — including this site."
      },
      {
        name: "JavaScript",
        icon: "javascript-original.svg",
        background: "#f0db4f",
        type: "Language",
        about:
          "Lightweight, interpreted, object-oriented language with first-class functions."
      }
    ]
  },
  {
    title: "Data & Caching",
    items: [
      {
        name: "PostgreSQL",
        icon: "postgresql-original.svg",
        type: "Database",
        about: "A powerful, open source object-relational database system."
      },
      {
        name: "Redis",
        icon: "redis-original.svg",
        background: "white",
        type: "Cache / key-value store",
        about: "In-memory data store used for caching and queues."
      }
    ]
  }
];

const Stack = () => (
  <div className="Stack">
    <div className="">
      <h2 className="Page__title">My Stack</h2>
    </div>
    {groups.map(group => (
      <Group key={group.title} group={group} />
    ))}
  </div>
);

export default Stack;
