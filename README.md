# Lingual
 
Lingual is a complexe dictionary where you can have some informations about a component.

To make the site work, you should download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

When this is done, modify credentials inside `./packets/mysql/index.js`.

By default, when you run the application, it will create the database itself, if you want to use an already completed database, do the following:

```bat
node ./index.js -u
```