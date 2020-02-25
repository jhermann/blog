---
- toc: true
- description: Continuous Delivery in a nutshell.
- categories: [devops, automation]
---
# Continuous Delivery

<!--
title: "Continuous Delivery"
summary: "An introcution to the devops practice of CI/CD."
badges: true
comments: true
image: "images/devops.png"
categories:
    - "devops"
    - "continuous-delivery"
    - "automation"
-->

![DevOps Feedback Cycle]({{ site.baseurl }}/images/devops.png "DevOps Feedback Cycle")

> I wrote this back in September 2014 and never published it, but since it's an introductory piece it stands its ground, so let this serve as an initial post…


## CD in a Nutshell

A typical mission statement for Continuous Delivery is this…

> Our highest priority is to satisfy the customer,
> through early and continuous delivery of valuable software.

Continuous Delivery strives to improve the process of software delivery, by applying Continuous Deployment paired with automated testing and Continuous Integration. The goal is creating software developed to a high standard and easily packaged and deployed to test environments, resulting in the ability to rapidly, reliably and repeatedly push out enhancements and bug fixes to customers in small increments, at low risk and with minimal manual overhead.

CD is effective because it facilitates an explorative approach by providing real, valuable measurements of the output of the process, and feeding those results back into the process. It's the next logical step after applying Agile principles to development, by expanding the scope to the whole software life-cycle and all involved parties, from inception to going live and then maintaining the product for a substantial amount of time in fast-paced iterations.


## Some More Details

Continuous Delivery means that your software is production-ready from day one of your project (even when it's not “feature complete”), and that you can release to users on demand at the push of a button. There are several practices and patterns that enable this, but the foundation is formed in particular by excellent configuration management, continuous integration, and comprehensive automated testing at all levels. The key pattern is the deployment pipeline, which is effectively the extension of continuous integration out to production, whereby every check-in produces a release candidate which is assessed for its fitness to be released to production through a series of automated and then manual tests.

In order to be able to perform these validations against every build, your regression tests must be automated — both at the unit and acceptance level. Humans then perform tasks such as exploratory testing, usability testing, and showcases as later validations against builds that have already passed the automated tests. Builds can be deployed automatically on demand to testing, staging and production environments by the people authorized to do so — note that this means deployments are triggered by humans and performed by machines.

Through these practices, teams can get fast feedback on whether the software being delivered is useful, reduce the risk of release, and achieve a much more predictable, reliable process for software delivery. The backbone of CD is a culture in which everybody, if somehow involved in the delivery process, collaborates throughout the life-cycle of the product — developers, testers, infrastructure, operators, DBAs, managers, and customers alike.


## Where to Go From Here?

* [Jez Humble's Blog · Continuous Delivery](https://continuousdelivery.com/about/)
* [IT Revolution DevOps Blog](https://itrevolution.com/devops-blog/)
* [Devops Weekly Mailing List](https://www.devopsweekly.com/) (by [@garethr](https://twitter.com/garethr))
* [Team Topologies](https://teamtopologies.com/)
