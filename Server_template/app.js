//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//2.1：创建web 服务器
var server = express();
//2.2:创建express对象绑定4000端口
server.listen(5050);

//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"zty",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:8080 允许8080访问我
//  服务器:4000 你
server.use(cors({
  //允许程序列表  教授架
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))



//8:功能一:完成用户登录
server.get("/login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
console.log(uname,upwd);
//(2)创建sql语句查询
var sql = "SELECT uid FROM zty_user WHERE uname = ? AND upwd = md5(?)";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
  console.log(result);
 if(err)throw err;
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
   //5.1:保存用户id在session对象中
   //result数据格式 [{id:1}]
  req.session.uid = result[0].uid;
  var uid=req.session.uid
  console.log('登录session');
  console.log(req.session.uid );

  res.send({code:1,msg:"登录成功",data:uid});
 }
 //(6)将结果返回脚手架
})
})


//#检测   16:00
//(1)查询数据库是否有xz_login
//   USE xz;
//   SELECT * FROM xz_login;
//(2)启动服务器
//   node app.js
//(3)打开浏览器在地址栏输入按回
//   http://127.0.0.1:4000/login?uname=tom&upwd=123
//   http://127.0.0.:4000/login?uname=tom&upwd=122   
//app.js 复9~73   

//功能二:完成用户注册   --杨

//功能二:完成用户注册   0000
server.get("/register",(req,res)=>{
  //(1)获取脚手架参数 uname upwd
  var uname= req.query.uname
  var upwd=req.query.upwd
  var phone=req.query.phone
  var email=req.query.email
  console.log(uname)
  var sql = "SELECT uid FROM zty_user WHERE uname = ?";
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:"用户名已存在"});
    }
    else{
      //(2)创建sql语句插
      var sql='INSERT INTO zty_user VALUES (?,?,md5(?),?,?,?,?,?,?)'
      //(3)执行sql语句
      pool.query(sql,[null,uname,upwd,email,phone,null,null,null,null],(err,result)=>{
      if(err)throw err;
      //(4)获取执行结果
      //(5)判断查询是否成功 result.length
      if(result.affectedRows>0){
        res.send({code:200,msg:"注册成功"});
      }
      //(6)将结果返回脚手架
    })
  }
  
  })
  })

// 刘 ok

//功能二:分页显示s首页商品列表  
//1:接收GET /product 
server.get("/product",(req,res)=>{
//2:接收二个参数 
//  pno 页码 pagePageSize 页大小
var pno = req.query.pno;
var ps = req.query.pageSize;
//3:设置默认值 pno=1 pageSize=4
if(!pno){pno=1}
if(!ps){ps=4}
//4:计算第一问号值 LIMIT ?(从几开始(pno-1)*pageSize),?(查询几行-页大小)
var off = (pno-1)*ps;
//5:对pageSize转int
ps = parseInt(ps); 
//6:创建sql语句
//自己写:库名;表名;列名 小写
var sql = "SELECT pid,price,title,pic,href ,subtitle FROM zty_index_product LIMIT ?,?";
//7:执行sql语句
pool.query(sql,[off,ps],(err,result)=>{
  if(err){throw err}else{
     res.send({code:1,msg:"查询成功",data:result});
    //  result返回商品查询到的四个商品
  console.log('我看看');
  console.log(result);
  }
 
})
//8:将返回结果发送脚手架 
})
//检测 83~104 复制 你app.js重新
//启动 node app.js
//http://127.0.0.1:4000/product
//http://127.0.0.1:4000/product?pno=2


// 荣###
// 商品详情 /detail   表 zty_laptop 详情表 ok
server.get('/detail',(req,res)=>{
  var uid=req.session.uid
  var lid=req.query.lid;
  console.log(111);
  console.log(lid);
// sql语句
  var sql='SELECT * FROM zty_laptop WHERE lid=?';
  // 执行sql语句
  pool.query(sql,[lid],(err,result)=>{
    if(err){throw err}
    
       res.send({code:1,msg:"查询成功",data:result});
    console.log('我看看呀呀呀');
    console.log(result);
  
    
   
  })
})



