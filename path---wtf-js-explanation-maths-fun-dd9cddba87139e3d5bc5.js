webpackJsonp([68266428534958],{506:function(e,n){e.exports={data:{markdownRemark:{html:'<h2 id="wtf-js-explanation-for-maths-fun"><a href="#wtf-js-explanation-for-maths-fun" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WTF JS explanation for "maths fun"</h2>\n<h3 id="premise"><a href="#premise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Premise</h3>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">Clearly JavaScript is not the most beautiful<span class="token punctuation">,</span> or intuitive<span class="token punctuation">,</span> language <span class="token keyword">for</span> maths<span class="token punctuation">.</span>\n\n<span class="token keyword">typeof</span> <span class="token number">NaN</span> <span class="token operator">===</span> <span class="token string">\'number\'</span> <span class="token comment">// true</span>\n<span class="token number">Infinity</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">0</span>        <span class="token comment">// true</span>\n<span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span>       <span class="token comment">// false</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://wtfjs.com/wtfs/2010-02-12-maths-fun">wtfjs.com - Maths fun</a></cite></p>\n</blockquote>\n<h3 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h3>\n<h4 id="line-1"><a href="#line-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Line 1</h4>\n<p>It\'s not the languages fault that these lines are true. JavaScript uses the <em>IEEE 754 technical standard</em> for floating-point computation. This was established in 1985 to address many problems found in the diverse floating point implementations that made them difficult to use reliably and portably. Even many hardwares are using this standard.</p>\n<p>Let\'s look at the first example. It says that the type of <code>NaN</code> (Not a Number) is <code>number</code>. As this might seem controversial it\'s also understandable. If you explicitly want to convert a variable to a <code>number</code> what type of output are you expecting if the variable has a <code>string</code> in it? </p>\n<p>For example: <code>var foo = "bar"; var fooToNumber = parseInt(foo);</code>) </p>\n<p>Well, I\'d expect a number of course. However a string can not be represented with a number so we need a <code>non-finite quantity</code> that represents an unrepresentable value. This is what <code>NaN</code> stands for. Similarly <code>Infinity</code> is also such a value. This leads us to the next line...</p>\n<h4 id="line-2"><a href="#line-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Line 2</h4>\n<p>From a mathematical perspective this line is a bit of a nonsense. If <code>1 / 0 === Infinity</code> then <code>Infinity * 0 === 1</code> should also be true but this is not the case. However let\'s see an explanation about this:</p>\n<blockquote>\n<p>Now many people like scientists and engineers do not want to be bothered with writing trap routines. So Kahan, the inventor of IEEE-754, decided that every operation should > also return a sensible default value if no trap routines exist.</p>\n<p>They are</p>\n<ul>\n<li>NaN for illegal values</li>\n<li>signed infinities for Overflow</li>\n<li>signed zeroes for Underflow</li>\n<li>NaN for indeterminate results (0/0) and infinities for (x/0 x != 0)</li>\n<li>normal operation result for Inexact</li>\n</ul>\n<p>— <cite><a href="https://stackoverflow.com/questions/14682005/why-does-division-by-zero-in-ieee754-standard-results-in-infinite-value">Thorsten S. - Stackoverflow</a></cite></p>\n</blockquote>\n<h4 id="line-3"><a href="#line-3" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Line 3</h4>\n<p>Again, this is not a JavaScript specific bug. This is true for most programming languages. Computers are working in Base 2 (binary) while the decimal representation is Base 10. When we try to write a decimal number in binary we use the format of a whole number times a power of two. Rational numbers (such as <code>0.1</code>, which is <code>1/10</code>) whose denominator is not a power of two cannot be exactly represented.</p>\n<p>That\'s why: <code>0.1 + 0.2; // 0.300000004</code></p>\n<p>This approximation error value is below the <code>Number.EPSILON</code> value.</p>\n<blockquote>\n<p>The <code>Number.EPSILON</code> property represents the difference between 1 and the smallest floating point number greater than 1.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">0.2</span> <span class="token operator">-</span> <span class="token number">0.3</span> <span class="token operator">+</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// expected output: 2.7755575615628914e-17</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result <span class="token operator">&lt;</span> Number<span class="token punctuation">.</span>EPSILON<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// expected output: true</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON">Number.EPSILON</a></cite></p>\n</blockquote>',timeToRead:3,excerpt:'WTF JS explanation for "maths fun" Premise —   wtfjs.com - Maths fun Explanation Line 1 It\'s not the languages fault that these lines are…',frontmatter:{title:"WTF JS explanation - Maths fun",cover:"https://unsplash.it/1280/900/?random?mathsfun",date:"03/17/2018",category:"explanation",tags:["explanation","js","wtf-js","math"],author:"fil"},fields:{slug:"/wtf-js-explanation-maths-fun"}},prev:{excerpt:'WTF JS explanation for "null is not an object" Premise —   wtfjs.com - null is not an object Explanation The…',frontmatter:{title:"WTF JS explanation - null is not an object",cover:"https://unsplash.it/1280/900/?random?nullisobject",date:"03/17/2018"},fields:{slug:"/wtf-js-explanation-null-is-not-an-object"}},next:{excerpt:'WTF JS explanation for "Almost but not quite" Premise —   wtfjs.com - Almost but not quite Explanation…',frontmatter:{title:"WTF JS explanation - Almost but not quite",cover:"https://unsplash.it/1280/900/?random?almost",date:"03/09/2018"},fields:{slug:"/wtf-js-explanation-almost-but-not-quite"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/wtf-js-explanation-maths-fun",total:11,prev:"/wtf-js-explanation-null-is-not-an-object",next:"/wtf-js-explanation-almost-but-not-quite"}}}});
//# sourceMappingURL=path---wtf-js-explanation-maths-fun-dd9cddba87139e3d5bc5.js.map