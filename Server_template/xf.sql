SET NAMES UTF8;
DROP DATABASE IF EXISTS zty;
CREATE DATABASE zty CHARSET=UTF8;
USE zty;

/**用户信息------注册,登录 用户查询数据表中有该用户**/
CREATE TABLE zty_user(
  uid INT PRIMARY KEY AUTO_INCREMENT, 
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  age DATE,
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);



/**商品信息------首页**/

CREATE TABLE zty_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128) 

);
/**商品信息------详情页**/

/**商品详情**/
CREATE TABLE zty_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  subtitle VARCHAR(128),      #评分出行
  title VARCHAR(128),         #主标题
  price DECIMAL(10,2),        #价格
  spec VARCHAR(64),           #规格/团期价格
  lname VARCHAR(32),          #商品名称
  details VARCHAR(1024),      #详情
  p_img VARCHAR(128)          #详情页的图片
);
/**购物车条目**/
CREATE TABLE zty_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE zty_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE zty_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页轮播广告商品****/
CREATE TABLE zty_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  href VARCHAR(128)
);

/**插入数据**/
/****注册****/
INSERT INTO zty_user VALUES
(NULL, 'dingding', md5('123456'), 'ding@qq.com', '13501234567','1998-12-12', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', md5('123456'), 'dang@qq.com', '13501234568','1998-12-12',  'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', md5('123456'), 'dou@qq.com', '13501234569','1998-12-12',  'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', md5('123456'), 'ya@qq.com', '13501234560','1998-12-12',  'img/avatar/default.png', '秦小雅', '0');

/****首页商品****/
INSERT INTO zty_index_product VALUES
(NULL, 'Apple MacBook Air系列', '酷睿双核i5处理器|256GB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/index/study_computer_img1.png', 6988, 'product_details.html?lid=1'),
(NULL, '小米Air 金属超轻薄', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD独立显卡', 'img/index/study_computer_img2.png', 3488, 'product_details.html?lid=5'),
(NULL, '联想E480C 轻薄系列', '酷睿双核i7处理器|256GB SSD|4GB内存|英特尔HD显卡680M', 'img/index/study_computer_img3.png', 5399, 'product_details.html?lid=9'),
(NULL, '华硕RX310 金属超极本', '酷睿双核i5处理器|512GB SSD|4GB内存|英特尔HD游戏级显卡', 'img/index/study_computer_img4.png', 4966, 'product_details.html?lid=13'),
(NULL, '联想小新700 电竞版游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/index/study_computer_img5.png', 6299, 'product_details.html?lid=17'),
(NULL, '戴尔灵越燃7000 轻薄窄边', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD显卡', 'img/index/study_computer_img3.png', 5199, 'product_details.html?lid=19'),
(NULL, '神州战神Z7M 高性价比游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD游戏机独立显卡', 'img/index/study_computer_img4.png', 5799, 'product_details.html?lid=38');


INSERT INTO zty_laptop VALUES
(1, 1, '标题', '标题提', 2365, '贵妃', '名字', '详情', 'img/details/sdasdf.png'),
(2, 1, '标题', '标题提', 2365, '贵妃', '名字', '详情', 'img/details/sdasdf.png');


/****首页轮播广告商品****/
INSERT INTO zty_index_carousel VALUES
(NULL, 'img/index/banner1.png','product_details.html?lid=28'),
(NULL, 'img/index/banner2.png','product_details.html?lid=19'),
(NULL, 'img/index/banner3.png','product_details.html?lid=19'),
(NULL, 'img/index/banner4.png','product_details.html?lid=19');