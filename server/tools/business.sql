-- 业务表

-- 花卉表
DROP TABLE IF EXISTS `flower`;

CREATE TABLE `flower` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flower_name` varchar(20) NOT NULL,
  `flower_type_id` int(11) NOT NULL,
  `flower_language` varchar(20) NOT NULL,
  `flower_origina_price` int(20) NOT NULL DEFAULT 0,
  `flower_current_price` int(20) NOT NULL DEFAULT 0,
  `is_new_product` boolean NOT NULL DEFAULT 0,
  `sales_volume` int(20) NOT NULL DEFAULT 0,

  `deleted` boolean NOT NULL DEFAULT 0,
  `create_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- 花卉类别表
DROP TABLE IF EXISTS `flowerType`;

CREATE TABLE `flowerType` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(20) NOT NULL,
  `group_standard` int(4) NOT NULL DEFAULT 0, -- 0: 按产品分类  1：按用途分类

  `deleted` boolean NOT NULL DEFAULT 0,
  `create_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_id` int(11) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- 