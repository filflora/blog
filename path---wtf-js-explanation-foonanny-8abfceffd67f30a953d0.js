webpackJsonp([0xde25f057cafc],{471:function(n,a){n.exports={data:{markdownRemark:{html:'<h2 id="wtf-js-explanation-for-foonanny"><a href="#wtf-js-explanation-for-foonanny" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WTF JS explanation for "Foonanny"</h2>\n<h3 id="premise"><a href="#premise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Premise</h3>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token string">"foo"</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token string">"bar"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"fooNaN"</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://wtfjs.com/wtfs/2010-02-12-foonanny">wtfjs.com - Foonanny</a></cite></p>\n</blockquote>\n<h3 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h3>\n<p>Strings can not be represented as numbers. If you think about it <code>lorem ipsum</code> is just simply not a number. Oh wait, that\'s exactly what we\'ve got. Let\'s break down the steps:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">"lorem ipsum"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n</code></pre>\n      </div>\n<p>We can trigger an explicit <code>toNumber</code> coertion with the <code>+</code> operator:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">+</span><span class="token string">"lorem ipsum"</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n<span class="token operator">+</span> <span class="token string">"lorem ipsum"</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n<span class="token operator">+</span>          <span class="token string">"lorem ipsum"</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n</code></pre>\n      </div>\n<p>You see where I\'m going? :)</p>\n<p>We can put some extra parenthesis to make things explicit:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token string">"foo"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">+</span><span class="token string">"bar"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"fooNaN"</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>The new equation looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token string">"foo"</span> <span class="token operator">+</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"fooNaN"</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>We have a string and a NaN value with an addition operator. According to the spec:</p>\n<blockquote>\n<p>If Type(lprim) is String or Type(rprim) is String, then\nReturn the String that is the result of concatenating ToString(lprim) followed by ToString(rprim)</p>\n<p>— <cite><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.6.1">Spec 11.6.1</a></cite></p>\n</blockquote>\n<p>This means it\'s interpreted like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token string">"foo"</span> <span class="token operator">+</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">"fooNaN"</span> <span class="token comment">// true</span>\n\n<span class="token function">String</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// "NaN"</span>\n</code></pre>\n      </div>\n<p>We can see why this is <code>true</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">"foo"</span> <span class="token operator">+</span> <span class="token string">"NaN"</span> <span class="token operator">===</span> <span class="token string">"fooNaN"</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>That\'s it! :)</p>',timeToRead:1,excerpt:'WTF JS explanation for "Foonanny" Premise —   wtfjs.com - Foonanny Explanation Strings can not be represented as numbers. If you think about…',frontmatter:{title:"WTF JS explanation - Foonanny",cover:"https://unsplash.it/1280/900/?random?foonanny",date:"03/09/2017",category:"explanation",tags:["explanation","js","wtf-js","coertion"],author:"fil"},fields:{slug:"/wtf-js-explanation-foonanny"}},prev:{excerpt:'WTF JS explanation for "maths fun" Premise —   wtfjs.com - Maths fun Explanation Line 1 It\'s not the languages…',frontmatter:{title:"WTF JS explanation - Maths fun",cover:"https://unsplash.it/1280/900/?random?mathsfun",date:"03/17/2017"},fields:{slug:"/wtf-js-explanation-maths-fun"}},next:{excerpt:'WTF JS explanation for "Almost but not quite" Premise —   wtfjs.com - Almost but not quite Explanation…',frontmatter:{title:"WTF JS explanation - Almost but not quite",cover:"https://unsplash.it/1280/900/?random?almost",date:"03/09/2017"},fields:{slug:"/wtf-js-explanation-almost-but-not-quite"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/wtf-js-explanation-foonanny",total:4,prev:"/wtf-js-explanation-maths-fun",next:"/wtf-js-explanation-almost-but-not-quite"}}}});
//# sourceMappingURL=path---wtf-js-explanation-foonanny-8abfceffd67f30a953d0.js.map