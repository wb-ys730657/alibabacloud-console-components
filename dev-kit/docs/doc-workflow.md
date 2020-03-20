---
name: doc-workflow
zhName: 文档套件综述
sort: -1
tags:
  dev-kit: true
  documentation: true
---

# 文档套件综述

`console-components-dev-kit`(后面简称 cc-dev-kit)是一套文档开发套件，将`console-components`总结的文档开发工作流程沉淀为一套通用工具，服务于 console-components 的物料贡献者。

它的核心思路是：

- 以用户为导向：通过文档来透出开发用例、源码类型和注释，充分挖掘它们的用户价值
- 以文档为核心：将代码开发与文档编写的工作和谐统一，形成一套以文档为核心的物料开发工作流
- 以工具为支撑：提供工具来优化文档维护的体验，服务于公共物料的开发者

## 以用户为导向：通过文档来透出开发用例、源码类型和注释

对于公共物料的开发，**文档中的 Demo 示例、API 接口说明**对于使用者来说至关重要。用户学习使用一个新物料的时候，直接看这两者就是最节省时间的上手方式。

但是在实际操作过程中，Demo 示例、组件接口文档常常非常简略，甚至过时。因为这些 demo 示例代码、接口说明维护在文档中，它们是只为文档而存在的，只有编写文档的时候会修改它们。

如果把文档编写、示例编写、API 说明编写作为开发的**后续任务**，而不是**想办法将他们融入开发的过程中**，那么文档内容的进度很快就会落后于源代码，除非花费大量的人力去同步它们。

> Documentation will always fall short when it’s treated as a **subtask** of the development process.

如果我们能够**把本地开发时使用的用例、源码中的接口和注释，转化成【可阅读、可交互】的形式，通过文档透出**，那么文档的质量、时效性就能从根本上提高。因为文档与【开发时的用例、源码中的接口类型和注释】是永远同步的，而后者是每天与开发者打交道的。

基于这个想法，我们开发了`console-components-dev-kit`(后面简称 cc-dev-kit)，它的核心功能之一是将开发用例、源码中的类型和注释通过文档透出给用户。这样做的价值是：

- 文档能够直接复用开发时编写的用例和注释，没有额外的维护成本，文档的时效性有保证
- 开发用例、注释现在可以直接展示给用户，对用户产生直接的价值，这会鼓励开发者编写更多、更优质的用例和注释
- 被透出的用例、类型、注释说明能得到用户的反馈。用户反馈、Feature request 会促进开发者编写更多的示例、注释，而后者通过文档直接反馈回用户，并扼制重复反馈的产生，形成反馈闭环。

> 我们对文档进行了很多的扩展和优化，提高文档的表现能力和阅读体验。嵌入开发用例和源码类型只是其中的一部分。详细的文档扩展功能请阅读 👉[这篇文档](./doc-features)。

过去，源码中的类型和注释是给代码阅读者查看的，本地用例是在开发物料的时候用于本地试验的。它们都只是为开发者自己服务的，用户能看到的只是文档中的文字说明，开发用例和源码注释对用户没有直接影响。而 cc-dev-kit 挖掘这部分代码的价值，让它们能够直接服务于用户，同时降低文档的维护成本。

## 以文档为核心：以文档为核心的物料开发工作流

**文档就是物料的门面，任何的特性、用法，必须要通过文档来透出，才对用户有意义。**

上面我们已经提到了，要想提高文档的质量，我们必须将文档维护融入到代码开发的工作流程中，而不是将它作为代码开发的后续任务。

因此，`console-components`总结了一套以文档为核心的物料开发工作流，将代码开发与文档编写的工作和谐统一起来：

![以文档为核心的物料开发工作流](./assets/feedback.svg '以文档为核心的物料开发工作流')

其中的文档预览、文档评审是这套工作流的关键，请阅读 👉[文档评审](./doc-review)。

## 以工具为支撑：提供工具来优化文档维护的体验

`console-components-dev-kit`(后面简称 cc-dev-kit)套件涵盖了文档维护的各个方面，支持上述的文档能力和工作流。致力于提高用户的阅读体验、开发者的维护体验。请阅读对应的文档。

- [文档站点框架](./doc-theme)。帮助你快速配置出一个功能强悍的文档站点。
- [文档构建和发布工具](./lib-publisher)。负责开发期间的文档构建和发布。发布后的文档可以通过 URL 来分享，也可以被文档站点加载。
- [文档运行时](./lib-documenter)。包括文档在运行时的加载、样式和功能。大部分开发者不需要直接使用它，我们的文档站点框架已经内置了它。