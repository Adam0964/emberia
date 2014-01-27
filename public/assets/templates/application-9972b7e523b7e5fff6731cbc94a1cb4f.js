Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n					                About\n					        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n					                 Emberia\n					        ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n					                  How-To\n					        ");
  }

  data.buffer.push("\n<div class=\"jumbotron\">\n     <div class=\"container\"> \n			<center><table class='embertainer'>\n				    <tr>\n					<td>\n					    <h4>\n					        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "emvideo", options) : helperMissing.call(depth0, "link-to", "emvideo", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					    </h4>\n					</td>\n					<td>\n					    <h3>\n					        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "emvideo", "", options) : helperMissing.call(depth0, "link-to", "emvideo", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					    </h3>\n					</td>\n					<td>\n					    <h4>\n					        ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "emvideo", "", options) : helperMissing.call(depth0, "link-to", "emvideo", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n					    </h4>\n					</td>\n				    </tr>\n				</table><br />\n			</center>\n\n			<center><div class='statement'>\n				        <h1>\n				             Sign in to add an emvideo\n						</h1>	\n				    </div>\n			</center>\n			<center>\n				    <div class='Oauth'>\n				        <table>\n				               <tr>\n				                    <td><button id='git'>Github</button></td>\n				                    <td><button id='twit'>Twitter</button></td>  \n				                    <td><button id='goog'>Google+</button></td>\n				               </tr>\n				        </table>\n				   \n                    </div>\n            </center>\n                    \n    </div>\n</div>\n\n<div class=\"jumbotron-index\">\n     <div class=\"container\">\n     	<h3>Emvideos</h3>\n         \n     	<!-- <div class='casts'>\n        	     <p>\n	                <iframe src=\"");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "url", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\" frameborder=\"0\"></iframe>\n                </p> \n        </div>  -->\n     	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n		<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n\n		<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n     </div>\n</div>\n\n<div class=\"jumbotron-about\">\n     <div class=\"container\">\n     	<div class='title'><h4>ABOUT</h4></div>\n         <div class='text-flow'>\n         	The app was born from frustration: I don't think there are enough good emvideos that reflect the improvements made to the framework as they happen.Therfore, this application has only one purpose: allow the ember community to add emvideos that they think could add value. We know how fast ember is evolving, so fast that by the time you finish your app, new improvements to the API have been brought about. \n			The documentation is excellent, but, digging through it could be a dompting and time-consuming task. Seeing is believing: not only do screencats show you how it's done, but, they can save you a great deal of time, as well. Those of you who know of any good screencasts that you think deserve to be added to the list, please:\n			<p>1- take a look at what was already been listed before you click the 'Add' button. If you try to add a screencast that's alreading been listed, you will get an error. </p>\n			<p>2- Add recent screencasts. The more recent, the better. The application will reject any emvideos dated before 2013.</p>\n			<p>I included some of the ember screencasts that got everyone started on the framework, such as, Tome Dale's, Yehuda's, etc as a starting point and others that inpired me to learn ember and write this app.\n			</p>\n		</div>\n		<center>\n			<table>\n			  <tr>\n				<td>\n					You do need to sign in, using one of the three options, to add emvideos. And please, no porn!&nbsp&nbsp\n				</td>\n				<td class=\"emo\"><td>\n			  </tr>\n		    </table>\n		</center>\n     </div>\n</div>\n\n<div class=\"jumbotron-howto\">\n     <div class=\"container\">\n     	<div class='title'><h4>HOW-TO</h4></div>\n         <div class='text-flow'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>\n     </div>\n</div>\n<div class='footer'>\n	<div class='container' id='icon'>\n        <center>\n        	<h2>&nbspEMBERIA</h2>\n        	<h5>Kodefuge Inc &copy; 2013 &nbsp Builder: Adam Raouki.</h5><hr />\n            <table>\n        	  <tr>\n        		<td class='git'>g</td><td>&nbsp</td>\n        		<td class='goog'>g+</td><td>&nbsp</td>\n        		<td class='twit'>t</td><td>&nbsp</td>\n        		<td class='in'>in</td><td>&nbsp\n        		<td class='face'>f</td><td>\n        	  </tr>\n            </table>\n        </center>\n      <!-- <center>\n        <img class='git'>\n        <img class='in'>\n        <img class='icon'>&nbsp&nbsp&copy; Kodefuge 2013&nbsp&nbsp\n        <img class='twit'>\n        <img class='goog'>\n      </center> -->\n	</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
  
});
