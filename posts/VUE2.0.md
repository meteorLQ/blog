---
date: 2022-03-05
title: Vue
tags:
- vitepress
- markdown
description: Vue是什么 一套用于构建用户界面的渐进式JavaScript框架
---

<meta name="referrer" content="no-referrer" />

# 1.Vue是什么？
一套用于构建用户界面的渐进式JavaScript框架
# 2.谁开发的？
尤雨溪
2013年，受到Angular框架的启发，尤雨溪开发了一个轻量框架-Seed。
同年12月，Seed更名为Vue，版本号0.6.0。
2014年 Vue正式对外发布，版本号0.8.0
2015年10月27日，正式发布Vue1.0.0
2016年10月1日，正式发布Vue2.0.0
2020年9月18日，正式发布Vue3.0.0
# 3.初识Vue
1.Vue实例和容器是一一对应的
2.真实的开发中只有一个Vue实例，并且配合着组件一起使用；
3.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性，也可以写vm中的属性；
4.一旦data中的数据发生改变，那么模版中用到该数据的地方也会自动更新；
注意区分js表达式和js代码
js表达式     a    a+b    demo(1)    x==y ? 1:2  	表达式会产生一个返回值，函数返回unfind
js代码   for     if    控制代码走向
# 4.模版语法
## 插值语法
> ## {{xxxxxxxx}}

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>初识VUE</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h1>Hello,{{name}}</h1>
</div>
<script type="text/javascript">
    // 阻止vue在启动时生成生产提示
    Vue.config.productionTip = false
    // 创建Vue实例
    const vue = new Vue({
        el: '#root',
        data: {
            name: '李隼',
            url:'https://www.baidu.com'
        }
    });

</script>
</body>
</html>
```
## 指令语法
> v-bind 可以简写为：

​

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>初识VUE</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>指令语法</h2>
    <a v-bind:href="url">指令语法</a>
    <a :href="url">指令简写语法</a>
</div>
<script type="text/javascript">
    // 阻止vue在启动时生成生产提示
    Vue.config.productionTip = false
    // 创建Vue实例
    const vue = new Vue({
        el: '#root',
        data: {
            name: '李隼',
            url:'https://www.baidu.com'
        }
    });

</script>
</body>
</html>
```
## 数据绑定
单向绑定
> v-bind 数据只能从data流向页面

双向绑定
> 数据不仅能从data流向页面，还可以从页面流向data。
> 注：双向绑定一般都应用在表单类元素上如input 、select
> v-model:value 可以简写为v-model，因为默认收集的就是value的值



## el的两种写法
### 第一种
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646315528749-3a66d0ad-e85e-43c1-959e-55818312ae49.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=224&id=ufcc741a4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=448&originWidth=894&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44594&status=done&style=none&taskId=u3fbda6cf-0442-4609-afb4-6a84b09bc32&title=&width=447)
### 第二种
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646315502640-09d2dc4c-a2ee-4146-83f0-0d258fc1916e.png#clientId=uc66694af-178f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=411&id=u04ca8c76&margin=%5Bobject%20Object%5D&name=image.png&originHeight=822&originWidth=980&originalType=binary&ratio=1&rotation=0&showTitle=false&size=91208&status=done&style=none&taskId=u5aa224d2-8ddf-4b6d-b8e1-b9a9dc0126a&title=&width=490)


## data的两种写法


### 第一种
对象式
### 第二种
函数式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646315676522-37412a6f-ff3b-4202-8f4b-da04377e1624.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=448&id=u5df35187&margin=%5Bobject%20Object%5D&name=image.png&originHeight=896&originWidth=1058&originalType=binary&ratio=1&rotation=0&showTitle=false&size=89773&status=done&style=none&taskId=u6bc48b90-1a52-4dae-9413-67836d7cd3d&title=&width=529)
简写
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646315829740-39dce083-586d-49d3-93ef-468f53fa7869.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=278&id=ua9b48dc0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=556&originWidth=976&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47362&status=done&style=none&taskId=ue3803757-288c-4ce3-86fc-041dcff975f&title=&width=488)




