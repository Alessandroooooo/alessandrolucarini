document.getElementById('publications').style.display='none';
document.getElementById('videos').style.display='none';
document.getElementById('posters').style.display='none';

const clickity=(prop)=> {
    document.getElementById('publications').style.display='none';
document.getElementById('videos').style.display='none';
document.getElementById('posters').style.display='none';
document.getElementById(prop).style.display='block'; 

var elems = document.querySelectorAll('.main-carousel');
    for (var i=0, len=elems.length; i< len; i++) {
    var elem=elems[i];
    new Flickity (elem, {
        cellAlign: 'left',
        contain:true,
        freeScroll:true,
        pageDots: false
    });     
    }
    
}