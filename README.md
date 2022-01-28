# Lingual
 
Lingual is a complexe dictionary where you can have some informations about a component.

To make the site work, you should download [MySQL Workbench](https://dev.mysql.com/downloads/installer/) (follow [these steps](./#install-mysql) to install MySQL) and run the command `npm update` from the project's root.

When this is done, modify credentials inside `./packets/mysql/index.js`.

By default, when you run the application, it will create the database itself, if you want to use an already completed database (ACD), do the following:

```batch
node ./index.js -u
```

If you want to use a custom database, modify de model (`./packets/mysql/lingual.sql`) and the already completed SQL (`./packets/mysql/exported.sql`)

## Visibility

Lingual is visible, not only on the host, but also in your entire local network. Once Lingual is launched, you can you use it, no matter which device, as soon as it have an internet browser and if it is connected to the same router.

## Install MySQL