# 5.MVVM模型
M：模型（Model）：对应data中的数据
V ：视图（View）：模版
VM：视图模型（ViewModel）：Vue实例对象
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646357097333-79358a1b-2520-438d-b79e-eb8aedcb7216.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=333&id=u54baa4a5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=666&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=206763&status=done&style=none&taskId=u06a37a64-b181-4cbf-ba54-371629e6461&title=&width=640)


# 6.数据代理
通过一个对象代理另一个对象中属性的操作（读/写）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据代理</title>
</head>
<body>
<script type="text/javascript">
    // 通过obj2操作x
    let obj1={x:1};
    let obj2={y:2};

    Object.defineProperty(obj2,'x',{
        get(){
            return obj1.x;
        },
        set(v) {
            obj1.x=v;
        }
    })

</script>
</body>
</html>
```
## Vue中的数据代理
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>初识VUE</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    单项绑定<input type="text" :value="name">
    <br>
    双向绑定 <input type="text" v-model="name">
</div>
<script type="text/javascript">
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {
            name: '张三',
            url:'https://www.baidu.com'
        }
    });

</script>
</body>
</html>
```
vue使用Object.defineProperty实现了data中数据的代理，通过_data进行数据的修改
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646360050433-8c0a7abd-5443-4d73-a99a-6e1dac2be44f.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=451&id=u3800259e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=902&originWidth=1334&originalType=binary&ratio=1&rotation=0&showTitle=false&size=153095&status=done&style=none&taskId=uf0c58f64-1ee6-4752-86ac-262847d9fc2&title=&width=667)
# 7.事件处理
> 使用v-on:click 绑定事件，简写为@click
> _1.使用v-on:xxx 或@xxx 绑定事件，其中xxx是事件名;
2.事件的回调需要配置在methods对象中，最终会在vm尚;
3.methods中配置的函数，不需要用箭头函数！否则this就不是vm了;
4.methods中配置的函数，都是被vue所管理的函数，this的指向是vm或组件实例对象;
5.@click=“demo”和@click=“demo（$event）” 效果一致,但后者可以传参;_



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>事件的基本使用</title>
    <script type="text/javascript" src="../../js/vue.js"></script>
</head>
<!--
事件的基本使用：
1.使用v-on:xxx 或@xxx 绑定事件，其中xxx是事件名;
2.事件的回调需要配置在methods对象中，最终会在vm上;
3.methods中配置的函数，不需要用箭头函数！否则this就不是vm了;
4.methods中配置的函数，都是被vue所管理的函数，this的指向是vm或组件实例对象;
5.@click=“demo”和@click=“demo（$event）” 效果一致,但后者可以传参;
-->
<body>
<div id="root">
    <h2>欢迎来到2022年</h2>
    <!--    <button v-on:click="showInfo">点我提示信息</button>-->
    <!--省略写法-->
    <button @click="showInfo">点我提示信息</button>
    <button @click="showInfoArgs($event,666)">点我提示信息(传参)</button>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        methods: {
            showInfo(event) {
                console.log(event);
                alert("你好?");
            },
            showInfoArgs(event,num){
                console.log(num);
                alert(num);
            }
        }
    });
</script>
</html>
```
### 事件修饰符
> ### Vue中的事件修饰符
1.prevent：阻止默认事件（常用）；
2.stop:阻止事件冒泡
3.once:事件只触发一次（常用）;
4.capture:使用事件的捕获模式
5.self:只有event.target是当前操作的元素是才触发事件
6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>事件的修饰符</title>
    <script type="text/javascript" src="../../js/vue.js"></script>
    <style>
        * {
            margin-top: 20px;
        }

        .demo1 {
            height: 50px;
            background-color: aquamarine;
        }
    </style>
</head>
<body>
<div id="root">
    <h2>欢迎来到2022年</h2>
    <!--1.prevent：阻止默认事件（常用）；-->
    <a href="https://www.baidu.com" @click.prevent="showInfo">点击一下</a>
    <!--2.stop:阻止事件冒泡-->
    <div class="demo1" @click="showInfo">
        <button @click.stop="showInfo">点我提示信息</button>
    </div>
    <!--3.once:事件只触发一次（常用）-->
    <div>
        <button @click.once="showInfo">点我提示信息</button>
    </div>
    <!--4.capture:使用事件的捕获模式-->

    <!--5.self:只有event.target是当前操作的元素是才触发事件-->

    <!--6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕-->

</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {},
        methods: {
            showInfo() {
                alert('a标签默认事件');
            }
        }
    });
</script>
</html>
```
### 键盘事件


