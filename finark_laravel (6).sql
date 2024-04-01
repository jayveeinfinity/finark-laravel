-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2024 at 01:10 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finark_laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `service_plan_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `appointment_date` date NOT NULL,
  `appointment_time` time NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Pending',
  `client_message` text DEFAULT NULL,
  `notes` text DEFAULT NULL,
  `employee_notes` text DEFAULT NULL,
  `assigned_by` bigint(20) UNSIGNED DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `careers_applications`
--

CREATE TABLE `careers_applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `visibility` tinyint(1) NOT NULL DEFAULT 1,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rate` varchar(255) NOT NULL,
  `message` longtext NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_15_013647_create_partner_groups_table', 1),
(6, '2023_02_15_013740_create_partners_table', 1),
(7, '2023_02_15_080417_create_partner_group_references_table', 1),
(8, '2023_05_24_140756_create_feedback_table', 1),
(9, '2023_05_28_230955_create_careers_applications_table', 1),
(10, '2023_07_09_062601_create_clients_table', 1),
(11, '2023_07_09_062602_create_service_plans_table', 1),
(12, '2023_07_09_062603_create_appointments_table', 1),
(13, '2023_08_23_025421_create_permission_tables', 1),
(14, '2023_08_29_044902_create_courses_table', 1),
(15, '2023_08_29_045721_create_videos_table', 1),
(16, '2023_09_06_083758_create_watch_videos_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `web_url` longtext DEFAULT NULL,
  `web_logo` longtext DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `web_url`, `web_logo`, `active`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'AIA Singapore Pte Ltd', 'https://www.aia.com.sg/en/index.html', '1676443000.png', 1, 1, '2023-02-14 14:36:40', '2023-02-14 23:16:11'),
(2, 'AXA Insurance Pte Ltd', 'https://www.insurance.hsbclife.com.sg/', '1676445148.png', 1, 1, '2023-02-14 15:12:28', '2023-02-14 23:16:12'),
(3, 'Great Eastern Life Assurance Company Limited', 'https://www.greateasternlife.com/sg/en/personal-insurance.html', '1676445267.jpg', 1, 1, '2023-02-14 15:14:27', '2023-02-14 15:14:27'),
(4, 'Liberty Insurance Pte Ltd', 'https://www.libertyinsurance.com.sg/', '1676445303.png', 1, 1, '2023-02-14 15:15:03', '2023-02-14 15:15:03'),
(5, 'NTUC Income Insurance Co-Operative Limited', 'https://www.income.com.sg/', '1676445432.png', 1, 1, '2023-02-14 15:17:12', '2023-02-14 15:17:12'),
(6, 'QBE Insurance (Singapore) Ltd', 'https://www.qbe.com/sg', '1676445750.png', 1, 1, '2023-02-14 15:22:30', '2023-02-14 15:22:30'),
(7, 'Raffles Health Insurance Pte Ltd', 'https://www.raffleshealthinsurance.com/', '1676445764.jpg', 1, 1, '2023-02-14 15:22:44', '2023-02-14 15:22:44'),
(8, 'Singapore Life Pte Ltd', 'https://singlife.com/en', '1676445780.png', 1, 1, '2023-02-14 15:23:00', '2023-02-14 15:23:00'),
(9, 'Tokio Marine Life Insurance Singapore Ltd', 'https://www.tokiomarine.com/sg/en/life.html', '1676445790.png', 1, 1, '2023-02-14 15:23:10', '2023-02-14 15:23:10'),
(10, 'DBS Bank Ltd, Enterprise Banking', 'https://www.dbs.com.sg/index/default.page', '1676446317.png', 1, 1, '2023-02-14 15:31:57', '2023-02-14 15:31:57'),
(14, 'Aetna Insurance (Singapore) Pte Ltd', NULL, '1676453077.jpg', 1, 1, '2023-02-14 17:24:37', '2023-02-14 17:24:37'),
(15, 'AIG Asia Pacific Insurance Pte Ltd', 'https://www.aig.sg/personal', '1676453120.jpg', 1, 1, '2023-02-14 17:25:20', '2023-02-14 17:25:20'),
(16, 'AVIVA Ltd', NULL, '1676453170.jpg', 1, 1, '2023-02-14 17:26:10', '2023-02-14 17:26:10'),
(17, 'CIGNA Europe Insurance Company (Singapore Branch)', 'https://www.cigna.com.sg/', '1676453222.jpg', 1, 1, '2023-02-14 17:27:02', '2023-02-14 17:27:02'),
(18, 'MSIG Insurance (Singapore) Pte Ltd', 'https://www.msig.com.sg/', '1676453353.png', 1, 1, '2023-02-14 17:29:13', '2023-02-14 17:29:13'),
(19, 'Tenet Sompo Insurance Pte Ltd (NOW Health as MGA)', NULL, '1676453370.png', 1, 1, '2023-02-14 17:29:30', '2023-02-14 17:29:30'),
(20, 'ANZ Banking Group Limited', 'https://www.anz.com/institutional/global/singapore/en/', '1676536514.jpg', 1, 1, '2023-02-15 16:35:15', '2023-02-15 16:35:15'),
(21, 'CIMB Bank Berhad', 'https://www.cimb.com.sg/en/personal/home.html', '1676536575.png', 1, 1, '2023-02-15 16:36:15', '2023-02-15 16:36:15'),
(22, 'Citibank Singapore Ltd', 'https://www.citibank.com.sg/portal/bluehome/index.htm', '1676536611.png', 1, 1, '2023-02-15 16:36:51', '2023-02-15 16:36:51'),
(23, 'HSBC Bank (Singapore) Limited', 'https://www.insurance.hsbc.com.sg/', '1676536634.png', 1, 1, '2023-02-15 16:37:14', '2023-02-15 16:37:14'),
(24, 'Malayan Banking Berhad', 'https://www.maybank2u.com.sg/en/personal/index.page', '1676536642.png', 1, 1, '2023-02-15 16:37:22', '2023-02-15 16:37:22'),
(25, 'OCBC Bank', 'https://www.ocbc.com/group/gateway.page', '1676536665.jpg', 1, 1, '2023-02-15 16:37:45', '2023-02-15 16:37:45'),
(26, 'Standard Chartered Bank (Singapore) Limited', 'https://www.sc.com/sg/', '1676536681.jpg', 1, 1, '2023-02-15 16:38:01', '2023-02-15 16:38:01'),
(27, 'United Overseas Bank Limited', NULL, '1676536692.png', 1, 1, '2023-02-15 16:38:12', '2023-02-16 01:44:11'),
(28, 'iCompareLoans', 'https://icompareloan.com/', '1676536700.png', 1, 1, '2023-02-15 16:38:20', '2023-02-15 16:38:20'),
(29, 'BNP Privalto', NULL, '1676536964.jpg', 1, 1, '2023-02-15 16:42:44', '2023-02-15 16:42:44'),
(30, 'Canaccord Genuity Wealth Management', NULL, '1676536970.jpg', 1, 1, '2023-02-15 16:42:50', '2023-02-15 16:42:50'),
(31, 'Commerzbank Corporates', 'https://www.commerzbank.sg/portal/en/cb/sg/firmenkunden/our_presence_your_benefits_sg.html', '1676537003.png', 1, 1, '2023-02-15 16:43:23', '2023-02-15 16:43:23'),
(32, 'EFG Bank', 'https://www.ascendas-singbridge.com/en/our-properties/singapore/office-and-commercial/79-robinson-road/', '1676537014.png', 1, 1, '2023-02-15 16:43:34', '2023-02-15 16:43:34'),
(33, 'Exane Derivatives', NULL, '1676537026.png', 1, 1, '2023-02-15 16:43:46', '2023-02-15 16:43:46'),
(34, 'IDAD Limited', NULL, '1676537054.jpg', 1, 1, '2023-02-15 16:44:14', '2023-02-15 16:44:14'),
(35, 'Société Générale', NULL, '1676537063.png', 1, 1, '2023-02-15 16:44:23', '2023-02-15 16:44:23'),
(36, 'TMF Group (Formerly Equity Trust)', 'https://www.tmf-group.com/', '1676537073.png', 1, 1, '2023-02-15 16:44:33', '2023-02-15 16:44:33'),
(37, 'Belmont Investments', 'https://www.companies.sg/business/200000212C/BELMONT-INVESTMENT-PTE-LTD', '1676538152.png', 1, 1, '2023-02-15 17:02:32', '2023-02-15 17:02:32'),
(38, 'Coral Portfolio Ltd', NULL, NULL, 1, 1, '2023-02-15 17:02:36', '2023-02-15 17:02:36'),
(39, 'Parry Fund Services', NULL, NULL, 1, 1, '2023-02-15 17:02:40', '2023-02-15 17:02:40'),
(40, 'Firstmac Limited (Singapore Branch)', 'https://www.companies.sg/business/T12FC0152K/FIRSTMAC-LIMITED-SINGAPORE-BRANCH-', '1676538176.png', 1, 1, '2023-02-15 17:02:56', '2023-02-15 17:02:56'),
(41, 'Friends Provident International', 'https://www.fpinternational.sg/', '1676538184.jpg', 1, 1, '2023-02-15 17:03:04', '2023-02-15 17:03:04'),
(42, 'Generali International', NULL, '1676538206.jpg', 1, 1, '2023-02-15 17:03:26', '2023-02-16 01:05:16'),
(43, 'Old Mutual International', NULL, '1676538219.png', 1, 1, '2023-02-15 17:03:39', '2023-02-15 17:03:39'),
(44, 'SHK Fund Management', NULL, '1676538381.jpg', 1, 1, '2023-02-15 17:06:21', '2023-02-15 17:06:21'),
(45, 'Sundaram Asset Management Pte Ltd', 'https://www.sundarammutual.sg/Home\n', '1676538388.png', 1, 1, '2023-02-15 17:06:28', '2023-02-16 01:06:43'),
(46, 'UOB Kay Hian Pte Ltd', NULL, '1676538435.png', 1, 1, '2023-02-15 17:07:15', '2023-02-15 17:07:15'),
(47, 'Superfund Financial (Singapore) Pte Ltd', NULL, NULL, 1, 1, '2023-02-15 17:07:19', '2023-02-15 17:07:19'),
(48, 'The Premier Group (Isle of Man) Limited', NULL, NULL, 1, 1, '2023-02-15 17:07:25', '2023-02-15 17:07:25'),
(49, 'The Synergy Partnership', NULL, '1676538489.png', 1, 1, '2023-02-15 17:08:09', '2023-02-15 17:08:09'),
(50, 'China Life Insurance (Singapore) Pte Ltd', 'https://www.chinalife.com.sg/en', '1676538945.jpg', 1, 1, '2023-02-15 17:15:45', '2023-02-15 17:15:45'),
(51, 'China Taiping Insurance (Singapore) Pte Ltd', 'https://www.sg.cntaiping.com/en/', '1676538954.jpg', 1, 1, '2023-02-15 17:15:54', '2023-02-15 17:15:54'),
(52, 'Etiqa Insurance Pte Ltd', 'https://www.etiqa.com.sg/', '1676538964.png', 1, 1, '2023-02-15 17:16:04', '2023-02-15 17:16:04'),
(53, 'HSBC Insurance (Singapore) Pte Limited', 'https://www.insurance.hsbc.com.sg/', '1676538976.png', 1, 1, '2023-02-15 17:16:16', '2023-02-15 17:16:16'),
(54, 'Life Insurance Corporation (Singapore) Pte Ltd', 'https://www.licsingapore.com/', '1676538998.png', 1, 1, '2023-02-15 17:16:38', '2023-02-15 17:16:38'),
(55, 'Manulife (Singapore) Private Limited', 'https://www.manulife.com.sg/', '1676539011.jpg', 1, 1, '2023-02-15 17:16:51', '2023-02-15 17:16:51'),
(56, 'Quilter International', 'https://www.quilterinternational.com/', '1676539111.jpg', 1, 1, '2023-02-15 17:18:31', '2023-02-15 17:18:31'),
(57, 'Singlife', 'https://singlife.com/en', '1676539211.png', 1, 1, '2023-02-15 17:20:11', '2023-02-15 17:20:11'),
(58, 'Transamerica Life Bermuda Ltd', 'https://www.transamericalifebermuda.com/en/home/', '1676539260.jpg', 1, 1, '2023-02-15 17:21:00', '2023-02-15 17:21:00'),
(59, 'FWD Insurance', NULL, '1676539266.png', 1, 1, '2023-02-15 17:21:06', '2023-02-15 17:21:06'),
(60, 'Swiss Life (Singapore) Pte Ltd', 'https://www.swisslife-global.com/global-solutions.html', '1676539331.png', 1, 1, '2023-02-15 17:22:11', '2023-02-15 17:22:11'),
(61, 'Utmost Worldwide Limited', 'https://utmostinternational.com/', '1676539348.png', 1, 1, '2023-02-15 17:22:28', '2023-02-15 17:22:28'),
(62, 'Allianz Insurance Singapore Pte Ltd', 'https://www.allianz-asiapacific.com/', '1676539513.png', 1, 1, '2023-02-15 17:25:14', '2023-02-15 17:25:14'),
(63, 'Allianz Global Corporate (Singapore Branch)', 'https://www.allianz.sg/', '1676539542.png', 1, 1, '2023-02-15 17:25:42', '2023-02-15 17:25:42'),
(64, 'Allied World Assurance Company Ltd (Singapore Branch)', 'https://awac.com/', '1676539583.jpg', 1, 1, '2023-02-15 17:26:23', '2023-02-15 17:26:23'),
(65, 'Atradius Credit Insurance N.V.', 'https://group.atradius.com/', '1676539590.png', 1, 1, '2023-02-15 17:26:30', '2023-02-15 17:26:30'),
(66, 'Beazley Pte Ltd', 'https://www.beazley.com/en-sg', '1676539654.png', 1, 1, '2023-02-15 17:27:34', '2023-02-15 17:27:34'),
(67, 'Berkley Insurance Asia', 'https://berkleyasia.com/', '1676539666.jpg', 1, 1, '2023-02-15 17:27:46', '2023-02-15 17:27:46'),
(68, 'Berkshire Hathaway Specialty Insurance Company', 'https://bhspecialty.com/', '1676539675.jpg', 1, 1, '2023-02-15 17:27:55', '2023-02-15 17:27:55'),
(69, 'Catlin Singapore Pte Ltd', 'https://axaxl.com/insurance', NULL, 1, 1, '2023-02-15 17:28:06', '2023-02-15 17:28:06'),
(70, 'Chubb Insurance Singapore Limited', 'https://www.chubb.com/sg-en/', '1676539694.jpg', 1, 1, '2023-02-15 17:28:14', '2023-02-15 17:28:14'),
(71, 'Coface Singapore', 'https://www.coface.com.sg/', '1676539710.jpg', 1, 1, '2023-02-15 17:28:30', '2023-02-15 17:28:30'),
(72, 'Great American Insurance Company – Singapore Branch', 'https://www.greatamericaninsurancegroup.com/', '1676539864.png', 1, 1, '2023-02-15 17:31:04', '2023-02-15 17:31:04'),
(73, 'First Capital Insurance Ltd', 'https://www.msfirstcapital.com.sg/', '1676539925.jpg', 1, 1, '2023-02-15 17:32:05', '2023-02-15 17:32:05'),
(74, 'Groupama Transport Singapore Branch', 'http://www.groupama.com.hk/about/transport.htm', '1676539953.png', 1, 1, '2023-02-15 17:32:33', '2023-02-15 17:32:33'),
(75, 'Hong Leong Assurance Pte Ltd', 'https://www.hlas.com.sg/', '1676539970.png', 1, 1, '2023-02-15 17:32:50', '2023-02-15 17:32:50'),
(76, 'Euler Hermes Credit Insurance Agency (S) Pte Ltd - Singapore Branch', 'https://www.allianz-trade.com/en_SG.html', '1676539981.jpg', 1, 1, '2023-02-15 17:33:01', '2023-02-15 17:33:01'),
(77, 'Convex Insurance UK Ltd', 'https://convexin.com/', '1676540032.jpg', 1, 1, '2023-02-15 17:33:52', '2023-02-15 17:33:52'),
(78, 'Delta Underwriting Private Limited', 'https://deltaunderwriting.com/', '1676540055.png', 1, 1, '2023-02-15 17:34:15', '2023-02-15 17:34:15'),
(79, 'ECICS Limited', 'https://www.ecics.com.sg/', '1676540066.png', 1, 1, '2023-02-15 17:34:26', '2023-02-15 17:34:26'),
(80, 'EQ Insurance Company Limited', 'https://www.eqinsurance.com.sg/', '1676540077.jpg', 1, 1, '2023-02-15 17:34:37', '2023-02-15 17:34:37'),
(81, 'India International Insurance Pte Ltd', 'https://www.iii.com.sg/', '1676540377.jpg', 1, 1, '2023-02-15 17:39:37', '2023-02-15 17:39:37'),
(82, 'Liberty International Underwriters', 'https://www.libertyspecialtymarkets.com.sg/', '1676540390.png', 1, 1, '2023-02-15 17:39:50', '2023-02-15 17:39:50'),
(83, 'Lloyd’s Asia Pte Ltd', 'https://www.lloyds.com/singapore', '1676540402.jpg', 1, 1, '2023-02-15 17:40:02', '2023-02-15 17:40:02'),
(84, 'Lonpac Insurance Berhad', 'https://www.lonpac.com.sg/', '1676540410.jpg', 1, 1, '2023-02-15 17:40:11', '2023-02-15 17:40:11'),
(85, 'MS Amlin Singapore', NULL, '1676540421.png', 1, 1, '2023-02-15 17:40:21', '2023-02-15 17:40:21'),
(86, 'Munich Re Syndicate Singapore Pte Limited', NULL, '1676540430.jpg', 1, 1, '2023-02-15 17:40:30', '2023-02-15 17:40:30'),
(87, 'Newline Asia Services Pte Ltd', 'https://newlinegroup.com/offices/asia/', '1676540455.jpg', 1, 1, '2023-02-15 17:40:55', '2023-02-15 17:40:55'),
(88, 'Shipowners’ Asia Pte Ltd', NULL, '1676540485.png', 1, 1, '2023-02-15 17:41:25', '2023-02-15 17:41:25'),
(89, 'Starr International Insurance (Singapore) Pte Ltd', 'https://www.starrcompanies.com/country-pages/singapore', '1676540540.jpg', 1, 1, '2023-02-15 17:42:20', '2023-02-15 17:42:20'),
(90, 'Tokio Marine Kiln', 'https://www.tmkiln.com/', '1676540548.png', 1, 1, '2023-02-15 17:42:29', '2023-02-15 17:42:29'),
(91, 'Zurich Insurance Company (Singapore Branch)', 'https://www.zurich.com.sg/en', '1676540563.jpg', 1, 1, '2023-02-15 17:42:43', '2023-02-15 17:42:43'),
(92, 'United Overseas Insurance Ltd', 'https://www.uoi.com.sg/uoi/index.html', '1676540653.png', 1, 1, '2023-02-15 17:44:13', '2023-02-15 17:44:13'),
(93, 'Columbia threadneedle Investments (Lux)', NULL, '1676540865.jpg', 1, 1, '2023-02-15 17:47:45', '2023-02-15 17:47:45'),
(94, 'BNB Paribas Asset Management', NULL, '1676540881.jpg', 1, 1, '2023-02-15 17:48:01', '2023-02-15 17:48:01'),
(95, 'Blackrock Fund Advisors', NULL, '1676540889.jpg', 1, 1, '2023-02-15 17:48:09', '2023-02-15 17:48:09'),
(96, 'Barclays', NULL, '1676540895.jpg', 1, 1, '2023-02-15 17:48:15', '2023-02-15 17:48:15'),
(97, 'ArrowShares', NULL, '1676540900.png', 1, 1, '2023-02-15 17:48:20', '2023-02-15 17:48:20'),
(98, 'Fidelity Investments', NULL, '1676540983.jpg', 1, 1, '2023-02-15 17:49:43', '2023-02-16 01:50:30'),
(99, 'Allianz Global Investors Singapore Ltd.', NULL, '1676540929.png', 1, 1, '2023-02-15 17:48:49', '2023-02-15 17:48:49'),
(100, 'Aberdeen Standard Investments', NULL, '1676540934.jpg', 1, 1, '2023-02-15 17:48:54', '2023-02-15 17:48:54'),
(101, 'Credit Suisse AG', NULL, '1676540940.png', 1, 1, '2023-02-15 17:49:00', '2023-02-15 17:49:00'),
(102, 'Davis ETFs', NULL, '1676540944.png', 1, 1, '2023-02-15 17:49:04', '2023-02-15 17:49:04'),
(103, 'Deursche Asset Management ETF (SG)', NULL, '1676540952.jpg', 1, 1, '2023-02-15 17:49:12', '2023-02-15 17:49:12'),
(104, 'DWS Investments Singapore Limited', NULL, '1676540964.png', 1, 1, '2023-02-15 17:49:24', '2023-02-15 17:49:24'),
(105, 'Franklin Templeton Investment', NULL, '1676540972.jpg', 1, 1, '2023-02-15 17:49:32', '2023-02-15 17:49:32'),
(106, 'Eastspring Investments (Singapore) Limited', NULL, '1676540979.png', 1, 1, '2023-02-15 17:49:39', '2023-02-15 17:49:39'),
(107, 'iFAST Financial', NULL, NULL, 1, 1, '2023-02-25 02:21:33', '2023-02-25 02:21:33'),
(108, 'iFAST Global Prestige', NULL, NULL, 1, 1, '2023-02-25 02:21:46', '2023-02-25 02:21:46'),
(109, 'FAME', NULL, NULL, 1, 1, '2023-02-25 02:21:59', '2023-02-25 02:21:59'),
(110, 'Havenport', NULL, NULL, 1, 1, '2023-02-25 02:22:06', '2023-02-25 02:22:06'),
(111, 'Navigator', NULL, NULL, 1, 1, '2023-02-25 02:22:14', '2023-02-25 02:22:20');

-- --------------------------------------------------------

--
-- Table structure for table `partner_groups`
--

CREATE TABLE `partner_groups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `sequence` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partner_groups`
--

INSERT INTO `partner_groups` (`id`, `name`, `icon`, `sequence`, `active`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Group Employee Benefits', 'group-employee-benefits-icon.png', 7, 1, 1, '2023-02-14 17:52:06', '2023-03-09 20:02:34'),
(2, 'General Insurance', 'general-insurance-icon.png', 6, 1, 1, '2023-02-14 17:52:06', '2023-03-09 20:02:50'),
(3, 'Life Insurance', 'life-insurance-icon.png', 1, 1, 1, '2023-02-14 17:52:06', '2023-03-09 20:02:29'),
(4, 'Global Health Plans', 'global-health-plans-icon.png', 8, 1, 1, '2023-02-14 17:52:06', '2023-03-09 20:02:45'),
(5, 'Distributor Agreements', NULL, 9, 0, 1, '2023-02-14 17:52:06', '2023-08-26 16:55:37'),
(6, 'Introducer Agreements', NULL, 10, 0, 1, '2023-02-14 17:52:06', '2023-08-26 16:55:41'),
(7, 'Bank (Home Loans)', 'bank-partners-icon.png', 4, 1, 1, '2023-02-14 17:52:06', '2023-03-09 20:02:35'),
(8, 'Bank (Commercial Loans)', 'bank-partners-icon.png', 5, 1, 1, '2023-02-14 18:15:47', '2023-03-09 20:02:38'),
(9, 'Asset Managers', 'asset-managers-icon.png', 3, 1, 1, '2023-02-16 01:47:04', '2023-03-09 20:02:58'),
(10, 'Investment Platforms', 'investment-platform-icon.png', 2, 1, 1, '2023-02-25 01:55:58', '2023-03-09 20:03:09');

-- --------------------------------------------------------

--
-- Table structure for table `partner_group_references`
--

CREATE TABLE `partner_group_references` (
  `partner_id` int(10) UNSIGNED NOT NULL,
  `partner_group_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partner_group_references`
--

INSERT INTO `partner_group_references` (`partner_id`, `partner_group_id`) VALUES
(2, 2),
(2, 4),
(2, 1),
(2, 3),
(1, 3),
(14, 4),
(15, 2),
(15, 4),
(16, 4),
(17, 4),
(4, 4),
(7, 4),
(9, 4),
(18, 2),
(18, 4),
(19, 4),
(10, 8),
(10, 7),
(20, 7),
(21, 7),
(22, 7),
(23, 7),
(24, 7),
(25, 7),
(26, 7),
(27, 7),
(28, 7),
(1, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(29, 7),
(29, 6),
(30, 7),
(30, 6),
(31, 7),
(31, 6),
(32, 7),
(32, 6),
(33, 7),
(33, 6),
(34, 7),
(34, 6),
(35, 7),
(35, 6),
(36, 7),
(36, 6),
(37, 5),
(38, 5),
(39, 5),
(37, 5),
(38, 5),
(39, 5),
(40, 5),
(41, 5),
(42, 5),
(43, 5),
(44, 5),
(45, 5),
(46, 5),
(47, 5),
(48, 5),
(49, 5),
(50, 3),
(51, 3),
(52, 3),
(53, 3),
(54, 3),
(55, 3),
(41, 3),
(5, 3),
(56, 3),
(7, 3),
(57, 3),
(9, 3),
(58, 3),
(59, 3),
(60, 3),
(61, 3),
(8, 3),
(62, 2),
(63, 2),
(64, 2),
(65, 2),
(51, 2),
(66, 2),
(67, 2),
(68, 2),
(69, 2),
(70, 2),
(71, 2),
(3, 2),
(72, 2),
(73, 2),
(74, 2),
(75, 2),
(76, 2),
(77, 2),
(78, 2),
(79, 2),
(80, 2),
(52, 2),
(4, 2),
(9, 2),
(6, 2),
(5, 2),
(19, 2),
(81, 2),
(82, 2),
(83, 2),
(84, 2),
(85, 2),
(86, 2),
(87, 2),
(88, 2),
(8, 2),
(89, 2),
(90, 2),
(91, 2),
(92, 2),
(93, 9),
(94, 9),
(95, 9),
(96, 9),
(97, 9),
(98, 9),
(99, 9),
(100, 9),
(101, 9),
(102, 9),
(103, 9),
(104, 9),
(105, 9),
(106, 9),
(107, 9),
(107, 10),
(108, 10),
(109, 10),
(110, 10),
(111, 10);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'developer', 'web', NULL, NULL),
(2, 'admin', 'web', NULL, NULL),
(3, 'virtual-assistant', 'web', NULL, NULL),
(4, 'branch-director', 'web', NULL, NULL),
(5, 'unit-manager', 'web', NULL, NULL),
(6, 'consultant', 'web', NULL, NULL),
(7, 'recruiter', 'web', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_plans`
--

