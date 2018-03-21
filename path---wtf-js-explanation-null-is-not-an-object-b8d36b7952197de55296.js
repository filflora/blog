webpackJsonp([86203702471361],{497:function(e,t){e.exports={data:{markdownRemark:{html:'<h2 id="wtf-js-explanation-for-null-is-not-an-object"><a href="#wtf-js-explanation-for-null-is-not-an-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WTF JS explanation for "null is not an object"</h2>\n<h3 id="premise"><a href="#premise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Premise</h3>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">typeof</span> <span class="token keyword">null</span> <span class="token comment">// object</span>\n<span class="token keyword">null</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// false</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://wtfjs.com/wtfs/2010-02-12-null-is-not-an-object">wtfjs.com - null is not an object</a></cite></p>\n</blockquote>\n<h3 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h3>\n<p>The first line of the premise is a known "bug" in ECMAScript. <code>typeof null</code> should be <code>null</code>. Instead the spec defines that <code>Type(null)</code> should be <code>object</code>.</p>\n<blockquote>\n<p>You know, this all came about because of rushing in early May 1995, which led to a leak of type tag representation shared by null and object types. But null means "no object", so it didn\'t raise hackles until it was too late to fix in Netscape 2, and after that we were loath to "fix" it and "break the web".</p>\n<p>That argument only applies more in degree of web population now.</p>\n<p>We have other fish to fry. This one was has been swallowed already. Let\'s not change typeof null for ES4 and work on more vital issues.</p>\n<p>— <cite><a href="http://web.archive.org/web/20071110193102/http://bugs.ecmascript.org/ticket/250">Brendan Eich (Founder of Javascript)</a></cite></p>\n</blockquote>\n<p>On the other hand <code>null</code> can\'t have properties so it cannot be considered as an object. It\'s just a keyword representing a primitive, like <code>true</code> or <code>false</code>. Hence <code>true instanceof Object</code> is also <code>false</code>. </p>\n<p>It could be trivial because we are explicitly creating an <code>Object</code> but if you say <code>new Boolean(true) instanceof Object</code> then it will return <code>true</code>.</p>',timeToRead:1,excerpt:'WTF JS explanation for "null is not an object" Premise —   wtfjs.com - null is not an object Explanation The first line of the premise is a…',frontmatter:{title:"WTF JS explanation - null is not an object",cover:"https://unsplash.it/1280/900/?random?nullisobject",date:"03/17/2017",category:"explanation",tags:["explanation","js","wtf-js","primitives"],author:"fil"},fields:{slug:"/wtf-js-explanation-null-is-not-an-object"}},prev:{excerpt:"Temporal Dead Zone - JS terminology As of  ES6  two new block-scoped variable types are introduced, the  let…",frontmatter:{title:"JS terminology - Temporal Dead Zone",cover:"https://unsplash.it/1280/900/?random?temporaldeadzone",date:"03/20/2017"},fields:{slug:"/js-terminology-temporal-dead-zone"}},next:{excerpt:'WTF JS explanation for "parseInt treachery" Premise —   wtfjs.com - parseInt treachery Explanation Because the…',frontmatter:{title:"WTF JS explanation - parseInt treachery",cover:"https://unsplash.it/1280/900/?random?nullisobject",date:"03/17/2017"},fields:{slug:"/wtf-js-explanation-parse-int-treachery"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/wtf-js-explanation-null-is-not-an-object",total:9,prev:"/js-terminology-temporal-dead-zone",next:"/wtf-js-explanation-parse-int-treachery"}}}});
//# sourceMappingURL=path---wtf-js-explanation-null-is-not-an-object-b8d36b7952197de55296.js.map