> @keyup   键盘按下抬起事件
> @keydown  键盘按下事件
> _1.vue中常用的按键别名
回车=> enter
删除=> delete (捕获删除和退格)
退出=>esc
空格=> space
换行=> tab（必须使用_keydown使用_）
上=> up
下=> down
左=> left
右=> right
2.vue中未提供别名的按键，可以使用按键原始的key值取绑定，但注意要转为kebab-case（短横线命名）
3.系统修饰键（用法特殊）：ctrl、alt、shift、meta
（1）配合keyup使用：按下修饰符的同时，再按下其他键，随后释放其他键，事件才被触发。
 (2).配合keydown使用：正常触发事件
4.也可以使用keyCode去指定具体的按键
5.Vue.config.keyCodes.自定义健名=键码，可以去定制按键别名_

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>键盘事件</title>
    <script type="text/javascript" src="../../js/vue.js"></script>
</head>
<body>
<div id="root">
    <h2>欢迎来到2022年</h2>
    <input type="text" placeholder="按下回车提示输入" @keyup.enter="showInfo">
</div>
</body>
<script type="text/javascript">
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {},
        methods: {
            showInfo(e) {
                alert(e.target.value);
            }
        }
    });
</script>
</html>
```
# 8.计算属性
> _计算属性 关键字_computed_
1，定义：要用的属性不存在，要通过已有的属性计算得来
2.原理：第层借助了Object.defineproperty方法提供的getter和setter
3.get函数什么时候执行?
(1).初次读取时会执行一次?
(2).当依赖的数据发生改变时会被再次调用
4.优势：与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
5.备注：
计算属性最终会出现在vm上，直接读取使用即可。
如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。_

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>计算属性实现</title>
</head>
<body>
<div id="root">
    <input type="text" v-model="firstName">
    <br>
    <br>
    <input type="text" v-model="lastName">
    <br>
    <br>
    姓名<span>{{fullName}}</span>
</div>
</body>
<script type="text/javascript" src="../../js/vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false;
    let vm = new Vue({
        el: '#root',
        data: {
            firstName: '张',
            lastName: '三'
        },
        computed: {
            // get是什么时候调用？ 1.初次读取fullName时 2.所依赖的数据发生变化时
            fullName: {
                get() {
                    // 此处的this是vm
                    return this.firstName+"-"+this.lastName;
                },
                set(value){
                            
                }
            }
        }
    });
</script>
</html>
```
## 计算属性简写
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>姓名案例和计算属性简写</title>
</head>
<body>
<div id="root">
    <input type="text" v-model="firstName">
    <br>
    <br>
    <input type="text" v-model="lastName">
    <br>
    <br>
    姓名:<span>{{fullName}}</span>
</div>
</body>
<script type="text/javascript" src="../../js/vue.js"></script>
<script type="text/javascript">
    Vue.config.productionTip = false;
    let vm = new Vue({
        el: '#root',
        data: {
            firstName: '张',
            lastName: '三'

        },
        computed: {
            // get是什么时候调用？ 1.初次读取fullName时 2.所依赖的数据发生变化时
            fullName() {
                // 此处的this是vm
                return this.firstName + "-" + this.lastName;
            }

        }
    });
