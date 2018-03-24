webpackJsonp([0xc5ac85758d91],{511:function(e,t){e.exports={data:{markdownRemark:{html:'<h2 id="wtf-js-explanation-for-not-a-number-is-not-a-not-a-number"><a href="#wtf-js-explanation-for-not-a-number-is-not-a-not-a-number" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>WTF JS explanation for "not a number is not a not a number"</h2>\n<h3 id="premise"><a href="#premise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Premise</h3>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>\n</code></pre>\n      </div>\n<p>— <cite><a href="https://wtfjs.com/wtfs/2010-02-12-not-a-number-is-not-a-not-a-number">wtfjs.com - not a number is not a not a number</a></cite></p>\n</blockquote>\n<h3 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h3>\n<p><code>NaN</code> is not like any other primitive value. It\'s a result of failed type conversion instead of throwing an exception. You can\'t do things with it (<code>NaN + 1</code> is still <code>NaN</code>) and can\'t compare it to other values. In fact, this is the only "value" that doesn\'t equal to any other value including itself.</p>\n<p>There\'s even an <code>if</code> in the spec saying:</p>\n<blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code class="language-none">If Type(x) is Number, then\n  a. If x is NaN, return false.\n  b. If y is NaN, return false.</code></pre>\n      </div>\n<p>— <cite><a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.6">The Strict Equality Comparison Algorithm</a></cite></p>\n</blockquote>\n<p>Note, that the Strict Equality Comparison Algorithm differs from the <a href="http://ecma-international.org/ecma-262/5.1/#sec-9.12">SameValue Algorithm</a> used internally. While <code>SameValue(NaN, NaN) === true</code>, it\'s used only internally by the language itself. However as of the new <code>ECMAScript 2015</code> version there is a polyfillable <code>Object.is</code> method which exposes this SameValue algorithm. This is why <code>Object.is(NaN, NaN) === true</code>.</p>\n<p>In case there is a chance of comparing two <code>NaN</code> variables with each other, use the <code>Object.is</code> method. Though this works it\'s somewhat discouraged because <code>NaN</code> usually means that there is an error in the code and you should fix that instead.</p>',timeToRead:1,excerpt:'WTF JS explanation for "not a number is not a not a number" Premise —   wtfjs.com - not a number is not a not a number Explanation NaN  is…',frontmatter:{title:"WTF JS explanation - not a number is not a not a number",cover:"https://unsplash.it/1280/900/?random?notanumber",date:"03/17/2018",category:"explanation",tags:["explanation","js","wtf-js","math"],author:"fil"},fields:{slug:"/wtf-js-explanation-not-a-number-is-not-a-not-a-number"}},prev:{excerpt:'WTF JS explanation for "null is not an object" Premise —   wtfjs.com - null is not an object Explanation The…',frontmatter:{title:"WTF JS explanation - null is not an object",cover:"https://unsplash.it/1280/900/?random?nullisobject",date:"03/17/2018"},fields:{slug:"/wtf-js-explanation-null-is-not-an-object"}},next:{excerpt:'WTF JS explanation for "Almost but not quite" Premise —   wtfjs.com - Almost but not quite Explanation…',frontmatter:{title:"WTF JS explanation - Almost but not quite",cover:"https://unsplash.it/1280/900/?random?almost",date:"03/09/2018"},fields:{slug:"/wtf-js-explanation-almost-but-not-quite"}},authors:{edges:[{node:{id:"fil",name:"Fil Flora",image:"/blog/images/fil-avatar.png",url:"http://nexiuslearning.com/",bio:"Front-end developer @ Nexius Learning"}}]}},pathContext:{slug:"/wtf-js-explanation-not-a-number-is-not-a-not-a-number",total:12,prev:"/wtf-js-explanation-null-is-not-an-object",next:"/wtf-js-explanation-almost-but-not-quite"}}}});
//# sourceMappingURL=path---wtf-js-explanation-not-a-number-is-not-a-not-a-number-370f7f2722c08cec4769.js.map