CREATE TABLE `service_plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `service_plans`
--

INSERT INTO `service_plans` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Financial Planning for Adults', 'financial-planning-adults', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(2, 'Financial Planning for Children', 'financial-planning-children', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(3, 'Insurance Portfolio Review', 'insurance-portfolio-review', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(4, 'Savings and Investment Plans', 'savings-and-investment-plans', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(5, 'Retirement Planning', 'retirement-planning', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(6, 'Loan Advisory', 'loan-advisory', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(7, 'Investment Advisory', 'investment-advisory', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(8, 'General Insurance', 'general-insurance', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(9, 'Estate Planning', 'estate-planning', '2024-01-14 16:02:34', '2024-01-14 16:02:34'),
(10, 'Business Continuity', 'business-continuity', '2024-01-14 16:02:34', '2024-01-14 16:02:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `active`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jayvee Infinity', 'jayveeinfinity@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, NULL, NULL),
(2, 'Lebron James', 'lebronjames@nba.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 09:52:43', '2023-08-26 09:52:43'),
(3, 'Kyrie Irving', 'kyrieirving@nba.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 09:53:29', '2023-08-26 09:53:29'),
(4, 'Anthony Davis', 'anthonydavis@nba.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 09:54:41', '2023-08-26 09:54:41'),
(5, 'Tim Cone', 'timecone@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 09:59:17', '2023-08-26 23:15:42'),
(6, 'test', 'test@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 09:59:49', '2023-08-26 09:59:49'),
(7, 'John Doe', 'johndoe@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 10:00:36', '2023-08-26 10:00:36'),
(8, 'Jane Doe', 'janedoe@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 10:00:54', '2023-08-26 10:00:54'),
(9, 'test2', 'test5@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 0, NULL, '2023-08-26 10:03:52', '2023-08-26 23:50:13'),
(10, 'test3', 'test3@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 0, NULL, '2023-08-26 10:09:33', '2023-08-26 23:58:33'),
(11, 'Administrator', 'financialark@fin-ark.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 17:31:22', '2023-08-26 17:31:22'),
(12, 'Jeff Doe', 'jeffdoe@gmail.com', NULL, '$2y$10$iUJ/cQ3jsd011dN80TyNW.4L81.3axOyVk3559DSvZiQ6zNK0KY/u', 1, NULL, '2023-08-26 22:45:14', '2023-08-26 22:45:14');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uid` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `duration` double DEFAULT NULL,
  `course_id` bigint(20) UNSIGNED DEFAULT NULL,
  `sequence` int(11) NOT NULL,
  `visibility` tinyint(1) NOT NULL DEFAULT 1,
  `uploaded_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `watch_videos`
--

CREATE TABLE `watch_videos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `video_id` bigint(20) UNSIGNED NOT NULL,
  `progress` double NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointments_client_id_foreign` (`client_id`),
  ADD KEY `appointments_service_plan_id_foreign` (`service_plan_id`),
  ADD KEY `appointments_user_id_foreign` (`user_id`),
  ADD KEY `appointments_assigned_by_foreign` (`assigned_by`);

--
-- Indexes for table `careers_applications`
--
ALTER TABLE `careers_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clients_email_unique` (`email`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_created_by_foreign` (`created_by`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partner_groups`
--
ALTER TABLE `partner_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `service_plans`
--
ALTER TABLE `service_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `videos_course_id_foreign` (`course_id`),
  ADD KEY `videos_uploaded_by_foreign` (`uploaded_by`);

--
-- Indexes for table `watch_videos`
--
ALTER TABLE `watch_videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `watch_videos_user_id_foreign` (`user_id`),
  ADD KEY `watch_videos_video_id_foreign` (`video_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `careers_applications`
--
ALTER TABLE `careers_applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `partner_groups`
--
ALTER TABLE `partner_groups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `service_plans`
--
ALTER TABLE `service_plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `watch_videos`
--
ALTER TABLE `watch_videos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_assigned_by_foreign` FOREIGN KEY (`assigned_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `appointments_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `appointments_service_plan_id_foreign` FOREIGN KEY (`service_plan_id`) REFERENCES `service_plans` (`id`),
  ADD CONSTRAINT `appointments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `videos_uploaded_by_foreign` FOREIGN KEY (`uploaded_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `watch_videos`
--
ALTER TABLE `watch_videos`
  ADD CONSTRAINT `watch_videos_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `watch_videos_video_id_foreign` FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
