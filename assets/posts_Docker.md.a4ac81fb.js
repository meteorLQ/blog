import{_ as e,c as a,o as r,f as n}from"./app.c9d31e7e.js";const u='{"title":"Docker","description":"Dokcer\u955C\u50CF\u5C31\u662F\u4E00\u4E2A\u53EA\u8BFB\u7684\u6A21\u7248\u3002\u955C\u50CF\u53EF\u4EE5\u7528\u6765\u521B\u5EFADocker\u5BB9\u5668\uFF0C\u4E00\u4E2A\u955C\u50CF\u53EF\u4EE5\u521B\u5EFA\u5F88\u591A\u5BB9\u5668\u3002","frontmatter":{"date":"2022-01-13T00:00:00.000Z","title":"Docker","tags":["vitepress","markdown","docker"],"description":"Dokcer\u955C\u50CF\u5C31\u662F\u4E00\u4E2A\u53EA\u8BFB\u7684\u6A21\u7248\u3002\u955C\u50CF\u53EF\u4EE5\u7528\u6765\u521B\u5EFADocker\u5BB9\u5668\uFF0C\u4E00\u4E2A\u955C\u50CF\u53EF\u4EE5\u521B\u5EFA\u5F88\u591A\u5BB9\u5668\u3002"},"headers":[{"level":2,"title":"\u5E2E\u52A9\u542F\u52A8\u7C7B\u547D\u4EE4","slug":"\u5E2E\u52A9\u542F\u52A8\u7C7B\u547D\u4EE4"},{"level":2,"title":"\u955C\u50CF\u547D\u4EE4","slug":"\u955C\u50CF\u547D\u4EE4"},{"level":2,"title":"\u5BB9\u5668\u547D\u4EE4","slug":"\u5BB9\u5668\u547D\u4EE4"},{"level":2,"title":"\u5BB9\u5668\u6570\u636E\u5377","slug":"\u5BB9\u5668\u6570\u636E\u5377"},{"level":2,"title":"\u57FA\u4E8Edocker\u7684mysql\u4E3B\u4ECE\u590D\u5236","slug":"\u57FA\u4E8Edocker\u7684mysql\u4E3B\u4ECE\u590D\u5236"},{"level":2,"title":"docker redis\u96C6\u7FA4\u5B89\u88C5\uFF08\u4F2A\u96C6\u7FA4\uFF09","slug":"docker-redis\u96C6\u7FA4\u5B89\u88C5\uFF08\u4F2A\u96C6\u7FA4\uFF09"}],"relativePath":"posts/Docker.md","lastUpdated":1646743004506}',o={},d=n(`<meta name="referrer" content="no-referrer"><h1 id="docker-\u7684\u57FA\u672C\u7EC4\u6210" tabindex="-1">Docker \u7684\u57FA\u672C\u7EC4\u6210 <a class="header-anchor" href="#docker-\u7684\u57FA\u672C\u7EC4\u6210" aria-hidden="true">#</a></h1><p><strong>\u955C\u50CF\uFF08image\uFF09</strong> Dokcer\u955C\u50CF\u5C31\u662F\u4E00\u4E2A\u53EA\u8BFB\u7684\u6A21\u7248\u3002\u955C\u50CF\u53EF\u4EE5\u7528\u6765\u521B\u5EFADocker\u5BB9\u5668\uFF0C\u4E00\u4E2A\u955C\u50CF\u53EF\u4EE5\u521B\u5EFA\u5F88\u591A\u5BB9\u5668\u3002 \u5B83\u76F8\u5F53\u4E8E\u4E00\u4E2Aroot\u6587\u4EF6\u7CFB\u7EDF\u3002\u6BD4\u5982\u5B98\u65B9\u955C\u50CFcentos\uFF1A7\u5C31\u5305\u542B\u4E86\u5B8C\u6574\u7684\u4E00\u5957centos:7\u6700\u5C0F\u7CFB\u7EDF\u7684root\u6587\u4EF6\u7CFB\u7EDF\u3002 \u76F8\u5F53\u4E8E\u5BB9\u5668\u7684\u201C\u6E90\u4EE3\u7801\u201D\uFF0Cdocker\u955C\u50CF\u6587\u4EF6\u7C7B\u4F3C\u4E8EJava\u7684\u7C7B\u6A21\u7248\uFF0C\u800Cdokcer\u5BB9\u5668\u5B9E\u4F8B\u7C7B\u4F3C\u4E8Ejava\u4E2Dnew\u51FA\u6765\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002 <strong>\u5BB9\u5668\uFF08container\uFF09</strong> Docker\u5229\u7528\u5BB9\u5668\u72EC\u7ACB\u8FD0\u884C\u7684\u4E00\u4E2A\u6216\u4E00\u7EC4\u5E94\u7528\uFF0C\u5E94\u7528\u7A0B\u5E8F\u6216\u670D\u52A1\u8FD0\u884C\u5728\u5BB9\u5668\u91CC\u9762\uFF0C\u5BB9\u5668\u5C31\u7C7B\u4F3C\u4E8E\u4E00\u4E2A\u865A\u62DF\u5316\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u5BB9\u5668\u662F\u7528\u955C\u50CF\u521B\u5EFA\u7684\u8FD0\u884C\u793A\u4F8B\u3002\u5C31\u50CF\u662FJava\u4E2D\u7684\u7C7B\u548C\u5B9E\u4F8B\u5BF9\u8C61\u4E00\u6837\uFF0C\u955C\u50CF\u662F\u9759\u6001\u7684\u5B9A\u4E49\uFF0C\u5BB9\u5668\u662F\u955C\u50CF\u8FD0\u884C\u65F6\u7684\u5B9E\u4F53\u3002\u5BB9\u5668\u4E3A\u955C\u50CF\u63D0\u4F9B\u4F8B\u4E00\u4E2A\u6807\u51C6\u7684\u548C\u9694\u79BB\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u5B83\u53EF\u4EE5\u88AB\u542F\u52A8\u3001\u5F00\u59CB\u3001\u505C\u6B62\u3001\u5220\u9664\u3002\u6BCF\u4E2A\u5BB9\u5668\u90FD\u662F\u76F8\u4E92\u9694\u79BB\u7684\u3001\u4FDD\u8BC1\u5B89\u5168\u7684\u5E73\u53F0 \u53EF\u4EE5\u628A\u5BB9\u5668\u770B\u505A\u662F\u4E00\u4E2A\u7B80\u6613\u7248\u7684Linux\u73AF\u5883\uFF08\u5305\u62ECroot\u7528\u6237\u6743\u9650\u3001\u8FDB\u7A0B\u7A7A\u95F4\u3001\u7528\u6237\u7A7A\u95F4\u548C\u7F51\u7EDC\u7A7A\u95F4\u7B49\uFF09\u548C\u8FD0\u884C\u5728\u5176\u4E2D\u7684\u5E94\u7528\u7A0B\u5E8F\u3002 <strong>\u4ED3\u5E93\uFF08repository\uFF09</strong> \u96C6\u4E2D\u5B58\u653E\u955C\u50CF\u6587\u4EF6\u7684\u573A\u6240 \u4ED3\u5E93\u5206\u4E3A\u516C\u5171\u4ED3\u5E93\u548C\u79C1\u6709\u4ED3\u5E93 \u5168\u7403\u6700\u5927\u7684\u516C\u5171\u4ED3\u5E93\u662Fdocker hub</p><h1 id="docker\u547D\u4EE4" tabindex="-1">docker\u547D\u4EE4 <a class="header-anchor" href="#docker\u547D\u4EE4" aria-hidden="true">#</a></h1><h2 id="\u5E2E\u52A9\u542F\u52A8\u7C7B\u547D\u4EE4" tabindex="-1">\u5E2E\u52A9\u542F\u52A8\u7C7B\u547D\u4EE4 <a class="header-anchor" href="#\u5E2E\u52A9\u542F\u52A8\u7C7B\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-java"><pre><code><span class="token comment">//\u542F\u52A8docker</span>
systemctl start docker
<span class="token comment">//\u505C\u6B62docker</span>
systemctl stop docker
<span class="token comment">//\u91CD\u542Fdocker</span>
systemctl restart docker
<span class="token comment">//\u67E5\u770Bdocker\u72B6\u6001</span>
systemctl status docker
<span class="token comment">//\u5F00\u673A\u542F\u52A8</span>
systemctl enable docker
<span class="token comment">//\u67E5\u770Bdocker\u6982\u8981\u4FE1\u606F</span>
docker info
<span class="token comment">//\u67E5\u770Bdocker\u603B\u4F53\u5E2E\u52A9\u6587\u6863</span>
docker <span class="token operator">--</span>help
<span class="token comment">//\u67E5\u770Bdocker\u547D\u4EE4\u5E2E\u52A9\u6587\u6863</span>
docker \u3010\u547D\u4EE4\u3011<span class="token operator">--</span>help

</code></pre></div><h2 id="\u955C\u50CF\u547D\u4EE4" tabindex="-1">\u955C\u50CF\u547D\u4EE4 <a class="header-anchor" href="#\u955C\u50CF\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-dockerfile"><pre><code>//\u67E5\u8BE2\u672C\u673A\u5168\u90E8\u955C\u50CF
docker images
</code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1641965580913-42f97d71-0072-4894-89e8-ac430c25db03.png#clientId=u770d0cbd-2984-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=drop&amp;id=u8614c81a&amp;margin=%5Bobject%20Object%5D&amp;name=%E6%88%AA%E5%B1%8F2022-01-12%20%E4%B8%8B%E5%8D%881.32.53.png&amp;originHeight=222&amp;originWidth=1316&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=175517&amp;status=done&amp;style=none&amp;taskId=u2e96953a-1301-45fc-97c0-9ba14c0cb89&amp;title=" alt="\u622A\u5C4F2022-01-12 \u4E0B\u53481.32.53.png"></p><div class="language-dockerfile"><pre><code>//\u641C\u7D22\u955C\u50CF
docker search \u955C\u50CF\u540D\u79F0
//\u62C9\u53D6\u955C\u50CF
docker pull \u955C\u50CF\u540D\u79F0:tag
</code></pre></div><div class="language-dockerfile"><pre><code>\u67E5\u770B\u955C\u50CF/\u5BB9\u5668/\u6570\u636E\u5377\u6240\u5360\u7684\u7A7A\u95F4
docker system df
</code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1641974516929-d8dcd8ea-f54f-4ee4-9868-78009ea2c482.png#clientId=u770d0cbd-2984-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=drop&amp;id=u82e13b6a&amp;margin=%5Bobject%20Object%5D&amp;name=%E6%88%AA%E5%B1%8F2022-01-12%20%E4%B8%8B%E5%8D%884.01.36.png&amp;originHeight=222&amp;originWidth=1316&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=143392&amp;status=done&amp;style=none&amp;taskId=u545c6dfc-c199-4784-9de2-81abf509767&amp;title=" alt="\u622A\u5C4F2022-01-12 \u4E0B\u53484.01.36.png"></p><div class="language-dockerfile"><pre><code>//\u5220\u9664\u955C\u50CF
docker rmi \u955C\u50CFid\u6216\u540D\u79F0
//\u5F3A\u5236\u5220\u9664
docker rmi -f \u955C\u50CFid\u6216\u540D\u79F0
//\u5220\u9664\u5168\u90E8\u955C\u50CF
docker rmi -f $(docker images -qa)
</code></pre></div><h2 id="\u5BB9\u5668\u547D\u4EE4" tabindex="-1">\u5BB9\u5668\u547D\u4EE4 <a class="header-anchor" href="#\u5BB9\u5668\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language-dockerfile"><pre><code>\u8FD0\u884C\u5BB9\u5668
docker run \u3010options\u3011image \u3010command\u3011\u3010arg\u3011

options\u8BF4\u660E
--name=&quot;\u5BB9\u5668\u65B0\u540D\u5B57&quot; \u4E3A\u5BB9\u5668\u6307\u5B9A\u4E00\u4E2A\u540D\u79F0
-d \u540E\u53F0\u8FD0\u884C\u5BB9\u5668\u5E76\u8FD4\u56DE\u5BB9\u5668ID\uFF0C\u4E5F\u5373\u542F\u52A8\u5B88\u62A4\u5F0F\u5BB9\u5668\uFF08\u540E\u53F0\u8FD0\u884C\uFF09
-i \u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E-t\u540C\u65F6\u4F7F\u7528
-t \u4E3A\u5BB9\u5668\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E-i\u540C\u65F6\u4F7F\u7528
-P \u968F\u673A\u6307\u5B9A\u7AEF\u53E3 \u5927\u5199P
-p \u6307\u5B9A\u7AEF\u53E3 \u5C0F\u5199p

\u5217\u51FA\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668
docker ps

\u5217\u51FA\u5168\u90E8\u8FD0\u884C\u7684\u5BB9\u5668
docker ps -a

\u663E\u793A\u6700\u8FD1\u521B\u5EFA\u7684\u5BB9\u5668
docker ps -l

\u9000\u51FA\u5BB9\u5668
exit \u9000\u51FA\uFF0C\u5BB9\u5668\u505C\u6B62
ctrl+p+q\u9000\u51FA\uFF0C\u5BB9\u5668\u4E0D\u505C\u6B62

\u542F\u52A8\u5BB9\u5668
docker start \u5BB9\u5668\u540D\u79F0\u6216id

\u505C\u6B62\u5BB9\u5668
docker stop \u5BB9\u5668\u540D\u79F0\u6216id

\u91CD\u542F\u5BB9\u5668
docker restart \u5BB9\u5668\u540D\u79F0\u6216id

\u5F3A\u5236\u505C\u6B62\u5BB9\u5668
docker kill \u5BB9\u5668\u540D\u79F0\u6216id

\u5220\u9664\u5BB9\u5668
docker rm \u5BB9\u5668\u540D\u79F0\u6216id

\u5F3A\u5236\u5220\u9664\u5BB9\u5668
docker rm -f \u5BB9\u5668\u540D\u79F0\u6216id

\u67E5\u770B\u5BB9\u5668\u65E5\u5FD7
docker logs \u5BB9\u5668\u540D\u79F0\u6216id

\u67E5\u770B\u5BB9\u5668\u5185\u8FD0\u884C\u7684\u8FDB\u7A0B
docker top \u5BB9\u5668id\u6216\u540D\u79F0

\u67E5\u770B\u5BB9\u5668\u5185\u90E8\u7EC6\u8282
docker inspect \u5BB9\u5668id

\u8FDB\u5165\u8FD0\u884C\u4E2D\u5BB9\u5668\u5185\u90E8
docker exec -it \u5BB9\u5668id\u6216\u540D\u79F0/bin/bash
docker attach \u5BB9\u5668id\uFF08exit\u9000\u51FA\u4F1A\u505C\u6B62\u5BB9\u5668\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF09

\u5BB9\u5668\u5185\u6587\u4EF6\u62F7\u8D1D\u5230\u4E3B\u673A
docker cp \u5BB9\u5668id:\u5BB9\u5668\u5185\u8DEF\u5F84 \u76EE\u6807\u8DEF\u5F84

\u5BFC\u51FA\u5BB9\u5668
docker export \u5BB9\u5668id &gt; \u540D\u79F0.tar

\u5BFC\u5165\u5BB9\u5668
cat \u6587\u4EF6\u540D.tar|docker import - \u955C\u50CF\u7528\u6237/\u955C\u50CF\u540D:\u955C\u50CF\u7248\u672C\u53F7

\u63D0\u4EA4\u955C\u50CF
docker commit -m=&quot;\u63D0\u4EA4\u7684\u63CF\u8FF0\u4FE1\u606F&quot; -a=\u201C\u4F5C\u8005\u201D \u5BB9\u5668id \u8981\u521B\u5EFA\u7684\u76EE\u6807\u955C\u50CF\u540D:[\u6807\u7B7E\u540D]
</code></pre></div><h2 id="\u5BB9\u5668\u6570\u636E\u5377" tabindex="-1">\u5BB9\u5668\u6570\u636E\u5377 <a class="header-anchor" href="#\u5BB9\u5668\u6570\u636E\u5377" aria-hidden="true">#</a></h2><p>\u5377\u5C31\u662F\u76EE\u5F55\u6216\u6587\u4EF6\uFF0C\u5B58\u5728\u4E8E\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u4E2D\uFF0C\u7531<strong>docker</strong>\u6302\u8F7D\u5230\u5BB9\u5668\uFF0C\u4F46\u4E0D\u5C5E\u4E8E\u8054\u5408\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u56E0\u6B64\u80FD\u591F\u7ED5\u8FC7Union file system\u63D0\u4F9B\u4F46\u4E00\u4E9B\u7528\u4E8E\u6301\u7EED\u5B58\u50A8\u6216\u5171\u4EAB\u6570\u636E\u4F46\u7279\u6027\uFF1A \u5377\u4F46\u8BBE\u8BA1\u76EE\u7684\u5C31\u662F\u6570\u636E\u7684\u6301\u4E45\u5316\uFF0C\u5B8C\u5168\u72EC\u7ACB\u4E8E\u5BB9\u5668\u7684\u751F\u5B58\u5468\u671F\uFF0C\u56E0\u6B64Docker\u4E0D\u4F1A\u5728\u5BB9\u5668\u5220\u9664\u65F6\u5220\u9664\u5176\u6302\u8F7D\u7684\u6570\u636E\u5377\u3002</p><div class="language-dockerfile"><pre><code>\u76EE\u5F55\u6302\u8F7D\u547D\u4EE4
docker run --privileged=true -v \u5BBF\u4E3B\u673A\u76EE\u5F55\uFF1A\u5BB9\u5668\u5185\u76EE\u5F55 \u955C\u50CFid
</code></pre></div><p><strong>\u67E5\u770B\u662F\u5426\u6302\u8F7D\u6210\u529F</strong></p><div class="language-dockerfile"><pre><code>docker inspect \u5BB9\u5668id
</code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1642131142641-0a50dba0-b040-4e76-a950-596aa6a3c92a.png#clientId=u770d0cbd-2984-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=192&amp;id=uea772943&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=384&amp;originWidth=1146&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=147868&amp;status=done&amp;style=none&amp;taskId=u60178011-c697-4315-bc0b-c66eeb0d2bb&amp;title=&amp;width=573" alt="image.png"></p><p><strong>\u6302\u8F7D\u76EE\u5F55\u6743\u9650</strong><strong>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6302\u8F7D\u76EE\u5F55\u548C\u5BB9\u5668\u76EE\u5F55\u662Frw</strong></p><div class="language-dockerfile"><pre><code>docker run --privileged=true -v \u5BBF\u4E3B\u673A\u76EE\u5F55\uFF1A\u5BB9\u5668\u5185\u76EE\u5F55\uFF1Arw \u955C\u50CFid
</code></pre></div><p><strong>\u5BB9\u5668\u5B9E\u4F8B\u5185\u90E8\u88AB\u9650\u5236\uFF0C\u4E0D\u80FD\u5199\uFF0C\u53EA\u80FD\u8BFB</strong></p><div class="language-dockerfile"><pre><code>docker run --privileged=true -v \u5BBF\u4E3B\u673A\u76EE\u5F55\uFF1A\u5BB9\u5668\u5185\u76EE\u5F55\uFF1Aro \u955C\u50CFid
</code></pre></div><p><strong>\u5BB9\u5668\u4E4B\u95F4\u8DEF\u5F84\u7684\u7EE7\u627F\u548C\u5171\u4EAB</strong></p><div class="language-dockerfile"><pre><code>docker run --privileged=true --volumes-from \u7236\u5BB9\u5668id --name \u91CD\u547D\u540D \u955C\u50CFid
</code></pre></div><h1 id="docker\u5B89\u88C5mysql" tabindex="-1">docker\u5B89\u88C5MySQL <a class="header-anchor" href="#docker\u5B89\u88C5mysql" aria-hidden="true">#</a></h1><blockquote><p><strong>docker run -d -p 3306:3306 --name mysql1 -v /d/DevEnv/mysql/conf:/etc/mysql/conf.d -v /d/DevEnv/mysql/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0.26</strong></p></blockquote><blockquote><p>docker run -p 3306:3306 --name mysql2 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:8.0.26 docker run mysql1 -p 3306:3306</p></blockquote><blockquote><p>\u542F\u52A8\uFF08m1\u82AF\u7247\u6682\u65E0msql\u7248\u672C\u955C\u50CF\uFF0C\u6240\u4EE5\u4F7F\u7528mysql-server\uFF09</p></blockquote><blockquote><p>docker run -d -p 3306:3306 --name mysql1 -v /Users/liqiang/devins/mysql/conf:/etc/mysql/conf.d -v /Users/liqiang/devins/mysql/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql/mysql-server</p></blockquote><blockquote><p><strong>\u8FDB\u5165\u5BB9\u5668</strong><strong>docker exec -it mysql bash</strong></p></blockquote><blockquote><p><strong>\u767B\u9646mysql</strong><strong>mysql -u root -p</strong></p></blockquote><blockquote><p>grant all on <em>.</em> to &#39;root&#39;@&#39;%&#39;; GRANT ALL PRIVILEGES ON <em>.</em> TO &#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;123456&#39; WITH GRANT OPTION; ALTER USER &#39;root&#39;@&#39;%&#39; IDENTIFIED WITH mysql_native_password BY &#39;123456&#39;;</p></blockquote><blockquote><p><strong>\u8BBE\u7F6E\u7528\u6237\u8FDC\u7A0B\u767B\u5F55</strong></p></blockquote><blockquote><p>\u4F7F\u7528mysql use mysql \u4FEE\u6539\u5BC6\u7801\uFF1A ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;123456&#39;; \u4FEE\u6539ip\u4E3A\u6240\u6709\u53EF\u8BBF\u95EE update user set host=&#39;%&#39; where user=&#39;root&#39;; \u67E5\u770B select host,user from user; \u5237\u65B0 flush privileges;</p></blockquote><h2 id="\u57FA\u4E8Edocker\u7684mysql\u4E3B\u4ECE\u590D\u5236" tabindex="-1">\u57FA\u4E8Edocker\u7684mysql\u4E3B\u4ECE\u590D\u5236 <a class="header-anchor" href="#\u57FA\u4E8Edocker\u7684mysql\u4E3B\u4ECE\u590D\u5236" aria-hidden="true">#</a></h2><div class="language-dockerfile"><pre><code>docker run -d -p 3307:3306 --name mysql-master -v /Users/liqiang/devins/mysql-master/conf:/etc/mysql -v /Users/liqiang/devins/mysql-master/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456  mysql/mysql-server
</code></pre></div><p><strong>master\u914D\u7F6E</strong></p><div class="language-dockerfile"><pre><code>[mysqld]
<span class="token comment"># \u8BBE\u7F6Eserver_id</span>
server_id=101
<span class="token comment">#</span>
binlog-ignore-db=mysql
<span class="token comment">#</span>
log-bin=mall-mysql-bin
<span class="token comment">#</span>
binlog_cache_size=1M
<span class="token comment">#</span>
binlog_format=mixed
<span class="token comment">#</span>
expire_logs_days=7
<span class="token comment">#</span>
slave_skip_errors=1062
</code></pre></div><h1 id="docker\u5B89\u88C5redis" tabindex="-1">docker\u5B89\u88C5redis <a class="header-anchor" href="#docker\u5B89\u88C5redis" aria-hidden="true">#</a></h1><blockquote><p>docker exec -it myredis redis-cli \u8FDE\u63A5redis\u5BA2\u6237\u7AEF</p></blockquote><blockquote><p>docker run -d -p 6379:6379 -v /Users/lq/devinstall/myredis/conf:/usr/local/etc/redis -v /Users/lq/devinstall/myredis/data:/data --name myredis redis:6.2.6 redis-server /usr/local/etc/redis/redis.conf</p></blockquote><h2 id="docker-redis\u96C6\u7FA4\u5B89\u88C5\uFF08\u4F2A\u96C6\u7FA4\uFF09" tabindex="-1">docker redis\u96C6\u7FA4\u5B89\u88C5\uFF08\u4F2A\u96C6\u7FA4\uFF09 <a class="header-anchor" href="#docker-redis\u96C6\u7FA4\u5B89\u88C5\uFF08\u4F2A\u96C6\u7FA4\uFF09" aria-hidden="true">#</a></h2><hr><p><strong>\u542F\u52A8\u516D\u53F0redis</strong></p><div class="language-dockerfile"><pre><code>docker run -d --name redis-node1 -v /Users/liqiang/devins/redis/data/node1:/data -p 6381:6381 -p 16381:16381 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6381 
docker run -d --name redis-node2 -v /Users/liqiang/devins/redis/data/node2:/data -p 6382:6382 -p 16382:16382 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6382 
docker run -d --name redis-node3 -v /Users/liqiang/devins/redis/data/node3:/data -p 6383:6383 -p 16383:16383 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6383 
docker run -d --name redis-node4 -v /Users/liqiang/devins/redis/data/node4:/data -p 6384:6384 -p 16384:16384 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6384 
docker run -d --name redis-node5 -v /Users/liqiang/devins/redis/data/node5:/data -p 6385:6385 -p 16385:16385 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6385 
docker run -d --name redis-node6 -v /Users/liqiang/devins/redis/data/node6:/data -p 6386:6386 -p 16386:16386 redis:6.2.6 --cluster-enabled yes --appendonly yes --port 6386 
</code></pre></div><p>\u96C6\u7FA4\u5173\u8054 \u6CE8\u610F\uFF1A\u8FDB\u5165docker\u5BB9\u5668\u540E\u624D\u80FD\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u4E14\u6CE8\u610F\u81EA\u5DF1\u7684\u771F\u5B9EIP\u5730\u5740</p><div class="language-dockerfile"><pre><code>redis-cli --cluster create 192.168.0.120:6381 192.168.0.120:6382 192.168.0.120:6383 192.168.0.120:6384 192.168.0.120:6385 192.168.0.120:6386 --cluster-replicas 1
</code></pre></div><p>--cluster-replicas 1\u8868\u793A\u6BCF\u4E2Amaster\u521B\u5EFA\u4E00\u4E2Aslave\u8282\u70B9 <img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1642344498422-c54f41d2-65eb-4f5b-8dfd-dfba71486d07.png#clientId=u770d0cbd-2984-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=907&amp;id=ubb38487b&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=1814&amp;originWidth=1172&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=1077855&amp;status=done&amp;style=none&amp;taskId=udb7414cc-8e5e-4a71-b35d-debd7972f62&amp;title=&amp;width=586" alt="image.png"></p><p>\u67E5\u770B\u96C6\u7FA4\u4FE1\u606F</p><div class="language-dockerfile"><pre><code>cluster info
</code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1642490303533-2d59bc96-dcbe-46c1-a07a-d4893acca2d8.png#clientId=ua11cf2b8-2d2c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=305&amp;id=ua1a523a5&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=610&amp;originWidth=784&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=282354&amp;status=done&amp;style=none&amp;taskId=ucfcd7a2f-0c2b-4123-9172-2c95b42488b&amp;title=&amp;width=392" alt="image.png"></p><p>\u67E5\u770B\u96C6\u7FA4\u8282\u70B9\u60C5\u51B5</p><div class="language-dockerfile"><pre><code>cluster nodes
</code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1642490337594-05550568-aa0a-4114-b6c3-3ce391176b58.png#clientId=ua11cf2b8-2d2c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=130&amp;id=u4b65d431&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=260&amp;originWidth=2492&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=385098&amp;status=done&amp;style=none&amp;taskId=u65b27f1f-b60a-4eb5-8d20-706a815d51f&amp;title=&amp;width=1246" alt="image.png"><strong>\u4F7F\u7528\u5BA2\u6237\u7AEF\u8FDE\u63A5redis\u65F6\uFF0C\u8BF7\u4F7F\u7528redis-cli -p 6381 -c</strong><strong>\u52A0\u5165-c\u53C2\u6570\uFF0C\u4F18\u5316\u8DEF\u7531</strong></p><p>\u67E5\u770B\u96C6\u7FA4\u8BE6\u7EC6\u4FE1\u606F</p><div class="language-dockerfile"><pre><code>redis-cli --cluster check 192.168.0.120:6381
</code></pre></div><p><img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1642491878425-0eb02be6-5cfd-412c-b878-eb9cdac58d9d.png#clientId=ua11cf2b8-2d2c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=517&amp;id=u46d0ffc8&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=1034&amp;originWidth=1256&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=729144&amp;status=done&amp;style=none&amp;taskId=u022f5d52-0f1a-42ce-aad2-4ae63d82581&amp;title=&amp;width=628" alt="image.png"></p><p><strong>\u96C6\u7FA4\u6269\u5BB9</strong> \u5C06\u65B0\u8282\u70B9\u52A0\u5165\u96C6\u7FA4</p><div class="language-dockerfile"><pre><code>redis-cli --cluster add-node ip\u5730\u5740:6387 ip\u5730\u5740:6381
</code></pre></div><p>6387\u5C31\u662F\u5C06\u8981\u4F5C\u4E3Amaster\u65B0\u589E\u8282\u70B9 6381\u5C31\u662F\u539F\u6765\u96C6\u7FA4\u8282\u70B9\u91CC\u9762\u70B9\u4E3B\u8282\u70B9 \u200B</p><p><strong>\u91CD\u65B0\u5206\u6D3E\u69FD\u53F7</strong></p><div class="language-dockerfile"><pre><code>redis-cli --cluster reshard 192.168.0.120:6381
</code></pre></div><p><strong>\u91CD\u65B0\u6302\u8F7D\u4ECE\u8282\u70B9</strong></p><div class="language-dockerfile"><pre><code>redis-cli --cluster add-node \u65B0slaveip\u5730\u5740:6387 \u65B0masterip\u5730\u5740:6381 --cluster-slave --cluster-master-id \u65B0\u4E3B\u673A\u8282\u70B9id

redis-cli --cluster add-node 192.168.0.120:6388 192.168.0.120:6387 --cluster-slave --cluster-master-id bac9cc96b59c91d785acdbceeec6f75e71318738
</code></pre></div><p>\u96C6\u7FA4\u7D22\u5BB9</p><p>\u5148\u5220\u9664\u4ECE\u673A</p><div class="language-dockerfile"><pre><code>redis-cli --cluster del-node ip\u5730\u5740:\u7AEF\u53E3 \u8282\u70B9id
</code></pre></div><p>\u91CD\u65B0\u5206\u914D\u69FD\u53F7</p><div class="language-dockerfile"><pre><code>redis-cli --cluster reshard 192.168.0.120:6381
</code></pre></div><p>\u5220\u9664\u4E3B\u8282\u70B9</p><div class="language-dockerfile"><pre><code>redis-cli --cluster del-node ip\u5730\u5740:\u7AEF\u53E3 \u8282\u70B9id
</code></pre></div><p>\u57511:<strong>--net hos</strong><strong>MacOS\u548Cdocker\u7F51\u7EDC\u4EA4\u4E92\uFF0C\u4E0D\u652F\u6301host\u6A21\u5F0F\uFF08--net host\uFF09\uFF0C\u9700\u8981\u4F7F\u7528\u9ED8\u8BA4\u7684bridge\u6A21\u5F0F\uFF08\u4F7F\u7528-p\u6620\u5C04\u7AEF\u53E3\uFF09</strong> \u57512:**Waiting for the cluster to join ** redis-cli --cluster create\u73AF\u8282\uFF0C\u4E00\u76F4\u5361\u5230&quot;Waiting for the cluster to join\u201D\u73AF\u8282\u3002 Redis\u96C6\u7FA4\u4E2D\u7684\u5404\u4E2A\u8282\u70B9\uFF0C\u9700\u8981\u5F00\u653E\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u540C\u5176\u4ED6\u8282\u70B9\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u7528\u4E8E\u63A5\u6536\u5FC3\u8DF3\u6570\u636E\u7B49\u64CD\u4F5C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0Credis-node1\u8282\u70B9\uFF0C\u5F00\u653E6379\u7AEF\u53E3\u4F9Bclient\u8FDE\u63A5\u65F6\uFF0C\u540C\u65F6\u63D0\u4F9B16379\u7AEF\u53E3(10000 + 6379)\uFF0C\u4F9B\u5176\u4ED6Redis\u8282\u70B9\u8FDE\u63A5\u3002</p><p>\u96C6\u7FA4\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u9700\u8981\u540C\u5176\u4ED6Redis\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u8FDB\u884C\u901A\u4FE1\u3002\u82E5\u8282\u70B9\u95F4\u65E0\u6CD5\u8FDE\u63A5\uFF0C\u6B64\u65F6\u4F1A\u963B\u585E\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E00\u76F4\u963B\u585E\u5230&quot;Waiting for the cluster to join&quot;\u73AF\u8282\u7684\u539F\u56E0\u3002</p><p>\u5B98\u65B9\u901A\u8FC7--net=host\uFF0C\u6307\u5B9A\u7F51\u7EDC\u7C7B\u578B\u4E3Ahost\uFF0C\u4F7F\u5F97\u5BB9\u5668\u4E0E\u5BBF\u4E3B\u673A\u4F7F\u7528\u540C\u4E00\u7F51\u7EDC\uFF0C\u4ECE\u800C\u89C4\u907F\u4E86\u8FD9\u7C7B\u95EE\u9898\u3002 \u5F53\u7136\uFF0C\u82E5\u4E0D\u60F3\u4FEE\u6539\u5BB9\u5668\u7F51\u7EDC\u7C7B\u578B\u7684\u8BDD\uFF0C\u5219\uFF0C\u9700\u8981\u540C\u65F6\u66B4\u9732\u4E24\u4E2A\u7AEF\u53E3\uFF0C\u7528\u4E8E\u63D0\u4F9Bclient\u548C\u5176\u4ED6\u8282\u70B9 <img src="https://cdn.nlark.com/yuque/0/2022/png/25635684/1642344952745-9fd6bfea-3693-4c02-904b-1ead46e751da.png#clientId=ua11cf2b8-2d2c-4&amp;crop=0&amp;crop=0&amp;crop=1&amp;crop=1&amp;from=paste&amp;height=249&amp;id=u966e6ca3&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=498&amp;originWidth=1848&amp;originalType=binary&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;size=124779&amp;status=done&amp;style=none&amp;taskId=ud5460791-20c6-4072-a4a4-6501031f2d6&amp;title=&amp;width=924" alt="image.png"></p>`,77),s=[d];function c(p,t,i,l,m,g){return r(),a("div",null,s)}var h=e(o,[["render",c]]);export{u as __pageData,h as default};
