-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 26, 2023 at 03:08 PM
-- Server version: 8.0.33
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sutpitaara_test`
--
CREATE DATABASE IF NOT EXISTS `sutpitaara_test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sutpitaara_test`;

-- --------------------------------------------------------

--
-- Table structure for table `Address`
--

CREATE TABLE `Address` (
  `id` int NOT NULL,
  `name` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `mobile` text NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `pinCode` text NOT NULL,
  `userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Address`
--

INSERT INTO `Address` (`id`, `name`, `mobile`, `address`, `city`, `state`, `pinCode`, `userId`) VALUES
(1, '', '', 'abc, xyz, pqr, Delhi-110022', 'Pitampura', 'New Delhi', '110022', 1),
(2, '', '', 'abc, xyz, pqr, Delhi-110083', 'Chandni Chowk', 'New Delhi', '110083', 4),
(3, '', '', 'abc, xyz, pqr, Delhi-110098', 'Meerut', 'Uttar Pradesh', '110098', 5),
(4, '', '', 'abc, xyz, pqr, Delhi-110022', 'Pitampura', 'New Delhi', '110022', 1),
(5, '', '', 'abc, xyz, pqr, Delhi-110083', 'Chandni Chowk', 'New Delhi', '110083', 4),
(6, '', '', 'abc, xyz, pqr, Delhi-110098', 'Meerut', 'Uttar Pradesh', '110098', 5),
(8, 'nam', '875985698', 'asdfadsf', 'sdaf', 'asdf', '123456', 22),
(9, 'nam', '875985698', 'asdfadsf', 'sdaf', 'asdf', '123456', 22),
(10, 'nam', '875985698', 'asdfadsf', 'sdaf', 'asdf', '123456', 22),
(11, 'nam', '875985698', 'asdfadsf', 'sdaf', 'asdf', '123456', 28);

-- --------------------------------------------------------

--
-- Table structure for table `AvlSize`
--

CREATE TABLE `AvlSize` (
  `sizeId` int NOT NULL,
  `productId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `AvlSize`
--

