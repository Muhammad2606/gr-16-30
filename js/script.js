window.addEventListener('DOMContentLoaded', () =>{

const tabParent = document.querySelector('.tabheader__items'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabcontent = document.querySelectorAll('.tabcontent');


    function hideTabContent (){
      tabcontent.forEach((item) =>{
        item.classList.add('hide');
        item.classList.remove('show');
      });

      tabs.forEach((item) =>{
        item.classList.remove('tabheader__item_active');
      });
    }
    function showTabContent (i = 0){
      tabcontent[i].classList.add('show');
      tabcontent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
  }
    hideTabContent();
    showTabContent();


    tabParent.addEventListener('click', (Event) =>{
      const target = Event.target;

      if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, idx) =>{
          if(target == item){
            hideTabContent();
            showTabContent(idx);
          }
        });
      }
    });





console.log(5);
});
