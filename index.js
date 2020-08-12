hexo.extend.helper.register('social9Script', function (options) {
  const { id, content, async, defer } = Object.assign({ id: 's9-sdk', content: '', async: true, defer: true}, options)
  if(content == ""){
    log.info('content field is required');
    return '';
  }
  return `<script id="${id}"  ${async} ${defer} content="${content}" src="//cdn.social9.com/js/socialshare.min.js"></script>`;
})

hexo.extend.tag.register('social9Inline', function (args, content) {
  return social9Inline(content)
}, { ends: true })

hexo.extend.helper.register('social9Inline', function (content) {
  return social9Inline(content)
}, { ends: true })

function social9Inline (options) {
  const { id, classes } = Object.assign({ id: '', classes: 's9-widget-wrapper'}, options)
  return `<div${id?" id=\""+id:''}${classes?" class=\""+classes:''}"></div>`;
}