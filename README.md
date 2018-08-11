
 ## 目录  
* [背景介绍](#背景介绍)  
* [项目介绍](#项目介绍)  
* [修订历史](#修订历史)  
  * [获取代码](#获取代码)  
  * [开发插件](#开发插件)  
  * [使用ShurnimStorage接口](#使用ShurnimStorage接口)  
       * [接口介绍](#接口介绍)  
       * [使用样例](#使用样例)  
* [其他](#其他)  
  
<a name="背景介绍"></a>  
## 背景介绍  
  
*Shurnim*，是我和我老婆曾经养过的一只仓鼠的名字。<br/>  
*shurnim-storage*，是一个插件式云存储/网盘同步管理工具。是在参加又拍云开发大赛的过程中设计并开发。  
  
<a name="项目介绍"></a>  
## 项目介绍  
  
*shurnim-storage* 的设计初衷是给大家提供一个可方便扩展的云存储/网盘同步工具。分后端接口和前端UI界面两部分。<br>  
  
由于目前各种云存储和网盘系统层出不穷，单一工具往往支持支持某几个特定存储之间的同步，如**又拍云**到**七牛云存储**的同步工具，此时如若想同步到其他存则可能需要新的工具，给用户带来不便。*shurnim-storage*  正是为了解决此问题而设计的。  
  
在*shurnim-storage*中，用户使用的固定的统一的后端接口。而所有云存储/网盘API的支持则是以插件的形式部署到系统中的。如此，如果用户想要一个从**又拍云**到**Dropbox**的同步工具，则只需要在原有基础上，增加**Dropbox**的插件，即可实现互通，方便快捷。<br/>  
  
同时，后端统一接口的设计也考虑到界面开发的需求，可直接通过后端提供的接口开发具有上述扩展功能的云存储UI工具。<br>  
  
目前，后端整体框架的核心部分已经基本开发完成。只需逐步补充后端接口和插件开发接口的定义即可。但由于个人时间和能力所限，UI部分没有开发，有兴趣的同学可以一试。

<a name="项目介绍"></a>
## 修订历史

| 序号 |编制人员        |方式      |修订时间   |修订内容|
|-----|--------------|----------|---------|-------|
|  1  |ElementLS     |创建       |2018-8-11|     |
|  2  |              |          |         |      |
|  3  |              |          |         |      |

## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```

