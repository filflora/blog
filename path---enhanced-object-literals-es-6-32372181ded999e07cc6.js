webpackJsonp([0xfa57dde9e602],{488:function(n,a){n.exports={data:{markdownRemark:{html:'<p>In general <strong>Enhanced object literals</strong> are making our lives easier in a way that we can use a more intuitive syntax when defining our objects. We\'ve got 3 new tricks to define our properties and methods:</p>\n<h2 id="property-shorthand"><a href="#property-shorthand" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Property Shorthand</h2>\n<p>A property shorthand means that instead of this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ES5 syntax</span>\n<span class="token keyword">const</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    foo<span class="token punctuation">:</span> foo<span class="token punctuation">,</span>\n    bar<span class="token punctuation">:</span> bar\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>... we can just use a more simple syntax:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ES6 syntax</span>\n<span class="token keyword">const</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="method-properties"><a href="#method-properties" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Method Properties</h2>\n<p>This is also some kind of shorthand, because instead of this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ES5 syntax</span>\n<span class="token keyword">const</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    foo<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    bar<span class="token punctuation">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>... we can write this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ES6 syntax</span>\n<span class="token keyword">const</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token function">foo</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">bar</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>As of ES6 we can use <code>Generator functions</code> and <code>Async functions</code> too. We can use two ways of defining this kind of methods in an object:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> Obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Generator function with named property</span>\n    fooGenerator<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// and now with the shorthand syntax</span>\n    <span class="token operator">*</span> <span class="token function">barGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// this works with Async functions too</span>\n    fooAsync<span class="token punctuation">:</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">await</span> foo_promise<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token keyword">async</span> <span class="token function">barAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">await</span> bar_promise<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Obj\n</code></pre>\n      </div>\n<h2 id="computed-property-names"><a href="#computed-property-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Computed property names</h2>\n<p>Another big win is the computed property name. Now instead of this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    ret<span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"bar"</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>... we can simply use this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">"bar"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>What a delight! ☕️😄</p>',timeToRead:1,excerpt:"In general  Enhanced object literals  are making our lives easier in a way that we can use a more intuitive syntax when defining our objects…",frontmatter:{title:"Enhanced object literals - ES6",cover:"https://unsplash.it/1280/900/?random?enchanced",date:"03/22/2018",category:"ES6",tags:["ES6","js","objects","syntax"],author:"fil"},fields:{slug:"/enhanced-object-literals-es-6"}},prev:{excerpt:"The basics Let's cover up in short how can we sort an Array in Vanilla Javascript. Suppose that we have a simple…",frontmatter:{title:"Sorting an array of objects with pure Javascript",cover:"https://picsum.photos/1280/900?image=237",date:"03/22/2018"},fields:{slug:"/sorting-an-array-of-objects-with-pure-javascript"}},next:{excerpt:"Temporal Dead Zone - JS terminology As of  ES6  two new block-scoped variable types are introduced, the  let…",frontmatter:{title:"JS terminology - Temporal Dead Zone",cover:"https://unsplash.it/1280/900/?random?temporaldeadzone",date:"03/20/2018"},fields:{slug:"/js-terminology-temporal-dead-zone"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/enhanced-object-literals-es-6",total:14,prev:"/sorting-an-array-of-objects-with-pure-javascript",next:"/js-terminology-temporal-dead-zone"}}}});
//# sourceMappingURL=path---enhanced-object-literals-es-6-32372181ded999e07cc6.js.map