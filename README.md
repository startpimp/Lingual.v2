# Lingual
 
Lingual is a complexe dictionary where you can have some informations about a component.

To make the site work, you should download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) and run the command `npm update` from the project's root.

When this is done, modify credentials inside `./packets/mysql/index.js`.

By default, when you run the application, it will create the database itself, if you want to use an already completed database (ACD), do the following:

```bat
node ./index.js -u
```

If you want to use a custom database, modify de model (`./packets/mysql/lingual.sql`) and the already completed SQL (`./packets/mysql/exported.sql`)