</script>
</html>
```
# 9.监视属性
> _监视属性watch:
1.当被监视的属性变化时，回调函数自动调用，进行相关操作_2.监视的属性必须存在，才能进行监视！！_3.监视的两种写法：_(1).new Vue时传入watch配置_(2).通过vm.$watch监视_

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>监视属性</title>
</head>
<body>
<div id="root">
    <h2>今天天气很{{info}}</h2>
    <button @click="change">切换天气</button>
</div>
</body>
<script type="text/javascript" src="../../js/vue.js"></script>
<script type="text/javascript">
    let vm=new Vue({
        el: '#root',
        data: {
            isHot: true
        },
        methods: {
            change() {
                this.isHot = !this.isHot;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        // 第一种写法
        watch: {
            isHot: {
                // 初始化时执行handler
                immediate: true,
                handler(newValue, oldVale) {
                    console.log('newValue' + newValue)
                    console.log('oldVale' + oldVale)
                    console.log("发现属于被修改");
                }
            }
        }
    })

    // vm.$watch('isHot',{
    //     immediate: true,
    //     handler(nv, ov) {
    //         console.log('nv' + nv)
    //         console.log('nv' + ov)
    //         console.log("发现属于被修改");
    //     }
    // })
</script>
</html>
```
## 深度监视
> _1.Vue中的watch默认不监测对象内部值的改变（一层）。
2.配置deep：true可以监测对象内部值的改变（多层）。
备注：
1.Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
2.使用watch时根据数据的基本结构，决定是否采用深度监视。_

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>深度监视</title>
</head>
<body>
<div id="root">
    <h2>今天天气很{{info}}</h2>
    <button v-on:click="change">切换天气</button>
    <h3>a的值是{{numbers.a}}</h3>
    <button @click="numbers.a++">a加1</button>
    <h3>b的值是{{numbers.b}}</h3>
    <button @click="numbers.b++">b加1</button>
