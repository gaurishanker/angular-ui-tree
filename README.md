# angular-ui-tree :tada:
This repository contains tutorial about how to use angular-ui-tree in your project.<br>
Steps to include <a href="https://github.com/angular-ui-tree/angular-ui-tree">angular-ui-tree</a> in your project.
<ul>
<li>First follow steps included in <a href="https://github.com/angular-ui-tree/angular-ui-tree/blob/master/guide/01_development_setup.ngdoc">Official Guide</a> to download all dependencies. Mainly you have to run <code>npm install</code> and <code> bower install</code> in command prompt / terminal while you are present in your project directory i.e. where you have downloaded angular-ui-tree where bower.json and package.json files are present.</li><br>
<li>Copy [source](https://github.com/angular-ui-tree/angular-ui-tree/tree/master/source) folder from angular-ui-tree module in your project's plugin directory.<br>**Note:** All prerequisite files will be kept in one folder in plugin folder so that they can be used again somewhere else.</li><br>
<li>Copy `angular-ui-tree.js` from *dist* folder</li> <br>
<li>Include source scripts in your page as done in index.html page in src folder</li><br>
<li>Then include <code>script  type="text/ng-template"></code> from <a href="https://github.com/angular-ui-tree/angular-ui-tree/tree/master/examples/views">any example in Official Guide</a> (if you want to play with examples).</li><br>
<li>Then give a div an attribute <code>ui-tree</code></li><br>
<li>Inside above div create an ordered list with attribute <code> ui-tree-nodes="" ng-model="data"</code> where <code>data</code> is the name of an array of JSON objects present in *current scope* which depicts hierarchy.</li><br>
<li>Then use <code>ng-repeat</code>for elements of ordered list and also give them <code>ui-tree-node</code> attribute.<br>
For example :
<br>

```
<div ui-tree id="tree-root">
  <ol ui-tree-nodes="" ng-model="data">
    <li ng-repeat="node in data" ui-tree-node ng-include="'nodes_renderer.html'"></li>
  </ol>
</div>
```
</li><br>
<li>That's it for your html page. Now you have to initialize an array of JSON object in your current scope which stores hierarchy.(As shown in *app.js* file)</li><br>
<li>
:confetti_ball: You have completed basic hierarchy using angular-ui-tree :smile:  </li>
