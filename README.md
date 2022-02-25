# Uses-of-npm
npm is Library which open-source.
npm is also a software Package Manager and Installer, can use common code of task

Basics of npm - https://www.w3schools.com/whatis/whatis_npm.asp

USES OF NPM:

step-1: npm init = initialize to folder
                   give some info or press enter 
                   is this OK? (yes) + enter
                   and will come package.json file(this file hold all info of app & save verson of installed all modules)

step-2: npm install date-format --save = Go to npm website & search module/package which u want to use
                                  add --save
                                  comes this package name at dependecies in package.json
                                  package.lock.json means saved of info of package
node_modules folder = installed package

step-3: npm i bootstrap --save = second package install

step-4: creat a js file like "index.js" - customize code of package/module
step-5: read documentation of spc. module at npm site


#While send our project:send only index.js & package.json
>npm installed - after automatically comes more two file package.lock.json & node_modules

#U can installed particular verson of module:
@3.3.7
>npm i bootstrap@3.3.7 --save

#U can npm unistall to any module
>npm uninstall date-format --save

#U can npm update to any module
>npm update date-format

#Have two type of dependency: global dependency & dev dependency
>npm i bootstrap --save-dev
>npm i typescript -g
>npm uninstalled typescript -g

>npm root = current project directory show
>npm root --g = current project directory show

#U can  publish your own project/package
C:\Users\myuser>cd myproject
C:\Users\myuser\myproject>npm publish
