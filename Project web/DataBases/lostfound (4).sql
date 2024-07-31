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
-- Table structure for table `lostfound`
--

CREATE TABLE `lostfound` (
  `ID` int(50) NOT NULL,
  `FirstName` varchar(500) NOT NULL,
  `LastName` varchar(500) NOT NULL,
  `Email` varchar(500) NOT NULL,
  `Age` varchar(500) NOT NULL,
  `Phone` varchar(500) NOT NULL,
  `Gender` varchar(500) NOT NULL,
  `Address` varchar(500) NOT NULL,
  `Image` varchar(500) NOT NULL,
  `City` varchar(500) NOT NULL,
  `ZipCode` varchar(500) NOT NULL,
  `Password` varchar(500) NOT NULL,
  `Latitude` varchar(500) NOT NULL,
  `Longitude` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lostfound`
--

INSERT INTO `lostfound` (`ID`, `FirstName`, `LastName`, `Email`, `Age`, `Phone`, `Gender`, `Address`, `Image`, `City`, `ZipCode`, `Password`, `Latitude`, `Longitude`) VALUES
(45, 'Abubakar', 'Mehboob', 'mehboobabubaker7@gmail.com', '20', '03074659133', 'female', 'Fast Nuces', '1684176149221-abubakar.jpg', 'Jhang', '', '$2b$10$abcde12345fghij67890ke9IxP1pD9JlJHy9Th74r4LQKQ8AbIqVy1122', '31.5203696', '74.35874729999999'),
(47, 'Muntazar', 'shah', 'mehboobabubaker10@gmail.com', '19', '03074659133', 'male', 'Fast Nuces', '1684697377697-WIN_20230419_13_12_05_Pro.jpg', 'Sheikhupura', '1200', '$2b$10$abcde12345fghij67890keyGy0MbJurHPX6rgFQ5pJyfu/ow6NX7m1234', '31.52980299999999', '74.2591272');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lostfound`
--
ALTER TABLE `lostfound`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lostfound`
--
ALTER TABLE `lostfound`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