INSERT INTO `AvlSize` (`sizeId`, `productId`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(3, 2),
(5, 2),
(6, 3);

-- --------------------------------------------------------

--
-- Table structure for table `BlogComment`
--

CREATE TABLE `BlogComment` (
  `id` int NOT NULL,
  `comment` text NOT NULL,
  `blogId` int NOT NULL,
  `userId` int NOT NULL,
  `userName` text NOT NULL,
  `userProfile` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `BlogComment`
--

INSERT INTO `BlogComment` (`id`, `comment`, `blogId`, `userId`, `userName`, `userProfile`, `createdAt`) VALUES
(4, 'random commet', 6, 22, 'user name', 'user profile', '2022-12-25 13:57:25'),
(5, 'random commet', 6, 28, 'user name', 'user profile', '2023-01-02 01:30:43');

-- --------------------------------------------------------

--
-- Table structure for table `BlogPost`
--

CREATE TABLE `BlogPost` (
  `id` int NOT NULL,
  `author` int NOT NULL,
  `title` varchar(75) NOT NULL,
  `subtitle` varchar(100) DEFAULT NULL,
  `summary` tinytext,
  `published` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL,
  `content` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `BlogPost`
--

INSERT INTO `BlogPost` (`id`, `author`, `title`, `subtitle`, `summary`, `published`, `createdAt`, `updatedAt`, `content`) VALUES
(2, 22, 'blog title', '', 'kind of summary', 0, '2022-12-12 04:10:04', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(3, 22, 'blog title', '', 'kind of summary', 0, '2022-12-12 04:21:51', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(4, 22, 'blog title', '', 'kind of summary', 0, '2022-12-15 03:44:48', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(5, 22, 'blog title', '', 'kind of summary', 0, '2022-12-15 04:18:40', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(6, 22, 'blog title', '', 'kind of summary', 0, '2022-12-24 14:03:52', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(7, 22, 'blog title 2', '', 'kind of summary', 0, '2022-12-24 14:04:06', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(8, 22, 'blog title 2', '', 'kind of summary', 0, '2022-12-24 14:26:28', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(9, 22, 'blog title 22', '', 'kind of summary', 0, '2022-12-24 15:57:23', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(10, 22, 'blog title 22', '', 'kind of summary', 0, '2022-12-24 16:33:34', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(11, 28, 'blog title 28', '', 'kind of summary', 0, '2023-01-02 01:30:16', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(12, 22, 'blog title', '', 'kind of summary', 0, '2023-01-02 01:43:03', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf'),
(13, 22, 'blog title', '', 'kind of summary', 0, '2023-01-02 02:42:03', NULL, 'sadfa df adga gargrgraf fh f gsdfhg  reshiv adgfd gd gandu asdf dsfadf');

-- --------------------------------------------------------

--
-- Table structure for table `Cart`
--

CREATE TABLE `Cart` (
  `userId` int NOT NULL,
  `productId` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `color` text,
  `size` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Cart`
--

INSERT INTO `Cart` (`userId`, `productId`, `quantity`, `color`, `size`) VALUES
(0, 0, 10, NULL, NULL),
(0, 0, 10, NULL, NULL),
(0, 0, 10, NULL, NULL),
(0, 0, 10, NULL, NULL),
(0, 0, 10, NULL, NULL),
(0, 0, 10, NULL, NULL),
(0, 0, 1, NULL, 'large'),
(0, 0, 5, NULL, 'large'),
(3, 22, 3, 'Stri', 'M'),
(3, 22, 4, 'Stri', 'M'),
(3, 22, 4, 'Stri', 'M'),
(3, 23, 4, 'Stri', 'M'),
(28, 23, 4, 'Stri', 'M');

-- --------------------------------------------------------

--
-- Table structure for table `Category`
--

CREATE TABLE `Category` (
  `cId` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `color` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Category`
--

INSERT INTO `Category` (`cId`, `name`, `color`) VALUES
(1, 'unknown', 'black'),
(2, 't-shirt', 'red'),
(3, 'shirt', 'blue'),
(4, 'lehenga', 'pink'),
(5, 'party', NULL),
(6, 'kids', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Coupon`
--

CREATE TABLE `Coupon` (
  `code` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `type` text NOT NULL,
  `discount` int NOT NULL,
  `validity` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `GetUserRequest`
--

CREATE TABLE `GetUserRequest` (
  `userId` int NOT NULL,
  `token` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

CREATE TABLE `Images` (
  `id` int NOT NULL,
  `path` varchar(255) NOT NULL,
  `category` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Images`
--

INSERT INTO `Images` (`id`, `path`, `category`) VALUES
(1, 'local path here1', 1),
(2, 'local path here2', 2),
(3, 'local path here3', 3),
(4, 'local path here4', 4),
(5, 'local path here5', 5),
(6, 'local path here6', 6);

-- --------------------------------------------------------

--
-- Table structure for table `Order`
--

CREATE TABLE `Order` (
  `orderId` int NOT NULL,
  `status` text NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deliveryAddress` text NOT NULL,
  `paymentMethod` text NOT NULL,
  `paymentUrl` text NOT NULL,
  `totalAmount` double NOT NULL,
  `userId` int NOT NULL,
  `coupon` text NOT NULL,
  `discountedAmount` text NOT NULL,
  `randomIdentifier` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Order`
--

INSERT INTO `Order` (`orderId`, `status`, `orderDate`, `deliveryAddress`, `paymentMethod`, `paymentUrl`, `totalAmount`, `userId`, `coupon`, `discountedAmount`, `randomIdentifier`) VALUES
(18, 'String', '2022-12-28 06:44:44', '', 'S', 'Stri', 100, 3, 'String', '', '[184, 297, 904, 691, 812, 879, 940, 717, 686, 370]'),
(19, 'String', '2023-01-02 01:33:22', '', 'S', 'Stri', 100, 28, 'String', '', '[705, 222, 657, 841, 678, 735, 183, 285, 301, 102]');

-- --------------------------------------------------------

--
-- Table structure for table `OrderItem`
--

CREATE TABLE `OrderItem` (
  `orderItemId` int NOT NULL,
  `orderId` int NOT NULL,
  `productId` int NOT NULL,
  `category` text NOT NULL,
  `userId` int NOT NULL,
  `price` double NOT NULL,
  `color` text NOT NULL,
  `size` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gender` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `OrderItem`
--

INSERT INTO `OrderItem` (`orderItemId`, `orderId`, `productId`, `category`, `userId`, `price`, `color`, `size`, `gender`, `quantity`) VALUES
(1, 16, 22, 'c2', 3, 100, 'Str', 'Stri', 'St', 2),
(2, 17, 22, 'c2', 3, 100, 'Str', 'Stri', 'St', 2),
(3, 17, 21, 'c2', 3, 150, 'Str', 'Stri', 'St', 2),
(4, 18, 22, 'c2', 3, 100, 'Str', 'Stri', 'St', 2),
(5, 18, 21, 'c2', 3, 150, 'Str', 'Stri', 'St', 2),
(6, 19, 22, 'c2', 28, 100, 'Str', 'Stri', 'St', 2),
(7, 19, 21, 'c2', 28, 150, 'Str', 'Stri', 'St', 2);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `userId` int NOT NULL,
  `name` text,
  `email` varchar(250) NOT NULL,
  `password` text NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `profileImage` text,
  `gender` text,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `salt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='\n';

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`userId`, `name`, `email`, `password`, `mobile`, `profileImage`, `gender`, `updatedAt`, `createdAt`, `salt`) VALUES
(1, 'Dhruv', 'dhruv123@test.com', '1234', '1234567890', 'http://sut.img.img1.png', 'M', '2022-12-10 13:38:27', '2022-12-10 13:38:27', ''),
(2, 'Dhruv Yadav', 'dhruv12@test.com', '1234', '0123456789', NULL, 'M', '2022-12-10 13:38:27', '2022-12-10 13:38:27', ''),
(3, 'Rajesh', 'rjesh123@test.com', '12adasdasd34', '1324567890', NULL, 'M', '2022-12-10 13:38:27', '2022-12-10 13:38:27', ''),
(4, 'Rakesh', 'rkesh@test.com', '12adasdasd34', '1324367890', NULL, 'M', '2022-12-10 13:38:27', '2022-12-10 13:38:27', ''),
(5, 'Priya', 'pr@test.com', '12adasdasd34', '1322117890', NULL, 'F', '2022-12-10 13:38:27', '2022-12-10 13:38:27', ''),
(6, 'Rajesh Khanna', 'r123@test.com', '12asdadadaa34', '1237687890', NULL, 'M', '2022-12-10 13:38:27', '2022-12-10 13:38:27', ''),
(15, 'test name', 'first@emial.com', '2d423b640431d0bd7b5e09967dd35f2b6a4e7e297b0dd363165d62a49c2ce4f7', '0909090901', 'kfkajsd', 'M', '2022-12-11 08:21:34', '2022-12-11 08:21:34', '363225185bf781a5593c6055fa255195ecc02bccfbda1f9ec0f812b9d1cc97b7'),
(24, 'test name', 'second@emial.com', '93bbb9a116d73a56b248f3a4ad50679356340070a4d686ced3511e9f52df3bdb', '0909090902', 'kfkajsd', 'M', '2022-12-16 17:04:25', '2022-12-16 17:04:25', 'c66d5b608b481779d98dc62e1d04953f8d57d4c8b206374745eda2b737287f45'),
(27, 'test name', 'third@emial.com', 'af7934cf57ee9f30438303cade0fa9c89048cae5be8e1cc51ad8b2f73e239f14', '0909090903', 'kfkajsd', 'M', '2022-12-24 17:50:28', '2022-12-24 17:50:28', '415acc5f99ed32b32b843f55f90899a2c167c161b7d117a7854fc577d4b77ef3'),
(28, 'test name', 'fourth@emial.com', '2e7d5aa60d849e98193d9c0213d02de1b5b84f72311443160f3cee70832589a8', '0909090904', 'kfkajsd', 'M', '2023-01-02 01:28:47', '2023-01-02 01:28:47', '7dc8dc699cde41ab17433d723a90be9532f2b7323f5882414839b73aa3c9ed24');

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--

CREATE TABLE `Product` (
  `id` int NOT NULL,
  `image` text NOT NULL,
  `name` text NOT NULL,
  `des` text,
  `mrp` double NOT NULL,
  `price` double NOT NULL,
  `category` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `genderSp` text,
  `color` text,
  `avlSize` text NOT NULL,
  `no_items` int DEFAULT NULL,
  `rating` double NOT NULL DEFAULT '0',
  `ratingCount` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`id`, `image`, `name`, `des`, `mrp`, `price`, `category`, `genderSp`, `color`, `avlSize`, `no_items`, `rating`, `ratingCount`) VALUES
(1, '', 'abc', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'M', NULL, '', 100, 0, 0),
(2, '', 'xyz', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 120.24, 120.24, '', 'M', NULL, '', 50, 0, 0),
(3, '', 'sdad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'M', NULL, '', 2, 0, 0),
(4, '', 'abac', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'red', '', 1, 0, 0),
(5, '', 'sdadas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'black', '', 0, 0, 0),
(6, '', 'fgfg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'black', '', 80, 0, 0),
(7, '', 'vsvbsg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'M', 'black', '', 60, 0, 0),
(8, '', 'asd', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'black', '', 120, 0, 0),
(9, '', 'cvvsdfg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', NULL, '', 50, 0, 0),
(10, '', 'abc', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'M', NULL, '', 100, 0, 0),
(11, '', 'xyz', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 120.24, 120.24, '', 'M', NULL, '', 50, 0, 0),
(12, '', 'sdad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'M', NULL, '', 2, 0, 0),
(13, '', 'abac', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'red', '', 1, 0, 0),
(14, '', 'sdadas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'black', '', 0, 0, 0),
(15, '', 'fgfg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'black', '', 80, 0, 0),
(16, '', 'vsvbsg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'M', 'black', '', 60, 0, 0),
(17, '', 'asd', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', 'black', '', 120, 0, 0),
(18, '', 'cvvsdfg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 200, 190.5, '', 'F', NULL, '', 50, 0, 0),
(22, 'testreview', 'testreviewq', '', 0, 0, 'c2', 'M', 'String', '', NULL, 0, 0),
(23, 'testreview', 'trefre', '', 0, 0, 'c2', 'M', 'String', '', NULL, 0, 0),
(24, 'media/product_24.jpg', 'Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour- Pink\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.\r\n\r\n\r\n', 4000, 2000, 'Dhakai Jamdani', 'F', 'Pink', 'Available in free size', NULL, 0, 0),
(25, 'media/product_25.jpg', 'Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour- Blue\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.\r\n', 4000, 2000, 'Dhakai Jamdani', 'F', 'blue', 'Available in free size', NULL, 0, 0),
(26, 'media/product_26.jpg', 'Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour- Yellow Ochre\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.\r\n', 4000, 2000, 'Dhakai Jamdani', 'F', 'Yellow Ochre', 'Available in free size', NULL, 0, 0),
(27, 'media/product_27.jpg', 'Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour- Off White\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.\r\n', 4000, 2000, 'Dhakai Jamdani', 'F', 'Off White', 'Available in free size', NULL, 0, 0),
(28, 'testreview', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, 'c3', 'F', 'String', 'Available in free size', NULL, 0, 0),
(30, 'testreview', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, 'c3', 'F', 'String', 'Available in free size', NULL, 0, 0),
(31, '', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, '', 'F', '', 'Available in free size', 50, 0, 0),
(32, 'testreview', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, 'c3', 'F', 'String', 'Available in free size', NULL, 0, 0),
(33, '', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, 'c3', 'F', NULL, 'Available in free size', NULL, 0, 0),
(34, '', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, '', 'F', NULL, 'Available in free size', NULL, 0, 0),
(35, 'testreview', 'Kolka Pata Dhakai Jamdani', 'Adorn the ceremonial look wearing this beautifully craftedIndian dhakai jamdani Saree with classic geometric borders and designer motif work throughout the saree. It is one of the authentic dhakai handloom saree which is a must in every wardrobe. This dhakai jamdani has always enjoyed a prominent place in the fashion world as the most enduring, comforting, and body friendly fabric.\r\nTake your style statement up a notch higher this party season with this truly breath-taking geometric  motif  jamdani saree from sutpitaara exclusives. Crafted in premium quality 100% pure reshom.\r\nIt is delightful to drape because of the fine, soft texture. The blouse piece is included. Recommended only for dry washing.\r\n\r\nDelivery- free shipping all over India\r\nType- Dhakai jamdani saree\r\nOrnamentation- woven motif\r\nPrint or pattern- Dhakai jamdani saree \r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- Geometric motif\r\nSaree fabric- Dhakai jamdani  \r\nColour-\r\nBlouse- unstitched                                                 \r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4000, 2000, 'c3', 'F', 'String', 'Available in free size', NULL, 0, 0),
(36, 'media/product_36.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colors.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarsi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarsi silk saree with golden zari work\r\nOccasion- Festive wear, weddinh wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarsi pure silk \r\nColour- red\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarsi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Saree', 'F', 'Red', 'Available in free size', NULL, 0, 0),
(37, 'media/product_37.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Pink\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi silk saree', 'F', 'Pink', 'Available in free size\r\n', NULL, 0, 0),
(38, 'media/product_38.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nPrice- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Light Yellow\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi silk saree', 'F', 'Light yellow', 'Available in free size', NULL, 0, 0),
(39, 'media/product_39.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Yellow\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Silk Saree', 'F', 'Yellow', 'Available in free size', NULL, 0, 0),
(40, 'media/product_40.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarsai silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Orange\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi silk saree', 'F', 'Orange', 'Available in free size', NULL, 0, 0),
(41, 'media/product_41.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour-\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Silk Saree', 'F', 'Red', 'Available in free size', NULL, 0, 0),
(42, 'media/product_42.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Red\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Silk Saree', 'F', 'Red', 'Available in free size', NULL, 0, 0),
(43, 'media/product_43.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Navy blue\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Silk Saree', 'F', 'navy blue', 'Available in free size', NULL, 0, 0),
(44, 'media/product_44.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Pink\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Silk Saree', 'F', 'Pink', 'Available in free size', NULL, 0, 0),
(45, 'media/product_45.jpg', 'Banarasi Silk Saree', 'Pure silk saree with golden zari work. This lovely banarasi silk saree has rich, elaborate weaving patterns all over it. Rich in itself, this saree was made by expert weavers using blended silk yarns. Through its zari-ornated border and pallu, this saree conveys the rich and regal banarasi weave. A matching blouse piece is included with this saree.\r\nThese silky yards of history are the result of weaving customs that span generations. One of our most gorgeous Saree is this magnificent work of hand weaving. A stunning pattern made of zari, figures, and gorgeously contrasting colours.\r\n\r\nDelivery- free shipping all over India\r\nType- Banarasi silk saree\r\nOrnamentation- zari woven\r\nPrint or pattern- Banarasi silk saree with golden zari work\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- zari woven\r\nSaree fabric- Banarasi pure silk \r\nColour- Navy blue\r\nBlouse- unstitched                                                 \r\nBlouse fabric- Banarasi silk\r\nWash care- dry clean only.\r\nSaree length- 5.5m\r\nBlouse piece- 0.80m\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5000, 2500, 'Banarasi Silk Saree', 'F', 'Navy Blue', 'Available in free size', NULL, 0, 0),
(48, 'media/product_48.jpg', 'Georgette Floral Print Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewwelry. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral print\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour-  Sea Green.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette saree', 'F', 'Sea Green', 'Available in free size', NULL, 0, 0),
(49, 'media/product_49.jpg', 'Georgette Floral Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewelry. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral printy\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour- olive green.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'olive green', 'Available in free size', NULL, 0, 0),
(50, 'media/product_50.jpg', 'Georgette Floral Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewellery. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral printy\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour-  Navy Blue.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 2201, 4402, 'Georgette Saree', 'F', 'navy blue', 'Available in free size', NULL, 0, 0),
(51, 'media/product_51.jpg', 'Georgette Floral Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewellery. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral print\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour-  navy blue.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Navy Blue', 'Available in free size', NULL, 0, 0);
INSERT INTO `Product` (`id`, `image`, `name`, `des`, `mrp`, `price`, `category`, `genderSp`, `color`, `avlSize`, `no_items`, `rating`, `ratingCount`) VALUES
(52, 'media/product_52.jpg', 'Georgette Floral Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewellery. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral print\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour-  Dark Brown.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Dark Brown', 'Available in free size', NULL, 0, 0),
(53, 'media/product_53.jpg', 'Georgette Floral Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewellery. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral print\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour- Dark Red.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Dark Red', 'Available in free size', NULL, 0, 0),
(54, 'media/product_54.jpg', 'Georgette Floral Saree', 'This zari-woven ethnic pattern runs the length of this lightweight, translucent georgette saree. This blended georgette saree features a modern aesthetic and it comes with a  matching blouse. For a sophisticated saree look, wear it with modest jewellery. This saree with printed work will leave you mesmerised by its comfort.\r\nThe saree has a beautiful floral print and has a beautiful golden zari work border which makes it a perfect choice for wedding guest outfit or the traditional day at your work.\r\n\r\nDelivery- free shipping all over India\r\nType- Georgette floral printed saree\r\nOrnamentation- floral print with golden zari work\r\nPrint or pattern- floral print\r\nOccasion- Festive wear, wedding wear or party wear\r\nBorder- golden zari\r\nSaree fabric- Georgette\r\nSaree length- 5.5m\r\nColour-  black.\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Black', 'Available in free size', NULL, 0, 0),
(55, 'media/product_55.jpg', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  Yellow\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Yellow', 'Available in free size', NULL, 0, 0),
(56, 'media/product_56.jpg', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  Sea Blue\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Sea Blue', 'Available in free size', NULL, 0, 0),
(57, 'media/product_57.jpg', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  Grey\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Grey', 'Available in free size', NULL, 0, 0),
(58, 'media/product_58.jpg', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  Orange\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Orange', 'Available in free size', NULL, 0, 0),
(59, 'media/product_59.jpg', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  Orange red\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Orange red', 'Available in free size', NULL, 0, 0),
(60, 'media/product_60.jpg', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  Black\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Black', 'Available in free size', NULL, 0, 0),
(62, 'testreview', 'Braso Lace Border Saree', 'This beautiful braso saree attire is enhanced with floral print and golden lace border. This is a must have saree for small house party. The saree has all over ethnic patterns printed along the body of the saree and comes with a golden lace border which enhances the overall look. A wispy drape for soft, effortless elegance - a beautiful braso saree for an unforgettable appearance. Unfussy, exquisite, simply breathtaking!\r\nThis saree comes with a beautiful unstitched georgette blouse to complement your glam up look!\r\nDelivery- free shipping all over India\r\nType- Braso saree with golden lace border\r\nOrnamentation- Braso work\r\nPrint or pattern- floral\r\nOccasion- Indian house party/ festive/ outdoor event/ kitty party.\r\nBorder- golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour-  olive green\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 6499, 3272, 'Braso Saree', 'F', 'Olive Green', 'Available in free size', NULL, 0, 0),
(63, 'media/product_63.jpg', 'Georgette Stroke Saree', 'This elegant georgette saree with strokes pattern is a must have in your collection. This saree with printed work will leave you mesmerised by its comfort. This saree can be paired with many blouses and in many styles. It comes with golden motifs border that glam up the entire delicate pattern of this saree.\r\nThis classic, lightweight pure gorgette saree is festive in every way and maintains the classic traditions. A matching blouse piece completes the aesthetic of this saree.\r\n\r\n\r\nDelivery -  free shipping all over India\r\nType- Georgette strokes pattern saree\r\nOrnamentation- golden motif butta border\r\nPrint or pattern- strokes pattern\r\nOccasion- Indian house party\r\nBorder- golden motif butta pattern border\r\nSaree fabric- Georgette\r\nSaree length- 5.50m\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Dark Green', 'Available in free size', NULL, 0, 0),
(64, 'media/product_64.jpg', 'Georgette Stroke Saree', 'This elegant georgette saree with strokes pattern is a must have in your collection. This saree with printed work will leave you mesmerised by its comfort. This saree can be paired with many blouses and in many styles. It comes with golden motifs border that glam up the entire delicate pattern of this saree.\r\nThis classic, lightweight pure gorgette saree is festive in every way and maintains the classic traditions. A matching blouse piece completes the aesthetic of this saree.\r\n\r\n\r\nDelivery -  free shipping all over India\r\nType- Georgette strokes pattern saree\r\nOrnamentation- golden motif butta border\r\nPrint or pattern- strokes pattern\r\nOccasion- Indian house party\r\nBorder- golden motif butta pattern border\r\nSaree fabric- Georgette\r\nSaree length- 5.50m\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Pink', 'Available in free size', NULL, 0, 0),
(65, 'testreview', 'Flower Print Georgette saree', 'This georgette saree in black has beautiful flower printed patterns all across the saree. This saree has a sleek trendy foil border across the edge and gives a flowery festive look. This comfortable and classy printed saree is a must have. This saree does come with a blouse piece, and also you can pair it with any matching solid coloured blouse.\r\nPair it with some pearl or minimalist accessories for the modest and elegant look.\r\nDelivery- free shipping all over India\r\nType-  Georgette saree with floral print.\r\nPrint or pattern- floral print\r\nOccasion- regular wear, office wear, casual time.\r\nBorder- trendy foil print border.\r\nSaree fabric- georgette\r\nSaree length- 5.5m\r\nColour-  Black\r\nBlouse- unstitched \r\nBlouse fabric- Banglori                                         \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4799, 2381, 'Georgette Saree', 'F', 'Black', 'Available in free size', NULL, 0, 0),
(66, 'testreview', 'Flower Print Georgette Saree', 'Shine bright with our classy cyan coloured georgette saree, crafted with floral print motifs all across the saree. It is best for casual time or as an everyday wear for the office. It has dark blue coloured floral print all over the saree and dark blue printed border. \r\nIt comes with an unstitched matching blouse so you customize it in your way. Just add so matching accessories to complete the look and don’t forget to carry the matching bag with it. \r\n\r\nDelivery- free shipping all over India\r\nType-  Blue georgette saree with floral print.\r\nPrint or pattern- floral print \r\nOccasion- regular wear, office wear, casual time.\r\nBorder- printed border\r\nSaree fabric- georgette\r\nSaree length- 5.5m\r\nColour- Cyan and blue\r\nBlouse- unstitched \r\nBlouse fabric- Georgette                                      \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 4402, 2201, 'Georgette Saree', 'F', 'Blue', 'Available in free size', NULL, 0, 0),
(67, 'testreview', 'Chiffon Saree', 'Make a statement this green colour art chiffon saree enhanced by distinctive heavy navy blue brocade design border. Also comes along with a navy blue coloured brocade unstitched blouse. Create an impression in this beautiful saree, get compliments about your ethnic taste and amazing wardrobe collection from the relatives at family function. \r\nWear it with matching bangles, jewellery, rose in the hairs and there you go, all ready to grab everyone’s attention.\r\n\r\nDelivery- free shipping all over India\r\nType-  Green chiffon saree with navy blue brocade border\r\nPrint or pattern- Plain \r\nOccasion- Casual time, engagement wear, festive wear.\r\nBorder- navy brocade border\r\nSaree fabric- chiffon \r\nSaree length- 5.5m\r\nColour- green\r\nBlouse- unstitched \r\nBlouse fabric- brocade                                    \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\n', 5590, 2795, 'Chiffon saree', 'F', 'green', 'Available in free size', NULL, 0, 0),
(68, 'media/product_68.jpg', 'Chiffon Saree', 'Elevate your look adorning this turquoise coloured chiffon printed saree. That has been prettified with golden zari border. It comes along with turquoise coloured georgette blouse. The saree has printed details all over it which makes it perfect for little occasion like office party, kitty party or the function at your neighbour’s place. \r\nYou can wear it with a matching minimalist kundan jewellery to enhance your traditional beauty even more.\r\nDelivery- free shipping all over India\r\nType-  Turquoise chiffon saree \r\nPrint or pattern-  Printed motif\r\nOccasion- Engagement wear, festive wear.\r\nBorder- golden border\r\nSaree fabric- chiffon \r\nSaree length- 5.5m\r\nColour- Turquoise\r\nBlouse- unstitched \r\nBlouse fabric- georgette                                  \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5155, 2577, 'Chiffon Saree', 'F', 'Turquoise', 'Available in free size', NULL, 0, 0),
(69, 'testreview', 'Chiffon Saree', 'Get set to look regal adorning this mustard color wedding saree in chiffon. Elevated with intricate zari woven work curating distinctive border. This mustard coloured chiffon saree comes with a heavy navy blue and golden zari woven work border that just adds wonders to this pretty saree. Available with a navy blue satin unstitched blouse piece. \r\nSome big golden jhumka or the blue jhumka is all you need to pair with the saree and you are all set to show the pretty traditional lady that you are.\r\n\r\nPrice-               free shipping all over India\r\nType-  Mustard chiffon saree \r\nPrint or pattern-  Printed motif\r\nOccasion- Engagement wear, festive wear.\r\nBorder- navy blue and golden border\r\nSaree fabric- chiffon \r\nSaree length- 5.5m\r\nColour- mustard\r\nBlouse- unstitched \r\nBlouse fabric- satin                               \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5752, 2876, 'Chiffon Saree', 'F', 'Mustard', 'Available in free size', NULL, 0, 0),
(70, 'testreview', 'Chiffon Saree', 'Get set to look regal adorning this mustard color wedding saree in chiffon. Elevated with intricate zari woven work curating distinctive border. This mustard coloured chiffon saree comes with a heavy maroon and golden zari woven work border that just adds wonders to this pretty saree. Available with a maroon satin unstiched blouse piece. \r\nSome big golden jhumka or the maroon jhumka is all you need to pair with the saree and you are all set to show the pretty traditional lady that you are.\r\n\r\nDelivery- free shipping all over India\r\nType-  Mustard chiffon saree \r\nPrint or pattern-  Printed motif\r\nOccasion- Engagement wear, festive wear.\r\nBorder- maroon and golden border\r\nSaree fabric- chiffon \r\nSaree length- 5.5m\r\nColour- mustard\r\nBlouse- unstitched \r\nBlouse fabric- satin     \r\nBlouse colour - maroon                        \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5752, 2876, 'Chiffon saree', 'F', 'Mustard', 'Available in free size', NULL, 0, 0),
(71, 'testreview', 'Chiffon Saree', 'Enhance your wardrobe with our ruby red chiffon saree which completely encapsulates your ethnic fashion sense. Flaunt your festive look donning in this beautiful ruby red chiffon saree. It comes along with a golden lace border which is like cherry on top. Style it with red bindi, red bangles and some golden jhumkas which adds glam to your perfect traditional style.\r\nThe saree comes with an unstitched  ruby red satin blouse, also you can style the saree with many different blouses.\r\n\r\nDelivery- free shipping all over India\r\nType-  Ruby red chiffon saree\r\nPrint or pattern-  Printed geometric motif\r\nOccasion- Engagement wear, festive wear, ethnic wear, party wear, family get together.\r\nBorder- Golden lace border\r\nSaree fabric- chiffon \r\nSaree length- 5.5m\r\nColour- Ruby red\r\nBlouse- unstitched \r\nBlouse fabric- satin                               \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n\r\nNOTE- A matching blouse piece is included with the saree. For styling considerations, the model is sporting a second blouse. Since this item is handmade, there may be very little imperfections. But don\'t you believe that these emphasize the unique charm of a handcrafted beauty?\r\nAlso there might be slight variation in actual color vs. the image due to Photography lights.', 5353, 2676, 'Chiffon Saree', 'F', 'Ruby Red', 'Available in free size', NULL, 0, 0),
(72, 'testreview', 'Silk Kurta Payjama Set', 'Material and care\r\nTop- dupion silk\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- silver\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white, black\r\n', 2739, 1369, 'Silk Kurta Payjama Set', 'M', 'Silver', 'S to XXL', NULL, 0, 0),
(73, 'testreview', 'Silk Kurta Payjama Set', 'Material and care\r\nTop- dupion silk\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- navy blue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white, black', 2739, 1369, 'Silk Kurta Payjama Set', 'M', 'Navy Blue', 'S to XXL', NULL, 0, 0),
(74, 'testreview', 'Silk Kurta Payjama Set', 'Material and care\r\nTop- dupion silk\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- gold\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white, black', 2739, 1369, 'Silk Kurta Payjama Set', 'M', 'Gold', 'S to XXL', NULL, 0, 0),
(75, 'testreview', 'Silk Kurta Payjama Set', 'Material and care\r\nTop- dupion silk\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- black\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white, black', 2739, 1369, 'Silk Kurta Payjama Set', 'M', 'Black', 'S to XXL', NULL, 0, 0),
(76, 'testreview', 'Men\'s Embroidered Cotton Kurta', 'Material and care\r\nTop- Cotton blend\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- Mustard\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- embroidered, woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Mustard', 'S to XXL', NULL, 0, 0),
(77, 'testreview', 'Men\'s Embroidered Cotton Kurta', 'Material and care\r\nTop- Cotton blend\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- white\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- embroidered, woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'White', 'S to XXL', NULL, 0, 0),
(78, 'testreview', 'Men\'s Embroidered Cotton Kurta', 'Material and care\r\nTop- Cotton blend\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- Mustard\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- embroidered, woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Mustard', 'S to XXL', NULL, 0, 0),
(79, 'testreview', 'Men\'s Embroidered Cotton Kurta', 'Material and care\r\nTop- Cotton blend\r\nBottom- cotton\r\nWash care- hand wash, dry clean, machine wash.\r\nStyle and cut (top)- kurta\r\nColour- white\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- embroidered, woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'White', 'S to XXL', NULL, 0, 0),
(80, 'testreview', 'Mirror Work Kurta Payjama Set', 'Material and care\r\nTop- Cotton silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- Peach\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidered with mirror work\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Peach', 'S to XXL', NULL, 0, 0),
(81, 'testreview', 'Mirror Work Kurta Payjama Set', 'Material and care\r\nTop- Cotton silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- mustard\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidered with mirror work\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Mustard', 'S to XXL', NULL, 0, 0),
(82, 'testreview', 'Silk Blend Embroidery Kurta Pyjama Set', 'Material and care\r\nTop- silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- yellow\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidered\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white\r\nSizes\r\nS to XXL\r\n', 0, 0, 'c2', 'M', 'Yellow', 'S to XXL', NULL, 0, 0),
(83, 'testreview', 'Silk With Black Churidar Pyjama Set', 'Material and care\r\nTop- silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- Maroon\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidery\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- black\r\n', 0, 0, 'c2', 'M', 'Maroon', 'S to XXL', NULL, 0, 0),
(84, 'testreview', 'Silk With Black Churidar Pyjama Set', 'Material and care\r\nTop- silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- royal blue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidery\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- black\r\n', 0, 0, 'c2', 'M', 'Royal Blue', 'S to XXL', NULL, 0, 0),
(85, 'testreview', 'Silk With Black Churidar Pyjama Set', 'Material and care\r\nTop- silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- teal green\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidery\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- black\r\n', 0, 0, 'c2', 'M', 'Teal Green', 'S to XXL', NULL, 0, 0),
(86, 'testreview', 'Silk With Black Churidar Pyjama Set', 'Material and care\r\nTop- silk\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- purple\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- Embroidery\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- black\r\n', 0, 0, 'c2', 'M', 'Purple', 'S to XXL', NULL, 0, 0),
(87, 'testreview', 'Woven Jacquard kurta Pyjama Set', 'Material and care\r\nTop- jacquard\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- maroon\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design \r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- black', 0, 0, 'c2', 'M', 'Maroon', 'S to XXL', NULL, 0, 0),
(88, 'testreview', 'Woven Jacquard Kurta Pyjama Set', 'Material and care\r\nTop- jacquard\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- blue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design \r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- black', 0, 0, 'c2', 'M', 'Blue', 'S to XXL', NULL, 0, 0),
(89, 'testreview', 'Men’s Self Design Silk Blend Kurta Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- green\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design with embroidery collar\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- mustard', 0, 0, 'c2', 'M', 'Green', 'S to XXL', NULL, 0, 0),
(90, 'testreview', 'Men’s Self Design Silk Blend Kurta Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- pink\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design with embroidery collar\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- mustard', 0, 0, 'c2', 'M', 'Pink', 'S to XXL', NULL, 0, 0),
(91, 'testreview', 'Men’s Self Design Silk Blend Kurta Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- maroon\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design with embroidery collar\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- mustard', 0, 0, 'c2', 'M', 'Maroon', 'S to XXL', NULL, 0, 0),
(92, 'testreview', 'Men’s Self Design silk Blend Kurta Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- yellow\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design with embroidery collar\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- mustard', 0, 0, 'c2', 'M', 'Yellow', 'S to XXL', NULL, 0, 0),
(93, 'testreview', 'Men’s self Design Silk Blend kurta Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- mustard\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design with embroidery collar\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- mustard', 0, 0, 'c2', 'M', 'Mustard', 'S to XXL', NULL, 0, 0),
(94, 'testreview', 'Men’s Self Design Silk Blend Kurta Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- gold\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- self design with embroidery collar\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- mustard', 0, 0, 'c2', 'M', 'Gold', 'S to XXL\r\n', NULL, 0, 0),
(95, 'testreview', 'Woven Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- skyblue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Skyblue', 'S to XXL', NULL, 0, 0),
(96, 'testreview', 'Woven Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- green\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Green', 'S to XXL', NULL, 0, 0),
(97, 'testreview', 'Woven Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- yellow\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Yellow', 'S to XXL', NULL, 0, 0),
(98, 'testreview', 'Woven Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- blue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Blue', 'S to XXL', NULL, 0, 0),
(99, 'testreview', 'Men’s Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- yellow\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Yellow', 'S to XXL', NULL, 0, 0),
(100, 'testreview', 'Men’s Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- skyblue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Skyblue', 'S to XXL', NULL, 0, 0),
(101, 'testreview', 'Men’s Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- green\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Green', 'S to XXL', NULL, 0, 0),
(102, 'testreview', 'Men’s Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- lime\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Lime', 'S to XXL', NULL, 0, 0),
(103, 'testreview', 'Men’s Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- white\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'White', 'S to XXL', NULL, 0, 0),
(104, 'testreview', 'Men’s Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- baby pink\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- woven\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white', 0, 0, 'c2', 'M', 'Baby pink', 'S to XXL', NULL, 0, 0),
(105, 'testreview', 'Floral Printed Kurta With Pyjama', 'Material and care\r\nTop- Cotton\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- navy blue\r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- floral printed\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white\r\n', 0, 0, 'c2', 'M', 'Navy blue', 'S to XXL', NULL, 0, 0),
(106, 'testreview', 'Embroidered Kurta Pyjama Set', 'Material and care\r\nTop- silk blend\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- light green \r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- motif embroidery\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white\r\n', 0, 0, 'c2', 'M', 'Light green', 'S to XXL', NULL, 0, 0),
(107, 'testreview', 'Cotton Linen Kurta Set ', 'Material and care\r\nTop- cotton linen\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- dark green \r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- solid\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white\r\n', 0, 0, 'c2', 'M', 'Dark green', 'S to XXL', NULL, 0, 0),
(108, 'testreview', 'Cotton Linen Kurta Set ', 'Material and care\r\nTop- cotton linen\r\nBottom- cotton\r\nWash care- machine wash.\r\nStyle and cut (top)- kurta\r\nColour- purple \r\nNeck- Mandarin\r\nSleeves- long\r\nLength- knee length\r\nPrint or pattern- solid\r\nStyle and cut (bottom)\r\nStyle -Churidar pant\r\nColour- white\r\n', 0, 0, 'c2', 'M', 'Purple', 'S to XXL', NULL, 0, 0),
(109, 'testreview', 'Silk Blend Black & Gold Self Design Nehru Jacket.', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- black & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- self design\r\n', 3800, 1900, 'Nehru Jacket', 'M', 'Black & Gold', 'S to XXL', NULL, 0, 0),
(110, 'testreview', 'Silk Blend Beige & Gold Self Design Nehru Jacket.', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- beige & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- self design\r\n', 3800, 1900, 'Nehru Jacket', 'M', 'Beige & Gold', 'S to XXL', NULL, 0, 0),
(111, 'testreview', 'Silk Blend Peach & Gold Self Design Nehru Jacket.', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- peach & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- self design\r\n', 3800, 1900, 'Nehru Jacket', 'M', 'Peach & Gold', 'S to XXL', NULL, 0, 0),
(112, 'testreview', 'Silk Blend Orange & Gold Self Design Nehru Jacket.', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- orange & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- self design\r\n', 3800, 1900, 'Kurta Jacket', 'M', 'orange & Gold', 'S to XXL', NULL, 0, 0),
(113, 'testreview', 'Silk Blend Maroon & Gold Self Design Nehru Jacket.', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- maroon & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- self design\r\n', 3800, 1900, 'Nehru Jacket', 'M', 'Maroon & Gold', 'S to XXL', NULL, 0, 0),
(114, 'testreview', 'Silk blend Yellow & Gold Self Design Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- yellow & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- self design\r\n', 3800, 1900, 'Nehru Jacket', 'M', 'Yellow & Gold ', 'S to XXL', NULL, 0, 0),
(115, 'testreview', 'Jacquard Silk Sea Green Designer Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- sea green & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- geometric square self print\r\n', 0, 0, 'c2', 'M', 'Sea Green & Gold', 'S to XXL', NULL, 0, 0),
(116, 'testreview', 'Jacquard Silk Green Designer Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- silk green & gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- geometric square self print\r\n', 0, 0, 'c2', 'M', 'Silk Green', 'S to XXL', NULL, 0, 0),
(117, 'testreview', 'Maroon Embroidered Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- maroon\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- Embroidered\r\n', 0, 0, 'c2', 'M', 'Maroon', 'S to XXL', NULL, 0, 0),
(118, 'testreview', 'Gold Embroidered Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- Embroidered\r\n', 0, 0, 'c2', 'M', 'Gold', 'S to XXL', NULL, 0, 0),
(119, 'testreview', 'Pastel Green Embroidered Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- pastel green\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- Embroidered\r\n', 0, 0, 'c2', 'M', 'Pastel Green', 'S to XXL', NULL, 0, 0),
(120, 'testreview', 'Men’s woven jacquard Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- green\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- Embroidered\r\n', 0, 0, 'c2', 'M', 'Green', 'S to XXL', NULL, 0, 0),
(121, 'media/product_121.jpg', 'Grey Printed Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- grey\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- printed\r\n', 2800, 1400, 'Nehru Jacket', 'M', 'Grey', 'S to XXL', NULL, 0, 0),
(122, 'media/product_122.jpg', 'Gold Printed Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- gold\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- printed\r\n', 2800, 1400, 'Nehru Jacket', 'M', 'Gold', 'S to XXL', NULL, 0, 0),
(123, 'media/product_123.jpg', 'White Printed Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- white\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- printed\r\n', 2800, 1400, 'Nehru Jacket', 'M', 'White', 'S to XXL', NULL, 0, 0),
(124, 'media/product_124.jpg', 'Lime Green Printed Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- lime green\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- printed\r\n', 2800, 1400, 'Nehru Jacket', 'M', 'Lime Green', 'S to XXL', NULL, 0, 0),
(125, 'media/product_125.jpg', 'Black Printed Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- black\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- printed\r\n', 2800, 1400, 'Nehru Jacket', 'M', 'Black', 'S to XXL', NULL, 0, 0),
(126, 'media/product_126.jpg', 'Beige Printed Nehru Jacket', 'Material and care\r\nSilk blend\r\nWash care- machine wash.\r\nStyle \r\nColour- beige\r\nType- Indo-western\r\nNeck- Mandarin\r\nSleeves- Sleeveless\r\nLength- Waist length\r\nPrint or pattern- printed\r\n', 2800, 1400, 'Nehru Jacket', 'M', 'Beige', 'S to XXL', NULL, 0, 0);
INSERT INTO `Product` (`id`, `image`, `name`, `des`, `mrp`, `price`, `category`, `genderSp`, `color`, `avlSize`, `no_items`, `rating`, `ratingCount`) VALUES
(127, 'testreview', 'Minimal Off white Brasso Saree', 'Price- free shipping all over India\r\nType- Brasso saree\r\nOrnamentation- prints\r\nPrint or pattern- \r\nOccasion- Traditional/ intimate/party/ engagement\r\nBorder- golden lace \r\nSaree fabric- Brasso\r\nColour-off white\r\nBlouse- unstitched\r\nBlouse fabric- brocade\r\nWash care- dry clean only.\r\n', 0, 0, 'c2', 'F', 'Off White', '', NULL, 0, 0),
(128, 'testreview', 'Grey Foil Print and Floral Embroidery Brasso Saree', 'Price- free shipping all over India\r\nType- Brasso foil print and embroidery \r\n           border saree\r\nOrnamentation- foil prints and floral \r\n                  embroidery saree\r\nPrint or pattern-  foil print \r\nOccasion- Traditional/ intimate party/ \r\n              engagement\r\nBorder- floral embroidery \r\nSaree fabric- Brasso\r\nColour- grey\r\nBlouse- unstitched\r\nBlouse fabric- georgette\r\nWash care- dry clean only\r\n', 0, 0, 'c2', 'F', 'Grey', '', NULL, 0, 0),
(129, 'testreview', 'Mustard Brasso Saree With Green Printed Tussar Silk Blouse', 'Price- free shipping all over India\r\nType-  Mustard braso saree\r\nPrint or pattern-  Floral \r\nOccasion- Engagement wear, festive wear, \r\n         ethnic wear, party wear, family \r\n         get together.\r\nBorder-  Embroidery lace\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour- mustard\r\nBlouse- unstitched \r\nBlouse fabric- tushar silk                             \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, \r\n          Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Mustard', '', NULL, 0, 0),
(130, 'testreview', 'Red Georgette Saree With Brocade Blouse', 'Price- free shipping all over India\r\nType-  Mustard braso saree\r\nPrint or pattern-  Floral \r\nOccasion- Engagement wear, festive wear, \r\n          ethnic wear, party wear, \r\n          family get together.\r\nBorder-  Embroidery lace\r\nSaree fabric- georgette\r\nSaree length- 5.5m\r\nColour- red\r\nBlouse- unstitched \r\nBlouse fabric- brocade                             \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, \r\n          Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Red', '', NULL, 0, 0),
(131, 'testreview', 'Mehndi Green Brasso Saree \r\n', 'Price- free shipping all over India\r\nType- Brasso sare\r\nOrnamentation- floral motif\r\nPrint or pattern- Brasso saree with floral \r\n                    motifs\r\nOccasion- Traditional/ intimate party\r\nBorder- golden lace \r\nSaree fabric- Brasso\r\nColour-Mehndi green\r\nBlouse- unstitched\r\nBlouse fabric- Georgette\r\nWash care- dry clean only.\r\n', 0, 0, 'c2', 'F', 'Mehendi Green', '', NULL, 0, 0),
(132, 'testreview', 'Mustard Brasso saree all time hit', 'Price- free shipping all over India\r\nType- Brasso saree\r\nOrnamentation- floral motif\r\nPrint or pattern- Brasso saree with floral \r\n                 motifs\r\nOccasion- Traditional/ intimate party\r\nBorder- golden lace\r\nSaree fabric- Brasso\r\nColour- mustard\r\nBlouse- unstitched\r\nBlouse fabric- Brocade\r\nWash care- dry clean only.\r\n', 0, 0, 'c2', 'F', 'Mustard', '', NULL, 0, 0),
(133, 'testreview', 'Peach Brasso saree all time hit', 'Price- free shipping all over India\r\nType- Brasso saree\r\nOrnamentation- floral motif\r\nPrint or pattern- Brasso saree with floral \r\n                 motifs\r\nOccasion- Traditional/ intimate party\r\nBorder- golden lace\r\nSaree fabric- Brasso\r\nColour- peach\r\nBlouse- unstitched\r\nBlouse fabric- Brocade\r\nWash care- dry clean only.\r\n', 0, 0, 'c2', 'F', 'Peach', '', NULL, 0, 0),
(134, 'testreview', 'Navy Blue Georgette Saree With Printed Blouse', 'Price- free shipping all over India\r\nType-  navy blue georgette saree\r\nPrint or pattern-  solid \r\nOccasion- Engagement wear, festive wear, \r\n          ethnic wear, party wear, \r\n          family get together.\r\nBorder-  floral ab=nd golden lace border.\r\nSaree fabric- georgette\r\nSaree length- 5.5m\r\nColour- navy blue\r\nBlouse- unstitched \r\nBlouse fabric- georgette                             \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Navy Blue', '', NULL, 0, 0),
(135, 'testreview', 'Red Georgette Saree With Brocade Blouse', 'Price- free shipping all over India\r\nType-  Mustard brasso saree\r\nPrint or pattern-  Floral\r\nOccasion- Engagement wear, festive wear, \r\n          ethnic wear, party wear, \r\n          family get together.\r\nBorder-  Embroidery lace\r\nSaree fabric- georgette\r\nSaree length- 5.5m\r\nColour- red\r\nBlouse- unstitched \r\nBlouse fabric- brocade                           \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Red', '', NULL, 0, 0),
(136, 'testreview', 'Red Georgette Saree With Printed Blouse', 'Price- free shipping all over India\r\nType-  red georgette saree\r\nPrint or pattern-  solid\r\nOccasion- Engagement wear, festive wear, \r\n          ethnic wear, party wear, \r\n          family get together.\r\nBorder-  floral and golden lace border\r\nSaree fabric- georgette\r\nSaree length- 5.5m\r\nColour- red\r\nBlouse- unstitched \r\nBlouse fabric- georgette                         \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, \r\n     Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Red', '', NULL, 0, 0),
(137, 'testreview', 'Blue and Rama Brocade Saree', 'Price- free shipping all over India\r\nType-  Blue rama brocade saree\r\nPrint or pattern-  geometric pattern\r\nOccasion- Engagement wear, festive wear, \r\n         ethnic wear, party wear, family \r\n         get together.\r\nBorder-golden and pink border.\r\nSaree fabric- brocade\r\nSaree length- 5.5m\r\nColour- blue and rama\r\nBlouse- unstitched \r\nBlouse fabric- brocade                            \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, \r\n          Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Blue and Rama', '', NULL, 0, 0),
(138, 'testreview', 'Multicolour Brasso Saree With Black Blouse', 'Price- free shipping all over India\r\nType-  multicolored brasso saree\r\nPrint or pattern-  checks  pattern\r\nOccasion- Engagement wear, festive wear, \r\n         ethnic wear, party wear, family \r\n         get together.\r\nBorder-golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour- brown and chiko\r\nBlouse- unstitched \r\nBlouse fabric- brocade                            \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, \r\n          Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Brown and Chiko', '', NULL, 0, 0),
(139, 'testreview', 'Brown and Chikko Brasso Saree', 'Price- free shipping all over India\r\nType-  brown- chikko brasso saree\r\nPrint or pattern- checks bandhani \r\n                       pattern\r\nOccasion- Engagement wear, festive wear, \r\n          ethnic wear, party wear, \r\n           family get together.\r\nBorder-golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour- brown and chiko\r\nBlouse- unstitched \r\nBlouse fabric- brocade                            \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Brown and Chiko', '', NULL, 0, 0),
(140, 'testreview', 'Multicolour Braso Saree With Red Dupion Blouse', 'Price- free shipping all over India\r\nType-  multicolored brasso saree\r\nPrint or pattern-  checks  pattern\r\nOccasion- Engagement wear, festive wear, \r\n       ethnic wear, party wear, family \r\n       get together.\r\nBorder-golden lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour- multicolored\r\nBlouse- unstitched \r\nBlouse fabric- brocade                            \r\nBlouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, \r\n          Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Multicolored', '', NULL, 0, 0),
(141, 'testreview', 'Red Brasso Saree With Beige Dupion Work Blouse', 'Price- free shipping all over India\r\nType-  red brasso saree with beige \r\n        duoion silk blouse\r\nPrint or pattern-  plain red saree\r\nOccasion- Engagement wear, festive wear, \r\n          ethnic wear, party wear, \r\n          family get together.\r\nBorder-red lace border\r\nSaree fabric- braso\r\nSaree length- 5.5m\r\nColour- red\r\nBlouse- unstitched \r\nBlouse fabric- beige dupion silk work                            Blouse piece- 0.80m\r\nWash care- Normal Wash, Do Not Bleach, Normal Tumble Dry, Normal Iron\r\n', 0, 0, 'c2', 'F', 'Red', '', NULL, 0, 0),
(142, 'testreview', 'trefre', '', 0, 0, 'c2', 'M', 'String', '', NULL, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ProductImages`
--

CREATE TABLE `ProductImages` (
  `imageId` int NOT NULL,
  `productId` int NOT NULL,
  `is_banner` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ProductImages`
--

INSERT INTO `ProductImages` (`imageId`, `productId`, `is_banner`) VALUES
(1, 1, 0),
(2, 1, 1),
(3, 1, 1),
(3, 2, 0),
(4, 1, 0),
(5, 1, 0),
(5, 2, 0),
(6, 1, 0),
(6, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ProductReview`
--

CREATE TABLE `ProductReview` (
  `rating` int DEFAULT NULL,
  `comment` text,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `productId` int NOT NULL,
  `customerId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ProductReview`
--

INSERT INTO `ProductReview` (`rating`, `comment`, `createdAt`, `productId`, `customerId`) VALUES
(3, 'Really liked it. ?', '2022-12-10 13:39:37', 1, 0),
(4, 'Really liked it. ?', '2022-12-10 13:39:37', 2, 0),
(4, 'Really liked it. ?', '2022-12-10 13:39:37', 4, 0),
(5, 'Really liked it. ?', '2022-12-10 13:39:37', 6, 0),
(5, 'Really liked it. ?', '2022-12-11 09:56:10', 10, 0),
(1, 'Bad Product. ?', '2022-12-11 09:56:10', 10, 0),
(2, 'Decent', '2022-12-11 09:56:10', 10, 0),
(2, 'Decent Product', '2022-12-11 09:56:10', 10, 0),
(3, 'Decent Product', '2022-12-11 09:56:10', 10, 0),
(3, 'Decent Product', '2022-12-11 09:56:10', 10, 0),
(5, '', '2023-01-02 02:44:27', 22, 28),
(5, '', '2023-01-02 02:45:33', 33, 28);

-- --------------------------------------------------------

--
-- Table structure for table `ProductTags`
--

CREATE TABLE `ProductTags` (
  `productId` int NOT NULL,
  `tag` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ProductTags`
--

INSERT INTO `ProductTags` (`productId`, `tag`) VALUES
(1, ''),
(1, ''),
(1, ''),
(1, ''),
(1, ''),
(1, ''),
(2, ''),
(2, ''),
(2, ''),
(2, ''),
(3, ''),
(4, ''),
(22, 't2'),
(23, 't2'),
(23, 't2');

-- --------------------------------------------------------

--
-- Table structure for table `SizeClothes`
--

CREATE TABLE `SizeClothes` (
  `id` int NOT NULL,
  `size` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SizeClothes`
--

INSERT INTO `SizeClothes` (`id`, `size`) VALUES
(5, 'l'),
(4, 'r'),
(3, 's'),
(6, 'xl'),
(2, 'xs'),
(7, 'xxl'),
(1, 'xxs'),
(8, 'xxxl');

-- --------------------------------------------------------

--
-- Table structure for table `Tags`
--

CREATE TABLE `Tags` (
  `id` int NOT NULL,
  `content` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Tags`
--

INSERT INTO `Tags` (`id`, `content`) VALUES
(6, 'boys'),
(9, 'cheap'),
(1, 'cloth'),
(10, 'expensive'),
(5, 'girls'),
(12, 'kids'),
(4, 'lehenga'),
(7, 'men'),
(11, 'party'),
(3, 'shirt'),
(2, 't-shirt'),
(8, 'women');

-- --------------------------------------------------------

--
-- Table structure for table `testUser`
--

CREATE TABLE `testUser` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testUser`
--

INSERT INTO `testUser` (`id`, `email`, `pass`, `salt`) VALUES
(1, 'first@email.com', 'f541793e74eceacb358cc98a42ea5b26fd3ee31f48fa29532bc0a88b067d9b0e', NULL),
(2, 'second@email.com', 'ec6ff4b524abaf2a99773f00463e3c49eb15b4ab983e250a4676db99c755e25b', NULL),
(3, 'third@email.com', '62adcd7361d47169828c5c4b6d8add3704c94ffa9e5a8610a6f7f12a3342f4ba', 'ee9812b882454803c3a275ec440bfe5d4919112f9d2496ee0be88abedd616786');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Wishlist`
--

CREATE TABLE `Wishlist` (
  `productId` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `color` text,
  `size` text,
  `customerId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Wishlist`
--

INSERT INTO `Wishlist` (`productId`, `quantity`, `color`, `size`, `customerId`) VALUES
(1, 4, 'red', '100', 1),
(1, 1, NULL, '100', 3),
(2, 4, 'red', '100', 1),
(3, 4, 'red', '100', 1),
(4, 4, NULL, '100', 1),
(4, 4, NULL, '100', 2),
(5, 1, NULL, '100', 4),
(6, 100, 'black', '100', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Address`
--
ALTER TABLE `Address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `AvlSize`
--
ALTER TABLE `AvlSize`
  ADD PRIMARY KEY (`sizeId`,`productId`),
  ADD KEY `avl_size_productId_idx` (`productId`);

--
-- Indexes for table `BlogComment`
--
ALTER TABLE `BlogComment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `BlogPost`
--
ALTER TABLE `BlogPost`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`cId`),
  ADD UNIQUE KEY `name_UNIQUE` (`name`);

--
-- Indexes for table `GetUserRequest`
--
ALTER TABLE `GetUserRequest`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `path_UNIQUE` (`path`),
  ADD KEY `images_category_idx` (`category`);

--
-- Indexes for table `Order`
--
ALTER TABLE `Order`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `OrderItem`
--
ALTER TABLE `OrderItem`
  ADD PRIMARY KEY (`orderItemId`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `mobile_UNIQUE` (`mobile`);

--
-- Indexes for table `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_no_items_idx` (`no_items`);

--
-- Indexes for table `ProductImages`
--
ALTER TABLE `ProductImages`
  ADD PRIMARY KEY (`imageId`,`productId`),
  ADD KEY `product_images_productId_idx` (`productId`);

--
-- Indexes for table `SizeClothes`
--
ALTER TABLE `SizeClothes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `size_UNIQUE` (`size`);

--
-- Indexes for table `Tags`
--
ALTER TABLE `Tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `content_UNIQUE` (`content`);

--
-- Indexes for table `testUser`
--
ALTER TABLE `testUser`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `Wishlist`
--
ALTER TABLE `Wishlist`
  ADD PRIMARY KEY (`productId`,`customerId`),
  ADD KEY `wishlist_customerId_idx` (`customerId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Address`
--
ALTER TABLE `Address`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `BlogComment`
--
ALTER TABLE `BlogComment`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `BlogPost`
--
ALTER TABLE `BlogPost`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Category`
--
ALTER TABLE `Category`
  MODIFY `cId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Order`
--
ALTER TABLE `Order`
  MODIFY `orderId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `OrderItem`
--
ALTER TABLE `OrderItem`
  MODIFY `orderItemId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `userId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `Product`
--
ALTER TABLE `Product`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `SizeClothes`
--
ALTER TABLE `SizeClothes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `Tags`
--
ALTER TABLE `Tags`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `testUser`
--
ALTER TABLE `testUser`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `AvlSize`
--
ALTER TABLE `AvlSize`
  ADD CONSTRAINT `avl_size_productId` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avl_size_sizeId` FOREIGN KEY (`sizeId`) REFERENCES `SizeClothes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `GetUserRequest`
--
ALTER TABLE `GetUserRequest`
  ADD CONSTRAINT `get_user_req_userId` FOREIGN KEY (`userId`) REFERENCES `person` (`userId`);

--
-- Constraints for table `Images`
--
ALTER TABLE `Images`
  ADD CONSTRAINT `images_category` FOREIGN KEY (`category`) REFERENCES `Category` (`cId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ProductImages`
--
ALTER TABLE `ProductImages`
  ADD CONSTRAINT `product_images_imageId` FOREIGN KEY (`imageId`) REFERENCES `Images` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_images_productId` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Wishlist`
--
ALTER TABLE `Wishlist`
  ADD CONSTRAINT `wishlist_customerId` FOREIGN KEY (`customerId`) REFERENCES `person` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_productId` FOREIGN KEY (`productId`) REFERENCES `Product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
