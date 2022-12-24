//这一段是初始化Waline的,visitor: true记得开启
new Waline({
    el:'#waline',
    serverURL: 'https://www.newtea.ga',
    appId: 'DSluAu7SicEtx6G2i1WMRrkF-MdYXbMMI',
    appKey: 'BhYNGsPRy5mmyjNxYmYA1amp',
    avatar:'monsterid',
    recordIP:false,
    requiredFields:['nick'],
    visitor: true,
    uploadImage:false,
    copyright:false,
    //path:"/",
    placeholder:"说出你的想法..."
})
//这一段是加载最近评论的
window.addEventListener('load', function() {
    Waline.Widget.RecentComments({
    el: '#waline-recent',
    serverURL: 'https://www.newtea.ga',
    count: 5
    });
});
