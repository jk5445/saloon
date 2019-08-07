# Migrations

This directory will store scripts to detail the database. The details of migrations will be discussed below, but first the database needs to be created.

## Database Creation

We are using PostgreSQL. The first part of [this article](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/) serves as a great guide to getting PostgreSQL set up. Follow the article to create a database.

## Running Migrations

For now the migrations are run manually. Later on we may use a tool to manage migrations for us. The migrations need to be run once and in order. The migrations should be written so that if they run more than once, there is no additional change. For example, CREATE TABLE tableName commands are written CREATE TABLE IF NOT EXISTS tableName. File names should have the following structure **xxxfileName.sql**.

To run a migration, connect to the intended database and run **\i xxxfileName.sql;**.

## ToDo
The passwrod_hash datatype needs to be changed to support hashing.
