window.onload = function() {
  let textbox = getBy("input")[0];
  let div = getBy("div")[2];
  let firstColor, searchTerm, firstLink, searchTermLink = "undefined";
  textbox.addEventListener("input", function() {
    downstairs = textbox.value.replace(/\[B\]/g,"<b>");
    let counter = (textbox.value.match(new RegExp('/\[COLOR=]', "gi")) || []).length;
    for(i = 0; i < counter; i++)
    {
      if(downstairs.includes('[COLOR=') && downstairs.includes(']'))
      {
        firstColor = downstairs.split('\[COLOR=')[1].split(']')[0];
        searchTerm = '\[COLOR=' + firstColor + '\]';
      }
      if(searchTerm != 'undefined')
      {
        downstairs = downstairs.replace(searchTerm, '<span style="color:' + firstColor + ';">');
      }
    }
    let counterlink = (textbox.value.match(new RegExp('/\[LINK=]', "gi")) || []).length;
    for(i = 0; i < counterlink; i++)
    {
      if(downstairs.includes('[LINK=') && downstairs.includes(']'))
      {
        firstLink = downstairs.split('\[LINK=')[1].split(']')[0];
        searchTermLink = '\[LINK=' + firstLink + '\]';
      }
      if(searchTermLink != 'undefined')
      {
        downstairs = downstairs.replace(searchTermLink, '<a href="' + firstLink + '">');
      }
    }
    div.innerHTML = downstairs.replace(/\[\/B\]/g,"</b>").replace(/\[U\]/g,"<u>").replace(/\[\/U\]/g,"</u>").replace(/\[S\]/g,"<s>").replace(/\[\/S\]/g,"</s>").replace(/\[\/COLOR\]/g,"</span>").replace(/\[\/LINK\]/g,"</a>");
  });
}