</div>
</body>
<script type="text/javascript" src="../../js/vue.js"></script>
<script type="text/javascript">
    let vm = new Vue({
        el: '#root',
        data: {
            isHot: true,
            numbers: {
                a: 1,
                b: 1
            }
        },
        methods: {
            change() {
                this.isHot = !this.isHot;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        watch: {
            // 监视多级属性结构中某个属性的变化
            /*  'numbers.a':{
                  handler(nv, ov) {
                      console.log("a加1")
                  }
              }*/
            numbers: {
                // 监视多级属性结构中多个属性的变化
                deep: true,
                handler() {
                    console.log("a加1")
                }
            }
        }
    })
</script>
</html>
```
## 监视简写
当不需要deep 或者其他属性时，可以简写
```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>深度监视</title>
</head>
<body>
<div id="root">
    <h2>今天天气很{{info}}</h2>
    <button v-on:click="change">切换天气</button>
</div>
</body>
<!--

-->
<script type="text/javascript" src="../../js/vue.js"></script>
<script type="text/javascript">
    let vm = new Vue({
        el: '#root',
        data: {
            isHot: true
        },
        methods: {
            change() {
                this.isHot = !this.isHot;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        watch: {
            // 简写
            isHot(nv, ov) {
                console.log('nv' + nv)
                console.log('nv' + ov)
                console.log("发现属于被修改");
            }
        }
    })

    // vm.$watch('isHot',function (nv, ov) {
    //     console.log('isHot被修改了',nv,ov)
    // })
</script>
</html>
```
### computed和watch之间的区别
>  _1.computed能完成的功能，watch都可以完成
2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
两个重要的小原则：
1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm或组件实例对象。
2.所有不被Vue所管理的函数（定时器的回调函数，ajax的回调函数等），最好写成箭头函数，这样this的指向才是vm或组件实例对象。_

 ![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646385913427-6018c50b-5d09-4bff-9b60-e627a8d41c94.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=232&id=u0bd6763d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=1374&originalType=binary&ratio=1&rotation=0&showTitle=false&size=519463&status=done&style=none&taskId=ud6c79bc5-abfa-491c-8ff6-dbb9a6e2015&title=&width=687)
​

# 10.绑定样式
## 1.class样式
​

## 2.style样式
​

# 11.条件渲染
> 条件渲染
> 1.v-if
> 写法：
> （1）.v-if="表达式"
> （2）.v-else-if="表达式"
> (3).v-else="表达式"
> 适用于：切换频率低的场景
> 特点：不展示dom元素直接被移除
> 注意：v-if可以和：v-else-if、v-else一起使用。但要求结果不能被打断
> ​

> 2.v-show
> 写法： v-show=“表达式”
> ​

> 适用于：切换频率较高的场景
> 特点：不展示DOM元素未被移除，仅仅是使用样式隐藏
> ​

> 3.备注：使用v-if的时候，元素可能无法获取到，而使用v-show一定可以获取到

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>条件渲染</title>
    <script type="text/javascript" src="../../js/vue.js"></script>
</head>
<body>
<div id="root">
    <!--使用v-show来进行条件渲染-->
    <h2 v-show="true">欢迎来到2022年,{{name}}</h2>
    <h3 v-if="a">欢迎来到2022年,{{name}}</h3>
    <h2 >当前值是{{n}}</h2>
    <button @click="n++">点我</button>
    <div v-if="n==1">java</div>
    <div v-else-if="n==2">js</div>
    <div v-else>C++</div>
    <div v-show="n==3">C#</div>
    <div v-if="n==2">ts</div>

   <template v-if="n==5">
       <h2>1</h2>
       <h2>2</h2>
       <h2>3</h2>
   </template>

</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {
            n:0,
            a:true,
            name: '张三'
        }
    });
</script>
</html>
```
# 12.列表渲染
> v-for指令
> 1.用于展示列表数据
> 2.语法：v-for="(item, index) in xxx" :key="yyy"
> 3.可遍历：数组、对象、字符串、指定次数

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基本列表</title>
    <script type="text/javascript" src="../../js/vue.js"></script>
</head>
<body>
<div id="root">
    <div>
        <li v-for="p in persons" :key="p.id">{{p.name}}-{{p.age}}</li>
    </div>
</div>
</body>

<script type="text/javascript">
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {
            persons: [
                {
                    id: 1,
                    name: '张三',
                    age: 20
                }, {
                    id: 2,
                    name: '李四',
                    age: 24
                }, {
                    id: 3,
                    name: '王五',
                    age: 18
                }
            ]
        }
    });
</script>
</html>
```
## key原理
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646492283875-695e616f-27ca-4b3a-a0df-f707c4c20bf8.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=505&id=u3ceab77f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1010&originWidth=1726&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1164651&status=done&style=none&taskId=u97998aa8-6499-4936-8146-8d98117439e&title=&width=863)
​

列表过滤
​

​

​

​

​

​

# 收集表单数据


![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646495143195-9f93e6e3-16b5-4854-8cf2-c2eaa40444e4.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=286&id=uafe21ded&margin=%5Bobject%20Object%5D&name=image.png&originHeight=572&originWidth=1508&originalType=binary&ratio=1&rotation=0&showTitle=false&size=665147&status=done&style=none&taskId=u65701b1f-3a21-42d4-acff-ff2408c1895&title=&width=754)
```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>收集表单数据</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <form @submit.prevent="sub">
        账号<input type="text" v-model.trim="userInfo.account"><br><br>
        密码<input type="password" v-model="userInfo.password"><br><br>
        年龄<input type="number" v-model.number="userInfo.age"><br><br>
        性别
        男<input type="radio" name="sex" v-model="userInfo.sex" value="1">
        女<input type="radio" name="sex" v-model="userInfo.sex" value="2"><br><br>
        爱好：
        学习<input type="checkbox" v-model="userInfo.hobby" value="001">
        吃饭<input type="checkbox" v-model="userInfo.hobby" value="002">
        打游戏<input type="checkbox" v-model="userInfo.hobby" value="003"><br><br>
        学校
        <select v-model="userInfo.school">
            <option value="1">北京</option>
            <option value="2">天津</option>
            <option value="3">上海</option>
        </select>
        <br><br>
        其他信息
        <textarea v-model.lazy="userInfo.other"></textarea><br><br>
        <input type="checkbox" v-model="userInfo.agree">阅读并接受<a href="">《用户协议》</a>
        <br>
        <button>提交</button>
    </form>
</div>
<script type="text/javascript">
    // 阻止vue启动时生成生产提示
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {
            userInfo: {
                account: '',
                password: '',
                age:'',
                sex: '',
                school: '',
                hobby: [],
                other: '',
                agree:''
            }
        },
        methods: {
            sub() {
                alert(JSON.stringify(this.userInfo))
            }
        }
    });


