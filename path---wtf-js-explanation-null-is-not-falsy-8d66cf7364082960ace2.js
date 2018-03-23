webpackJsonp([0x7f31e9e500e4],{512:function(e,n){e.exports={data:{markdownRemark:{html:'<h2 id="wtf-js-explanation-for-null-is-not-falsy"><a href="#wtf-js-explanation-for-null-is-not-falsy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WTF JS explanation for "null is not falsy"</h2>\n<h3 id="premise"><a href="#premise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Premise</h3>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token string">""</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false, that\'s more like it</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://wtfjs.com/wtfs/2010-02-13-null-is-not-falsy">wtfjs.com - null is not falsy</a></cite></p>\n</blockquote>\n<h3 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h3>\n<p>The original title says that <code>null is not falsy</code>. I\'d rather say <code>null is not false</code> and lets see how these <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">Abstract Equality Comparison</a>s are working according to the Specification.</p>\n<p>The format of the comparison looks like this: <code>x == y</code>.</p>\n<p>Now, lets look how the comparison of the first line is performed:</p>\n<ul>\n<li>Determine that <code>Type(x)</code> and <code>Type(y)</code> are different</li>\n<li>Determine <code>Type(y)</code> is <code>Boolean</code>, return the result of the comparison <code>x == ToNumber(y)</code>. In any case if the comparison contains a <code>Boolean</code> value it is converted to a <code>Number</code>. </li>\n<li>This is what we get so far: <code>[] == 0</code>.</li>\n<li>Now, because of <code>Type(x)</code> is <code>Object</code> and <code>Type(y)</code> is <code>Number</code>, the result of the comparison is <code>ToPrimitive(x) == y</code></li>\n<li>An <code>Array</code> is an <code>Object</code> and the <code>ToPrimitive</code> function calls the objects <code>[[DefaultValue]]</code> internal method with a <code>hint</code> parameter</li>\n<li>The result of <code>ToPrimitive([])</code> is an empty string, and now we have the same comparison as the second line: <code>"" == 0</code></li>\n<li>According to the spec:</li>\n</ul>\n<blockquote>\n<p>If <code>Type(x)</code> is String and <code>Type(y)</code> is Number, return the result of the comparison <code>ToNumber(x) == y</code>.</p>\n<p>— <cite><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">Abstract Equality Comparison -- ecma-international.org</a></cite></p>\n</blockquote>\n<ul>\n<li>The result of <code>ToNumber("")</code> is <code>0</code>, so we arrive at <code>0 == 0</code> and that\'s obviously true ;)</li>\n</ul>\n<h3 id="what-about-that-ominous-null--false"><a href="#what-about-that-ominous-null--false" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What about that ominous <code>null == false</code>?</h3>\n<p>This is the definition of <code>null</code>:</p>\n<blockquote>\n<p>primitive value that represents the <strong>intentional absence of any object value</strong>.</p>\n<p>— <cite><a href="http://es5.github.io/#x4.3.11">es5.github.io</a></cite></p>\n</blockquote>\n<p>According to the <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">spec</a> <code>null</code> is only equal to <code>undefined</code> and nothing else. This is why <code>null</code> is NOT equal to <code>false</code>. This doesn\'t mean that <code>null</code> is not <code>falsy</code>.</p>\n<p>In fact <code>null</code> IS <code>falsy</code>:</p>\n<blockquote>\n<p>A falsy value is a value that translates to false when evaluated in a Boolean context.</p>\n<p>Examples of falsy values in JavaScript: </p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>undefined<span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="http://es5.github.io/#x4.3.11">es5.github.io</a></cite></p>\n</blockquote>\n<h3 id=""><a href="#" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a></h3>',timeToRead:2,excerpt:'WTF JS explanation for "null is not falsy" Premise —   wtfjs.com - null is not falsy Explanation The original title says that  null is not…',frontmatter:{title:"WTF JS explanation - null is not falsy",cover:"https://unsplash.it/1280/900/?random?nullisnotfalsy",date:"03/18/2018",category:"explanation",tags:["explanation","js","wtf-js","primitives"],author:"fil"},fields:{slug:"/wtf-js-explanation-null-is-not-falsy"}},prev:{excerpt:"Temporal Dead Zone - JS terminology As of  ES6  two new block-scoped variable types are introduced, the  let…",frontmatter:{title:"JS terminology - Temporal Dead Zone",cover:"https://unsplash.it/1280/900/?random?temporaldeadzone",date:"03/20/2018"},fields:{slug:"/js-terminology-temporal-dead-zone"}},next:{excerpt:'WTF JS explanation for "null is not an object" Premise —   wtfjs.com - null is not an object Explanation The…',frontmatter:{title:"WTF JS explanation - null is not an object",cover:"https://unsplash.it/1280/900/?random?nullisobject",date:"03/17/2018"},fields:{slug:"/wtf-js-explanation-null-is-not-an-object"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/wtf-js-explanation-null-is-not-falsy",total:12,prev:"/js-terminology-temporal-dead-zone",next:"/wtf-js-explanation-null-is-not-an-object"}}}});
//# sourceMappingURL=path---wtf-js-explanation-null-is-not-falsy-8d66cf7364082960ace2.js.map