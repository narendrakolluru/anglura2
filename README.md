# anglura2
Step 1

Create Project folder in your local michane.

Ex: mkdir "your project name".

Create Config files.

Note: copy config files from above project.
# tsconfig.json  ==> TypeScript compiler configuration file. It guides the compiler to generate JavaScript files.
# typings.json  ==>  used to identify TypeScript definition files in your Angular application.
# package.json ==> It contain the packages that our apps require. These packages are installed and maintained with npm (Node Package Manager).

 To Install npm run below command in command promt.
 
  # npm install .
  
 Create a sub-folder called app/ inside your project folder to the place Angular app components.
 
 commands to create app folder
 
   mkdir app
   
    cd app
    
 Create files inside app folder with .ts Extension
 
  ex:component.ts
  
 create one more file to import all dependend files
 
  ex: main.ts
  
  The main.ts file tells Angular to load the component.
  
  Now create a index.html in your project folder with all needed url
  
  Compile and Run
   
   npm start
