// START CUSTOM REVEAL.JS INTEGRATION
(function() {
	var config = Reveal.getConfig().watermark
  const wmDiv = document.createElement('div')
  wmDiv.classList.add('watermark')
  wmDiv.innerHTML = config.content;
  document.getElementsByClassName('slides')[0].appendChild(wmDiv);

  createSingletonNode(document.getElementsByClassName('slides')[0])

})();



function createSingletonNode( container, tagname, classname, innerHTML ) {
      // Find all nodes matching the description
      var nodes = container.querySelectorAll( '.' + classname );
  
      // Check all matches to find one which is a direct child of
      // the specified container
      for( var i = 0; i < nodes.length; i++ ) {
        var testNode = nodes[i];
        if( testNode.parentNode === container ) {
          return testNode;
        }
      }
  
      // If no node was found, create it now
      var node = document.createElement( tagname );
      node.classList.add( classname );
      if( typeof innerHTML === 'string' ) {
        node.innerHTML = innerHTML;
      }
      container.appendChild( node );
  
      return node;
  
    }