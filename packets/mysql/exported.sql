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

--
-- Table structure for table `components`
--
USE `lingual`;

DROP TABLE IF EXISTS `components`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `components` (
  `id` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `component` varchar(256) COLLATE utf8mb4_bin NOT NULL,
  `reading` varchar(256) COLLATE utf8mb4_bin DEFAULT NULL,
  `language` varchar(6) CHARACTER SET ascii COLLATE ascii_bin DEFAULT 'en-US',
  `types` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pronunciations` text COLLATE utf8mb4_bin NOT NULL,
  `translations` text COLLATE utf8mb4_bin NOT NULL,
  `definitions` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `components`
--

LOCK TABLES `components` WRITE;
/*!40000 ALTER TABLE `components` DISABLE KEYS */;
INSERT INTO `components` VALUES ('!.fr-FR.punctuation','!','null','fr-FR','[\"punctuation\"]','[]','{}','{\"fr-FR\":[[null,\"Placé à la fin d\'une phrase exclamative.\",null],[\"Écriture\",\"un espace obligatoire avant le caractère.\",\"Il va tomber !\"],[\"Nom\",\"Le point d\'exclamation.\",null]]}'),('..fr-FR.api','.','null','fr-FR','[\"api\"]','[]','{}','{}'),(':.fr-FR.punctuation',':','null','fr-FR','[\"punctuation\"]','[]','{}','{\"fr-FR\":[[null,\"Utilisé pour définir ce qui précède.\",\"Il est bleu : le schtroumpf.\"],[\"Écriture\",\"Un espace obligatoire avant et après le caractère.\",null],[\"Nom\",\"Les deux-points.\",null]]}'),('A.fr-FR.char','A','null','fr-FR','[\"char\"]','[[\"fr-FR\",\"a\"]]','{}','{\"fr-FR\":[[null,\"Première lettre de l\'alphabet majuscule.\",null],[null,\"Première voyelle de l\'alphabet majuscule.\",null]]}'),('Arbeit.de-DE.word','Arbeit','null','de-DE','[\"word\",\"singular feminine noun\"]','[[\"de-DE\",\"ˈarbait\"]]','{\"fr-FR\":[[null,\"travail\",\"Ce travail est compliqué.\"]]}','{\"fr-FR\":[[null,\"Activité déployée pour réaliser quelque chose.\",null]]}'),('a.fr-FR.api','a','null','fr-FR','[\"api\"]','[]','{}','{}'),('a.fr-FR.char','a','null','fr-FR','[\"char\"]','[[\"fr-FR\",\"a\"]]','{}','{\"fr-FR\":[[null,\"Première lettre de l\'alphabet minuscule.\",null],[null,\"Première voyelle de l\'alphabet minuscule.\",null]]}'),('amarrer.fr-FR.word','amarrer','null','fr-FR','[\"word\",\"transitive verb\",\"first group verb\"]','[[\"fr-FR\",\"a.ma.ʁe\"]]','{}','{\"fr-FR\":[[null,\"Fixer un navire avec des amarres.\",null]]}'),('b.fr-FR.api','b','null','fr-FR','[\"api\"]','[]','{}','{}'),('d.fr-FR.api','d','null','fr-FR','[\"api\"]','[]','{}','{}'),('e.fr-FR.api','e','null','fr-FR','[\"api\"]','[]','{}','{}'),('f.fr-FR.api','f','null','fr-FR','[\"api\"]','[]','{}','{}'),('i.fr-FR.api','i','null','fr-FR','[\"api\"]','[]','{}','{}'),('j.fr-FR.api','j','null','fr-FR','[\"api\"]','[]','{}','{}'),('k.fr-FR.api','k','null','fr-FR','[\"api\"]','[]','{}','{}'),('l.fr-FR.api','l','null','fr-FR','[\"api\"]','[]','{}','{}'),('m.fr-FR.api','m','null','fr-FR','[\"api\"]','[]','{}','{}'),('manger.fr-FR.word','manger','null','fr-FR','[\"word\",\"first group verb\",\"singular masculine noun\"]','[[\"fr-FR\",\"mɑ̃.ʒe\"]]','{}','{\"fr-FR\":[[\"Verbe\",\"Se nourrir, prendre un repas.\",\"Je mange des pâtes.\"],[\"Nom\",\"La nourriture\",\"Ça être bon manger.\"]]}'),('moyen.fr-FR.word','moyen','null','fr-FR','[\"word\",\"singular masculine adjective\",\"singular masculine noun\"]','[[\"fr-FR\",\"mwa.ˈjɛ̃\"]]','{}','{\"fr-FR\":[[\"Adjectif\",\"Désigne quelque chose ou quelqu\'un à la moitié d\'une comparaison de taille dite maximale.\",\"Cette pomme est de taille moyenne.\"],[\"Méthode\",\"Désigne la manière dont quelque chose est fait.\",\"Il y a moyen de pouvoir bâtir cette maison.\"],[\"Argent – argot\",\"Désigne le fait d\'avoir ou de ne pas avoir la somme d\'argent requise.\",\"J\'ai les moyens d\'acheter cette pomme.\"]]}'),('n.fr-FR.api','n','null','fr-FR','[\"api\"]','[]','{}','{}'),('o.fr-FR.api','o','null','fr-FR','[\"api\"]','[]','{}','{}'),('p.fr-FR.api','p','null','fr-FR','[\"api\"]','[]','{}','{}'),('pays.fr-FR.word','pays','null','fr-FR','[\"word\",\"masculine invariant in number noun\"]','[[\"fr-FR\",\"pe.i\"]]','{}','{\"fr-FR\":[[null,\"Territoire d\'un État, d\'une nation.\",\"Le pays français est la première puissance économique d\'Europe.\"]]}'),('s.fr-FR.api','s','null','fr-FR','[\"api\"]','[]','{}','{}'),('t.fr-FR.api','t','null','fr-FR','[\"api\"]','[]','{}','{}'),('u.fr-FR.api','u','null','fr-FR','[\"api\"]','[]','{}','{}'),('un.fr-FR.word','un','null','fr-FR','[\"word\",\"pronoun\",\"singular masculine noun\",\"cardinal adjective\",\"indefinite article\"]','[[\"fr-FR\",\"ɛ̃\"]]','{}','{\"fr-FR\":[[\"Nom masculin singulier\",\"Principe d\'unité existant en soi et pour soi.\",\"L\'un est bleu et l\'autre rouge.\"],[null,\"Chiffre 1 exprimant l\'unité.\",\"il fallait jouer le un !\"],[\"Pronom\",\"S\'oppose régulièrement à &quot;l\'autre&quot;.\",\"L\'un et l\'autre son venu.\"],[\"Article indéfini\",\"Indiquant le genre et le nombre du groupe nominal qu\'il détermine.\",null],[\"Adjectif cardinal\",\"Le premier des nombres entiers.\",null],[null,\"Dans une numérotation, indique le premier élément\",\"Livre un.\"]]}'),('v.fr-FR.api','v','null','fr-FR','[\"api\"]','[]','{}','{}'),('w.fr-FR.api','w','null','fr-FR','[\"api\"]','[]','{}','{}'),('y.fr-FR.api','y','null','fr-FR','[\"api\"]','[]','{}','{}'),('z.fr-FR.api','z','null','fr-FR','[\"api\"]','[]','{}','{}'),('ø.fr-FR.api','ø','null','fr-FR','[\"api\"]','[]','{}','{}'),('ŋ.fr-FR.api','ŋ','null','fr-FR','[\"api\"]','[]','{}','{}'),('œ.fr-FR.api','œ','null','fr-FR','[\"api\"]','[]','{}','{}'),('œ̃.fr-FR.api','œ̃','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɑ.fr-FR.api','ɑ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɑ̃.fr-FR.api','ɑ̃','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɔ.fr-FR.api','ɔ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɔ̃.fr-FR.api','ɔ̃','null','fr-FR','[\"api\"]','[]','{}','{}'),('ə.fr-FR.api','ə','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɛ.fr-FR.api','ɛ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɛː.fr-FR.api','ɛː','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɛ̃.fr-FR.api','ɛ̃','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɡ.fr-FR.api','ɡ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɥ.fr-FR.api','ɥ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ɲ.fr-FR.api','ɲ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ʁ.fr-FR.api','ʁ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ʃ.fr-FR.api','ʃ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ʒ.fr-FR.api','ʒ','null','fr-FR','[\"api\"]','[]','{}','{}'),('ˈ.fr-FR.api','ˈ','null','fr-FR','[\"api\"]','[]','{}','{}'),('‿.fr-FR.api','‿','null','fr-FR','[\"api\"]','[]','{}','{}'),('你好.zh-CN.word','你好','ní\'hǎo','zh-CN','[\"word\",\"interjection\"]','[[\"zh-CN\",\"ni˧˥.xɑʊ̯˨˩\"]]','{\"fr-FR\":[[null,\"Bonjour, à tout moment de la journée.\",null]]}','{}'),('犬.ja.word','犬','inu','ja','[\"word\",\"noun\"]','[[\"ja\",\"i˨.nɯ˦.◌˨\"],[\"zh-CN\",\"t͡ɕʰy̯ɛn˨˩˦\"]]','{\"fr-FR\":[[\"Animal\",\"chien.ne.s\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammifère carnivore de la famille des canidés.\",null]]}'),('犬.zh-CN.word','犬','quǎn','zh-CN','[\"word\",\"noun\"]','[[\"zh-CN\",\"t͡ɕʰy̯ɛn˨˩˦\"],[\"ja\",\"i˨.nɯ˦.◌˨\"]]','{\"fr-FR\":[[\"Animal\",\"chien.ne.s\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammifère carnivore de la famille des canidés.\",null]]}'),('犭.ja.char','犭','null','ja','[\"char\"]','[]','{}','{\"fr-FR\":[[\"Clé\",\"Forme cursive de 犬, en composition à gauche du caractère composé.\",null]]}'),('猫.ja.word','猫','neko','ja','[\"word\",\"noun\"]','[[\"ja\",\"ne̞˦.ko̞˨\"]]','{\"fr-FR\":[[\"Animal\",\"chat.te.s\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammifère carnivore, de la famille des félidés, ayant de nombreuses espèces domestiques et quelques-unes sauvages.\",null]]}'),('고양이.ko-KR.word','고양이','goyangi','ko-KR','[\"word\",\"noun\"]','[[\"ko-KR\",\"ko.ja.ŋi\"]]','{\"fr-FR\":[[\"Animal\",\"chat.te.s\",null]]}','{\"fr-FR\":[[\"Animal\",\"Mammifère carnivore, de la famille des félidés, ayant de nombreuses espèces domestiques et quelques-unes sauvages.\",null]]}');
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
  `chars` text COLLATE utf8mb4_bin NOT NULL,
  `api` text COLLATE utf8mb4_bin NOT NULL,
  `types` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('all','[]','[]','[]'),('de-DE','[]','[]','[]'),('en-GB','[]','[]','[]'),('en-US','[]','[]','[]'),('fr-FR','[\"a\",\"A\"]','[\"a\",\"b\",\"d\",\"f\",\"ɡ\",\"k\",\"l\",\"m\",\"n\",\"ŋ\",\"ɲ\",\"p\",\"ʁ\",\"s\",\"ʃ\",\"t\",\"v\",\"z\",\"ʒ\",\"j\",\"w\",\"ɥ\",\"ɑ\",\"e\",\"ɛ\",\"ɛː\",\"ə\",\"i\",\"œ\",\"ø\",\"o\",\"ɔ\",\"u\",\"y\",\"ɑ̃\",\"ɛ̃\",\".\",\"œ̃\",\"ɔ̃\",\"ˈ\",\"‿\"]','[]'),('ja','[\"犭\"]','[]','[]'),('ko-KP','[]','[]','[]'),('ko-KR','[]','[]','[]'),('zh-CN','[]','[]','[]');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `link` varchar(512) COLLATE utf8mb4_bin NOT NULL,
  `language` varchar(6) CHARACTER SET ascii COLLATE ascii_bin DEFAULT 'en-US',
  `pronunciations` text COLLATE utf8mb4_bin NOT NULL,
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

-- Dump completed on 2021-10-29  3:22:22
