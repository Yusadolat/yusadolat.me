---
model: post
title: Install Terraform on Linux with Script
description: How to install Terraform on Linux with just a single script.
path: install-terraform-with-script
thumbnail: /img/blog-post-29.jpg
date: 2020-11-23T19:58:30.339Z
published: true
style: medium-img
tags:
  - Teraform
  - Linux
---
Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can help with multi-cloud by having one workflow for all clouds. The infrastructure Terraform manages can be hosted on public clouds like Amazon Web Services, Microsoft Azure, and Google Cloud Platform, or on-prem in private clouds such as VMWare vSphere, OpenStack, or CloudStack. Terraform treats infrastructure as code (IaC) so you never have to worry about your infrastructure drifting away from its desired configuration. 

Terraform allows you to:

* preview of infrastructure changes before they are implemented.
* integrates a very large number of providers.
* run infrastructure Windows, Linux and Mac

Let's have a look at the install Terraform on Linux with just a single script. This script automates the installation terraform and all you need to do this script in your Linux terminal.

`TERRAFORM`*`VERSION="0.13.5" #Update with your desired version of Terraform`*

*`curl -Os https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform`*

``

How it works:

* The script download version Terraform set at the beginning of the script.
* Download the Terraform package by checking the checksum and unzip it to user local directory 

To verify the Installation, type **terraform** -version 

Wowza! You just installed Terraform on your Linux machine with a script.