</script>
</body>
</html>
```
# 过滤器
> 对于显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
> 语法
> 1.注册过滤器vue.filter(name,callback)或new Vue{filters:{}}
> 2.使用过滤器：{{xxx  |   过滤器名}}或 v-bind:属性 ="xxx  |  过滤器名"
> 备注：
> 1.过滤器也可以接受额外参数、多个过过滤器也可以串联
> 2.并没有改变原本的数据，是产生新的对应的数据

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>过滤器</title>
    <script type="text/javascript" src="../js/vue.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.10.8/dayjs.min.js"></script>
</head>
<body>
<div id="root">
    <h2>{{time | timeFormater | jiequ}}</h2>
</div>
<script type="text/javascript">
    // 阻止vue启动时生成生产提示
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {
            time: Date.now()
        },
        filters: {
            timeFormater(value) {
                return dayjs(value).format('YYYY年MM月DD日 HH:mm:ss')
            },
            jiequ(value) {
                return value.slice(0,3)
            }
        },
        methods: {
            update() {
                setInterval(() => {
                    this.time=Date.now();
                }, 1000);
            }
        }
    });
    vue.update();

</script>
</body>
</html>
```
# 内置指令
## v-text
> 1.作用：向其所在的节点中渲染文本内容
> 2.与插值语法的区别：v-text会替换掉节点中的内容，{{xxx}}则不会。

## v-html
> 1.作用：向指定节点中渲染包含html结构的内容。
> 2.与插值语法的区别：
> （1）.v-html会替换节点中所有的你内容，{{xxx}} 则不会
> （2）.v-html可以识别htnl结构
> 3.严重注意：v-html有安全隐患！！！！！
> （1）在网站上动态渲染任意HTML是非常危险的，容器导致XSS攻击。
> （2）一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！

## v-cloak
> 1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
> 2.使用css配合v-cloak可以解决网络慢页面展示出{{xxx}}的问题。

## v-once
> 1.v-once所在节点在初次动态渲染后，就视为静态内容。
> 2.以后数据的改变不会引其v-once所在结构的更新，可以用于优化性能。

## v-pre
> 1.跳过其所在节点的编译过程。
> 2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。

​

## 自定义指令
> 一、定义语法：
> 1.局部指令：
> new Vue（{
> directives:{指令名：配置对象}
> }）
> 或
> new Vue（{
> directives:{指令名：回调函数}
> }）
> 2.全局指令
> Vue.directives('指令名'，配置对象)或Vue.directives('指令名'，回调函数）
> 二、配置对象中常用的3个回调
> 1.bind：指令与元素成功绑定时调用。
> 2.inserted：指令所在元素被插入页面时调用。
> 3.update：指令所在模版结构被重新解析时调用。
>   
> 三、备注：
> 指令定义时不加v-，使用时加v-
> 指令名如果多个单词，要使用kebab-case命名方式，不要使用camelCase命名。

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>自定义指令</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>
<div id="root">
    <div v-text="n"></div>
    <h2>放大十倍后n值:<span v-big="n"></span></h2>
    <hr>
    n值<input type="text" v-fbind:value="n">

</div>
<script type="text/javascript">
    // 阻止vue启动时生成生产提示
    Vue.config.productionTip = false
    let vue = new Vue({
        el: '#root',
        data: {
            n: 1
        },
        directives: {
            big(element, binding) {
                element.innerText = binding.value * 10
            },
            fbind: {
                bind(element, binding) {
                    element.value = binding.value;
                },
                inserted(element, binding) {
                    element.focus()
                },
                update(element, binding) {
                }
            }
        }
    });
</script>
</body>
</html>
```
# 生命周期
> 1.又名：生命周期回调函数、生命周期函数、生命周期钩子。
> 2.是什么：Vue在关键时刻帮我们调用调一些特殊名称调函数。
> 3.生命周期函数调名字不可更改，但函数但具体内容是程序员根据需求编写的。
> 4.生命周期函数中的this指向是vm或组件实例对象。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/25635684/1646559114735-15a44454-8f62-47a4-a7c6-369e180e05f4.png#clientId=u8f57a6b3-758f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=946&id=ud36f303f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1892&originWidth=1469&originalType=binary&ratio=1&rotation=0&showTitle=false&size=417107&status=done&style=none&taskId=uf5a8c03e-6b1b-47c4-8007-6ded3f4ec17&title=&width=734.5)







