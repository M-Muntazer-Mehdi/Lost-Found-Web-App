-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2023 at 09:48 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abubakar`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `ID` int(50) NOT NULL,
  `PostID` int(50) NOT NULL,
  `name` varchar(500) NOT NULL,
  `comment` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`ID`, `PostID`, `name`, `comment`) VALUES
(1, 2, 'Abubakar', 'Its Mine Please Contact me on 03074659133'),
(2, 3, 'Abubakar', 'hsgds7yg'),
(3, 2, 'Abubakar', 'asbjxh'),
(4, 2, 'Abubakar', 'asvuya'),
(5, 2, 'Abubakar', 'jhvuiuhjnmg'),
(6, 5, 'Abubakar', 'vufyhm'),
(7, 2, 'Abubakar', 'sbcdcsc'),
(8, 2, 'Abubakar', 'zhvcuyd'),
(9, 2, 'Abubakar', 'Abubakar Mehboob'),
(10, 2, 'Muntazar', 'hi i am muntazar'),
(11, 2, 'Abubakar', 'what are you doing Muntazar?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
