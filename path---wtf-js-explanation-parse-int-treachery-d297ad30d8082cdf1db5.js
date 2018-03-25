webpackJsonp([80294853723513],{526:function(e,a){e.exports={data:{markdownRemark:{html:'<h2 id="wtf-js-explanation-for-parseint-treachery"><a href="#wtf-js-explanation-for-parseint-treachery" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WTF JS explanation for "parseInt treachery"</h2>\n<h3 id="premise"><a href="#premise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Premise</h3>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'06\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>\n<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">\'08\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://wtfjs.com/wtfs/2010-02-12-parseint-treachery">wtfjs.com - parseInt treachery</a></cite></p>\n</blockquote>\n<h3 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h3>\n<p>Because the second argument for radix is missing the <code>parseInt</code> function tries to guess which Base the given number has. Our example starts with <code>0</code> so it will be parsed as an octal number <strong>BUT only in browsers &#x3C; ES5</strong>. As of ES5 only hexadecimal literals can have a prefix (<code>0x</code> or <code>0X</code>).</p>\n<p>If I try to parse an octal number with a formerly supported <code>0o</code> or <code>0O</code> prefix in the current browsers the result will always be <code>0</code>. That\'s because an octal prefix is now not supported and the loop inside of <code>parseInt</code> breaks on the first ignored character (the <code>o</code>) that cannot be interpreted as an integer.</p>\n<p>For further details on how the <code>parseInt</code> works see the <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.2">spec</a> for help.</p>',timeToRead:1,excerpt:'WTF JS explanation for "parseInt treachery" Premise —   wtfjs.com - parseInt treachery Explanation Because the second argument for radix is…',frontmatter:{title:"WTF JS explanation - parseInt treachery",cover:"https://unsplash.it/1280/900/?random?nullisobject",date:"03/17/2018",category:"explanation",tags:["explanation","js","wtf-js","primitives"],author:"fil"},fields:{slug:"/wtf-js-explanation-parse-int-treachery"}},prev:{excerpt:'WTF JS explanation for "maths fun" Premise —   wtfjs.com - Maths fun Explanation Line 1 It\'s not the languages…',frontmatter:{title:"WTF JS explanation - Maths fun",cover:"https://unsplash.it/1280/900/?random?mathsfun",date:"03/17/2018"},fields:{slug:"/wtf-js-explanation-maths-fun"}},next:{excerpt:'WTF JS explanation for "not a number is not a not a number" Premise —   wtfjs.com - not a number is not a not a…',frontmatter:{title:"WTF JS explanation - not a number is not a not a number",cover:"https://unsplash.it/1280/900/?random?notanumber",date:"03/17/2018"},fields:{slug:"/wtf-js-explanation-not-a-number-is-not-a-not-a-number"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/wtf-js-explanation-parse-int-treachery",total:15,prev:"/wtf-js-explanation-maths-fun",next:"/wtf-js-explanation-not-a-number-is-not-a-not-a-number"}}}});
//# sourceMappingURL=path---wtf-js-explanation-parse-int-treachery-d297ad30d8082cdf1db5.js.map