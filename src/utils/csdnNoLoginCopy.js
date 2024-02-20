//1.使得点击【登录复制】后可以直接复制，而不用登录------------------------------------------------------------
// 获取所有代码块的元素
var elements = document.getElementsByTagName('pre');

// 遍历所有元素
for (var i = 0; i < elements.length; i++) {
    // 获取当前元素
    var element = elements[i];

    // 替换所有的signin为copyCode，/g代表替换所有的signin
    element.innerHTML = element.innerHTML.replace(/signin/g, 'copyCode');
}

//2.将整个页面设置为可编辑状态，可以自由地增删改--------------------------------------------------------------
//获取整个文档
let doc = document.querySelectorAll('*');

doc.forEach(c => {
    c.contentEditable = true;   //设置文档为可编辑
})

//3.设置整个页面的文本为可选中以及复制-----------------------------------------------------------------------
//取消了在窗口和文档级别上对右键菜单和复制操作的事件监听。通过将它们设置为 null，使得在网页中右键菜单和复制操作不再受到限制。
window.oncontextmenu = document.oncontextmenu = document.oncopy = null;

//首先获取所有 <body> 元素，然后使用 forEach 循环遍历每个 <body> 元素，并将其 outerHTML 属性重新赋值为其当前值。
//这样做可以强制重新渲染页面，以便取消任何可能存在的事件监听或样式更改。
document.querySelectorAll('body').forEach(dom => dom.outerHTML = dom.outerHTML);

//获取页面中所有的 <body> 元素及其所有子元素，并使用 forEach 循环遍历每个元素。
document.querySelectorAll('body, body *').forEach(dom => {
    //遍历每个元素时，这里移除了一系列事件属性，包括选择事件、拖拽事件、右键菜单事件和复制事件。
    //通过调用 removeAttribute() 方法，将这些事件属性移除，以确保不会受到任何事件监听的限制。
    ['onselect', 'onselectstart', 'onselectend', 'ondragstart', 'ondragend', 'oncontextmenu', 'oncopy'].forEach(ev => dom.removeAttribute(ev));

    //将 user-select 样式属性设置为 'auto'，以允许用户在页面中进行文本选择操作。
    //通常情况下，网页开发者会使用 CSS 来控制用户是否可以选择文本，通过将 user-select 设置为 'auto'，使得用户可以自由地选择文本。
    dom.style['user-select'] = 'auto';
});



