function openevt(evnt,name) {
    var i, tabs,tabcontent;
    tabcontent=document.getElementsByClassName('content');
    for(i=0;i<tabcontent.length;i++)
    {
        tabcontent[i]=tabcontent[i].style.display='none';
    }
    tabs=document.getElementsByClassName('nav_items');
    for(i=0;i<tabs.length;i++)
    {
        tabs[i].className=tabs[i].className.replace("active","");
    }
    document.getElementById(name).style.display='flex';
    evnt.currentTarget.className+=" active";
}  