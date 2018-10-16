walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) { return; }


	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bBlockchain\b/g, "Butt");
	v = v.replace(/\bblockchain\b/g, "butt");
	v = v.replace(/\bthe Blockchain\b/g, "my Butt");
	v = v.replace(/\bthe blockchain\b/g, "my butt");
	v = v.replace(/\bThe Blockchain\b/g, "My Butt");
	v = v.replace(/\bThe blockchain\b/g, "My butt");
	
	textNode.nodeValue = v;
}