//ALTER TABLE xz_cart ADD uid INT;
//功能三:将商品添加至购物车
//1:接收请求 GET /addcart
server.get("/addcart",(req,res)=>{
 //2:获取当前用户登录凭证 uid
 var uid = req.session.uid;
 //3:如果用户没登录返回错误消息
 if(!uid){
  res.send({code:-1,msg:"请登录"});return; 
}
 //4:获取商品编号/商品价格/商品名称
 var lid=req.query.lid;
 var adult=req.query.adult;
 var children=req.query.children;
 var organize=req.query.organize;
 var uname=req.query.uname;
 var phone=req.query.phone;
 var address=req.query.address
 var price=req.query.price
 console.log(lid)
 //5:查询指定用户是否购买过此商品
 //var sql = "SELECT id FROM zty_cart WHERE uid = ? AND lid = ?";
 //6:执行sql
 //pool.query(sql,[obj],(err,result)=>{
  //if(err)throw err; 
  //7:在回调函数判断是否购买过
  //if(result.length==0){
  //8:添加一条数据
  var sql = "INSERT INTO zty_cart VALUES(?,?,?,?,?,?,?,?,?,?)";
  //}else{
  //9:更新一条数据
  //var sql = `UPDATE  zty_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
  //}
  //10:执行sql
  pool.query(sql,[null,uid,lid,adult,children,organize,uname,phone,address,price],(err,result)=>{
    if(err)throw err;
    console.log(result)
    if(result.affectedRows>0)
    {
      res.send({code:1,msg:"添加成功",data:result})
    }
    
  })
});


//检测
//http://127.0.0.1:4000/addcart?lid=1&lname=mac&price=9


//http://127.0.0.1:4000/login?uname=tom&upwd=123


//http://127.0.0.1:4000/addcart?lid=1&lname=mac&price=9






// 功能四：查询指定用户购物车列表   ok   刘
server.get("/findcart",(req,res)=>{
    // 1.获取当前用户uid
    var uid=req.session.uid;
    // 2.如果没有uid  提示
    if(!uid){
        res.send({code:-1,msg:"请登录"});
        return;
    }
    // 3.创建sql  查询购物车
    var sql = "SELECT id,lid,lname,price,count FROM  zty_cart WHERE uid = ?";
    // 4.执行sql并且将结果返回
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,msg:"查询成功",data:result})
    })
})
//检测 153~170 复制
//http://127.0.0.1:4000/findcart
//http://127.0.0.1:4000/login?uname=tom&upwd=123
//http://127.0.0.1:4000/findcart


//功能五:删除一个指定购物车中商品
server.get('/del',(req,res)=>{
  // 1:获取当期那用户uid
  var uid=req.session.uid;
  // 2:如果没有uid提示
  if(!uid){
    res.send({code:-1,msg:'请登录'});return;

  }
  // 1获取购物车id
  var  id=req.query.id;
  // 2创建sql
  var sql='DELETE FROM zty_cart WHERE id=?'
  // 3 执行
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:'删除成功'})
    }else{
      res.send({code:-1,msg:'删除失败'})
    }

  })
})
// 测试
//(1)mysql 查询
//select id from xz_cart;
//http://127.0.0.1:4000/del?id=5
//http://127.0.0.1:4000/login?uname=tom&upwd=123
//http://127.0.0.1:4000/del?id=5


//功能六:删除多个指定购物车中商品
server.get('/delm',(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  // 1:获取一组id 1,2
  var id=req.query.id;
  // 2创建sql语句
  var sql=`DELETE FROM xz_cart WHERE id IN(${id})`;
  // 3执行sql并且返回结果
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
      
    }else{
      res.send({code:-1,msg:"删除失败"});

    }

  })

})

//功能七  查询用户信息
server.get('/uid',(req,res)=>{
  var uid=req.session.uid;
  console.log("我看看")
    console.log(uid);
  if(!uid){
    res.send({code:-2,msg:"请登录"});
    return;
  }
  // 1:获取一组id 1,2
  // 2创建sql语句
  var sql="SELECT uid FROM zty_user";
  // 3执行sql并且返回结果
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      console.log(result)
      res.send({code:1,msg:result});
      
    }

  })

})

//(1)mysql 查询 207~227复制
//select id from xz_cart;
//http://127.0.0.1:4000/delm?id=12,15
//http://127.0.0.1:4000/login?uname=tom&upwd=123
//http://127.0.0.1:4000/delm?id=6,7