# Angular Project
Frontend Angular CRUD application

<p align="center">
  <a href="#-tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-developer">Developer</a>
</p>

  <p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>



## 🚀 Tecnologies

This project was developed with the following technologies:

- HTML
- CSS
- JavaScript
- Typescript
- [Angular 13](https://angular.io/)
- [Node.js 16.14.2](https://nodejs.org/en/)
- [Json-server 0.17.0](https://github.com/typicode/json-server)

Libraries:

- [Google Fonts](https://fonts.google.com/)
- [Angular Material](https://material.angular.io/)

Utilities:

- [Visual Studio Code](https://code.visualstudio.com/)

<p>&nbsp;</p>

## 💻 Project

This project is a single page application (SPA), responsive, developing with Angular CLI, Angular Material and Schematics to create, read, update and delete products from a database connected to the json-server. Contains the following components:



<p>&nbsp;</p>

## Frontend


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.   

<p>&nbsp;</p>

## Backend


### JSON Server [![Node.js CI](https://github.com/typicode/json-server/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/typicode/json-server/actions/workflows/node.js.yml)

Get a full fake REST API with __zero coding__ in __less than 30 seconds__ (seriously)

In a normal enterprise application, you work with many teams and third-party APIs. Imagine you need to call a third-party Restful web service that gives you JSON data to process. You are on a tight schedule, so you can not wait for the service to finish its work and then start doing your own. If you want to have a mockup Rest Web service in place to get the demo data for you, then json-server is the tool you are looking for.

Tutorials:
* [Egghead.io free video tutorial - Creating demo APIs with json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
* [JSONPlaceholder - Live running version](https://jsonplaceholder.typicode.com)
* [__My JSON Server__ - no installation required, use your own data](https://my-json-server.typicode.com)



Install JSON Server 

```
npm install -g json-server
```
Create a `db.json` file with some data

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```bash
json-server --watch db.json
```

Json Server Properties:

- [Routes]
  * [Plural routes]
  * [Singular routes]
  * [Filter]
  * [Paginate]
  * [Sort]
  * [Slice]
  * [Operators]
  * [Full-text search]
  * [Relationships]
  * [Database]
  * [Homepage]
- [Extras]
  * [Static file server]
  * [Alternative port]
  * [Access from anywhere]
  * [Remote schema]
  * [Generate random data]
  * [HTTPS]
  * [Add custom routes]
  * [Add middlewares]
  * [CLI usage]
  * [Module]
  * [Deployment]

<p>&nbsp;</p>

## 📝 License

This project is under the MIT license. Take a look at [LICENSE](.github/LICENSE.md) for more details.

<p>&nbsp;</p>

## 😎 Developer

Made by Wanderson Torres :wave:
<br>
Idealized by [Cod3r](https://www.cod3r.com.br/) :wave:
