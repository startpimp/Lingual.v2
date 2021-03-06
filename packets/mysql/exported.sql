-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lingual
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

USE `lingual`;

--
-- Table structure for table `components`
--

DROP TABLE IF EXISTS `components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `components` (
  `id` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `component` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `reading` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `language` varchar(6) CHARACTER SET ascii COLLATE ascii_bin DEFAULT 'en-US',
  `types` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pronunciations` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `translations` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `definitions` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `synonyms` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components`
--

LOCK TABLES `components` WRITE;
/*!40000 ALTER TABLE `components` DISABLE KEYS */;
INSERT INTO `components` VALUES ('!.fr-FR.punctuation','!','null','fr-FR','[\"punctuation\"]','[]','{}','{\"fr-FR\":[[null,\"Plac?? ?? la fin d\'une phrase exclamative.\",null],[\"??criture\",\"un espace obligatoire avant le caract??re.\",\"Il va tomber !\"],[\"Nom\",\"Le point d\'exclamation.\",null]]}','[]'),('..fr-FR.api','.','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),(':.fr-FR.punctuation',':','null','fr-FR','[\"punctuation\"]','[]','{}','{\"fr-FR\":[[null,\"Utilis?? pour d??finir ce qui pr??c??de.\",\"Il est bleu : le schtroumpf.\"],[\"??criture\",\"Un espace obligatoire avant et apr??s le caract??re.\",null],[\"Nom\",\"Les deux-points.\",null]]}','[]'),('A.fr-FR.char','A','null','fr-FR','[\"char\"]','[[\"fr-FR\",\"a\"]]','{}','{\"fr-FR\":[[null,\"Premi??re lettre de l\'alphabet majuscule.\",null],[null,\"Premi??re voyelle de l\'alphabet majuscule.\",null]]}','[]'),('Arbeit.de-DE.word','Arbeit','null','de-DE','[\"word\",\"singular feminine noun\"]','[[\"de-DE\",\"??arbait\"]]','{\"fr-FR\":[[null,\"travail\",\"Ce travail est compliqu??.\"]],\"ja\":[[null,\"??????\",null]]}','{\"fr-FR\":[[null,\"Activit?? d??ploy??e pour r??aliser quelque chose.\",null]]}','[]'),('a.fr-FR.api','a','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('a.fr-FR.char','a','null','fr-FR','[\"char\"]','[[\"fr-FR\",\"a\"]]','{}','{\"fr-FR\":[[null,\"Premi??re lettre de l\'alphabet minuscule.\",null],[null,\"Premi??re voyelle de l\'alphabet minuscule.\",null]]}','[]'),('ajouter.fr-FR.word','ajouter','null','fr-FR','[\"word\",\"first group verb\",\"transitive verb\"]','[[\"fr-FR\",\"a.??u.te\"]]','{\"zh-TW\":[[null,\"??????\",null]]}','{}','[]'),('amarrer.fr-FR.word','amarrer','null','fr-FR','[\"word\",\"transitive verb\",\"first group verb\"]','[[\"fr-FR\",\"a.ma.??e\"]]','{}','{\"fr-FR\":[[null,\"Fixer un navire avec des amarres.\",null]]}','[]'),('b.fr-FR.api','b','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('bouffer.fr-FR.word','bouffer','null','fr-FR','[\"word\",\"intransitive verb\",\"first group verb\"]','[[\"fr-FR\",\"bu.fe\"]]','{}','{}','[\"manger\",\"grailler\",\"se nourrir\"]'),('caract??re.fr-FR.word','caract??re','null','fr-FR','[\"word\",\"masculine singular common noun\"]','[[\"fr-FR\",\"ka.??ak.t????\"],[\"fr-CA\",\"ka.??ak.ta??????\"]]','{\"ja\":[[null,\"??????\",null],[\"????????????\",\"??????\",null],[null,\"??????\",null],[\"?????????\",\"??????????????????\",null]]}','{}','[]'),('d.fr-FR.api','d','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('e.fr-FR.api','e','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('f.fr-FR.api','f','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('i.fr-FR.api','i','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('j.fr-FR.api','j','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('k.fr-FR.api','k','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('l.fr-FR.api','l','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('langues.fr-FR.word','langues','null','fr-FR','[\"word\",\"feminine plural common noun\"]','[[\"fr-FR\",\"l??????\"]]','{\"zh-TW\":[[null,\"??????\",null],[\"??????\",\"??????\",null]],\"ja\":[[\"????????????\",\"???\",null],[\"??????\",\"??????\",null]]}','{}','[]'),('m.fr-FR.api','m','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('manger.fr-FR.word','manger','null','fr-FR','[\"word\",\"first group verb\",\"masculine singular noun\"]','[[\"fr-FR\",\"m????.??e\"]]','{\"ja\":[[null,\"?????????\",null],[\"??????\",\"?????????\",null]]}','{\"fr-FR\":[[\"Verbe\",\"Se nourrir, prendre un repas.\",\"Je mange des p??tes.\"],[\"Nom\",\"La nourriture\",\"??a ??tre bon manger.\"]]}','[\"bouffer\",\"grailler\",\"se nourrir\"]'),('mot.fr-FR.word','mot','null','fr-FR','[\"word\",\"masculine singular noun\"]','[[\"fr-FR\",\"mo\"]]','{\"zh-TW\":[[null,\"???\",null]],\"ja\":[[null,\"??????\",null]]}','{}','[]'),('moyen.fr-FR.word','moyen','null','fr-FR','[\"word\",\"singular masculine adjective\",\"masculine singular noun\"]','[[\"fr-FR\",\"mwa.??j????\"]]','{}','{\"fr-FR\":[[\"Adjectif\",\"D??signe quelque chose ou quelqu\'un ?? la moiti?? d\'une comparaison de taille dite maximale.\",\"Cette pomme est de taille moyenne.\"],[\"M??thode\",\"D??signe la mani??re dont quelque chose est fait.\",\"Il y a moyen de pouvoir b??tir cette maison.\"],[\"Argent ??? argot\",\"D??signe le fait d\'avoir ou de ne pas avoir la somme d\'argent requise.\",\"J\'ai les moyens d\'acheter cette pomme.\"]]}','[]'),('n.fr-FR.api','n','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('o.fr-FR.api','o','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('p.fr-FR.api','p','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('pays.fr-FR.word','pays','null','fr-FR','[\"word\",\"masculine invariant in number noun\"]','[[\"fr-FR\",\"pe.i\"]]','{}','{\"fr-FR\":[[null,\"Territoire d\'un ??tat, d\'une nation.\",\"Le pays fran??ais est la premi??re puissance ??conomique d\'Europe.\"]]}','[]'),('s.fr-FR.api','s','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('t.fr-FR.api','t','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('toutes.fr-FR.word','toutes','null','fr-FR','[\"word\",\"indefinite feminine plural adjective\",\"indefinite feminine plural pronoun\",\"feminine plural adverb\"]','[[\"fr-FR\",\"tut\"]]','{\"ja\":[[null,\"?????????\",null],[null,\"??????\",null],[null,\"??????\",\"???????????????????????????????????????\"]]}','{}','[]'),('u.fr-FR.api','u','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('un.fr-FR.word','un','null','fr-FR','[\"word\",\"pronoun\",\"cardinal adjective\",\"indefinite article\",\"masculine singular noun\"]','[[\"fr-FR\",\"????\"]]','{\"ja\":[[\"????????????\",\"??????1???\",null],[\"????????????\",\"??????\",\"???????????????????????????????????????????????????\"]]}','{\"fr-FR\":[[\"Nom masculin singulier\",\"Principe d\'unit?? existant en soi et pour soi.\",\"L\'un est bleu et l\'autre rouge.\"],[null,\"Chiffre 1 exprimant l\'unit??.\",\"il fallait jouer le un !\"],[\"Pronom\",\"S\'oppose r??guli??rement ?? &quot;l\'autre&quot;.\",\"L\'un et l\'autre son venu.\"],[\"Article ind??fini\",\"Indiquant le genre et le nombre du groupe nominal qu\'il d??termine.\",null],[\"Adjectif cardinal\",\"Le premier des nombres entiers.\",null],[null,\"Dans une num??rotation, indique le premier ??l??ment\",\"Livre un.\"]]}','[]'),('v.fr-FR.api','v','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('w.fr-FR.api','w','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('y.fr-FR.api','y','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('z.fr-FR.api','z','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('????.fr-FR.api','????','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('????.fr-FR.api','????','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('????.fr-FR.api','????','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('????.fr-FR.api','????','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('????.fr-FR.api','????','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??.fr-FR.api','??','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('???.fr-FR.api','???','null','fr-FR','[\"api\"]','[]','{}','{}','[]'),('??????????????????.ja.word','??????????????????','kyarakut??','ja','[\"word\"]','[[\"ja\",\"k??a.??a.k??.ta??\"]]','{\"fr-FR\":[[\"Personnage d\'animation\",\"Caract??re.s\",null],[null,\"Personnage.s\",null]],\"en-FR\":[[\"Personnage \",\"Caract??re.s\",null]]}','{}','[]'),('??????.zh-CN.word','??????','n??\'h??o','zh-CN','[\"word\",\"interjection\"]','[[\"zh-CN\",\"ni????.x??????????\"]]','{\"fr-FR\":[[null,\"Bonjour, ?? tous moments de la journ??e.\",null]],\"ja\":[[null,\"?????????????????????????????????\",null],[null,\"???????????????\",null],[null,\"???????????????\",null]]}','{}','[]'),('???.ja.word','???','inu','ja','[\"word\",\"noun\"]','[[\"ja\",\"i??.n????.?????\"],[\"zh-CN\",\"t??????y????n??????\"]]','{\"fr-FR\":[[\"Animal\",\"chien.ne.s\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammif??re carnivore de la famille des canid??s.\",null]]}','[]'),('???.zh-CN.word','???','qu??n','zh-CN','[\"word\",\"noun\"]','[[\"zh-CN\",\"t??????y????n??????\"],[\"ja\",\"i??.n????.?????\"]]','{\"fr-FR\":[[\"Animal\",\"chien.ne.s\",null]],\"ja\":[[null,\"???\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammif??re carnivore de la famille des canid??s.\",null]]}','[\"???\"]'),('???.ja.char','???','null','ja','[\"char\"]','[]','{}','{\"fr-FR\":[[\"Cl??\",\"Forme cursive de ???, en composition ?? gauche du caract??re compos??.\",null]]}','[]'),('???.ja.word','???','neko','ja','[\"word\",\"noun\"]','[[\"ja\",\"ne????.ko????\"],[\"zh-CN\",\"m????????\"]]','{\"fr-FR\":[[\"Animal\",\"chat.te.s\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammif??re carnivore, de la famille des f??lid??s, ayant de nombreuses esp??ces domestiques et quelques-unes sauvages.\",null]]}','[]'),('???.zh-TW.word','???','m??o','zh-TW','[\"word\",\"common noun\"]','[[\"zh-TW\",\"m????????\"]]','{\"zh-TW\":[[\"Zoologie\",\"Chat.te.s\",null]],\"ja\":[[null,\"???\",null]],\"fr-FR\":[[\"Animal\",\"chat.te.s\",null]]}','{\"zh-TW\":[],\"fr-FR\":[[\"Animal\",\"Mammif??re carnivore, de la famille des f??lid??s, ayant de nombreuses esp??ces domestiques et quelques-unes sauvages.\",null]]}','[]'),('?????????.ko-KR.word','?????????','goyangi','ko-KR','[\"word\",\"noun\"]','[[\"ko-KR\",\"ko.ja.??i\"]]','{\"fr-FR\":[[\"Animal\",\"chat.te.s\",null]],\"ja\":[[null,\"???\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammif??re carnivore, de la famille des f??lid??s, ayant de nombreuses esp??ces domestiques et quelques-unes sauvages.\",null]]}','[]');
/*!40000 ALTER TABLE `components` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `code` varchar(6) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `chars` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `api` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `types` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('all','[]','[]','[]'),('de-DE','[]','[]','[]'),('en-GB','[]','[]','[]'),('en-US','[]','[]','[]'),('fr-CA','[]','[]','[]'),('fr-FR','[\"a\",\"A\"]','[\"a\",\"b\",\"d\",\"f\",\"??\",\"k\",\"l\",\"m\",\"n\",\"??\",\"??\",\"p\",\"??\",\"s\",\"??\",\"t\",\"v\",\"z\",\"??\",\"j\",\"w\",\"??\",\"??\",\"e\",\"??\",\"????\",\"??\",\"i\",\"??\",\"??\",\"o\",\"??\",\"u\",\"y\",\"????\",\"????\",\".\",\"????\",\"????\",\"??\",\"???\"]','[]'),('ja','[\"???\"]','[]','[]'),('ko-KP','[]','[]','[]'),('ko-KR','[]','[]','[]'),('zh-CN','[]','[]','[]'),('zh-TW','[]','[]','[]');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `link` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `language` varchar(6) CHARACTER SET ascii COLLATE ascii_bin DEFAULT 'en-US',
  `pronunciations` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`link`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-05  2:24:55
