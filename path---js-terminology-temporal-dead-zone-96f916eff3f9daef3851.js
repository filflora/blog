webpackJsonp([0x80797961710d],{492:function(a,e){a.exports={data:{markdownRemark:{html:'<h2 id="temporal-dead-zone---js-terminology"><a href="#temporal-dead-zone---js-terminology" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Temporal Dead Zone - JS terminology</h2>\n<p>As of <code>ES6</code> two new block-scoped variable types are introduced, the <code>let</code> and <code>const</code>. These have a so called <code>Temporal Dead Zone</code> (<code>TDZ</code>) where the variable can\'t be accessed (not even with <code>typeof</code>) until execution reaches the declaration.</p>\n<p>What does this mean in an example?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>varLet<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>varConst<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>\n\n<span class="token keyword">let</span> varLet <span class="token operator">=</span> <span class="token string">\'foo\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> varConst <span class="token operator">=</span> <span class="token string">\'bar\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This doesn\'t mean that these variables are not hoisted, they are just in a period between entering scope and being declared where they cannot be accessed. They are in a <code>TDZ</code>.</p>\n<p>Here\'s the proof:</p>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">\'outer value\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// start TDZ for x</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">\'inner value\'</span><span class="token punctuation">;</span> <span class="token comment">// declaration ends TDZ for x</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified">TEMPORAL DEAD ZONE (TDZ) DEMYSTIFIED</a></cite></p>\n</blockquote>\n<h3 id="where-else"><a href="#where-else" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where else?</h3>\n<p>Default function arguments have a TDZ too and they come with <code>ES6</code> too.\nArguments are evaluated left to right, and each argument is in the TDZ until it is assigned:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>a <span class="token operator">=</span> b<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n<span class="token function">foo</span><span class="token punctuation">(</span>undefined<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// throws ReferenceError: b is not defined</span>\n</code></pre>\n      </div>\n<h3 id="does-var-has-a-temporal-dead-zone-too"><a href="#does-var-has-a-temporal-dead-zone-too" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Does <code>var</code> has a Temporal Dead Zone too?</h3>\n<p>Nope. Because the life cycle of var-declared variables are a bit different. </p>\n<blockquote>\n<p>When the scope (its surrounding function) of a var variable is entered, storage space (a binding) is created for it. <strong>The variable is immediately initialized</strong>, by setting it to undefined.</p>\n<p>— <cite><a href="http://exploringjs.com/es6/ch_variables.html#_the-life-cycle-of-var-declared-variables">exploringjs.com</a></cite></p>\n</blockquote>\n<p><code>let</code> and <code>const</code> variables however are remaining uninitialized and  getting or setting an uninitialized variable causes a <code>ReferenceError</code>.</p>\n<h3 id="why-is-there-a-temporal-dead-zone"><a href="#why-is-there-a-temporal-dead-zone" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why is there a Temporal Dead Zone?</h3>\n<p><strong>In short:</strong> because of <code>const</code>. <code>let</code> also has TDZ so that switching between the two doesn’t change behavior. </p>\n<p>The longer answer:</p>\n<blockquote>\n<p>There was significant technical discussion of that topic and TDZs emerged as the best solution. An alternative argument you could make would be to eliminate const.  Is there a reason you aren\'t making that argument?</p>\n<p>— <cite><a href="https://mail.mozilla.org/pipermail/es-discuss/2012-September/024996.html">Performance concern with let/const - Mozilla mail</a></cite></p>\n</blockquote>\n<p>Use TDZ to your advantage and think of it as a way to catch programming errors at an early stage.</p>',timeToRead:2,excerpt:"Temporal Dead Zone - JS terminology As of  ES6  two new block-scoped variable types are introduced, the  let  and  const . These have a so…",frontmatter:{title:"JS terminology - Temporal Dead Zone",cover:"https://unsplash.it/1280/900/?random?temporaldeadzone",date:"03/20/2018",category:"terminology",tags:["terminology","js","es6"],author:"fil"},fields:{slug:"/js-terminology-temporal-dead-zone"}},prev:{excerpt:"The basics Let's cover up in short how can we sort an Array in Vanilla Javascript. Suppose that we have a simple…",frontmatter:{title:"Sorting an array of objects with pure Javascript",cover:"https://picsum.photos/1280/900?image=237",date:"03/22/2018"},fields:{slug:"/sorting-an-array-of-objects-with-pure-javascript"}},next:{excerpt:'WTF JS explanation for "null is not falsy" Premise —   wtfjs.com - null is not falsy Explanation The original…',frontmatter:{title:"WTF JS explanation - null is not falsy",cover:"https://unsplash.it/1280/900/?random?nullisnotfalsy",date:"03/18/2018"},fields:{slug:"/wtf-js-explanation-null-is-not-falsy"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/js-terminology-temporal-dead-zone",total:15,prev:"/sorting-an-array-of-objects-with-pure-javascript",next:"/wtf-js-explanation-null-is-not-falsy"}}}});
//# sourceMappingURL=path---js-terminology-temporal-dead-zone-96f916eff3f9daef3851.js.map