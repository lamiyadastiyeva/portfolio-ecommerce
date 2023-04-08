import React from 'react';
import { useState } from 'react';
import img1 from '../../assets/img/load.background.jpg';
import img2 from '../../assets/img/dark.background2.jpg';
import img3 from '../../assets/img/dark.background1.jpg';
import img4 from '../../assets/img/corner2.jpg';
import img5 from '../../assets/img/office6.jpg';
import img6 from '../../assets/img/office3.jpg';
import img7 from '../../assets/img/wardrobe1.jpg';
import img8 from '../../assets/img/wardrobe2.jpg';
import img9 from '../../assets/img/working1.jpg';
import img10 from '../../assets/img/working2.jpg';
import img11 from '../../assets/img/corner5.jpg';
import img12 from '../../assets/img/corner3.jpg';
import img13 from '../../assets/img/working3.jpg';
import img14 from '../../assets/img/office5.jpg';
import img15 from '../../assets/img/wardrobe3.jpg';






const ShopImage = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  /*let list = document.querySelectorAll('.list');
  let itemBox = document.querySelectorAll('.itemBox');

  for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
      for(let j = 0; j<list.length; j++){
        list[j].classList.remove('active');
      }
      this.classList.add('active');

      let dataFilter = this.getAttribute('data-filter');

      for(let k = 0; k<itemBox.length; k++){
        itemBox[k].classList.remove('active');
        itemBox[k].classList.add('hide');

        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
          itemBox[k].classList.remove('hide');
          itemBox[k].classList.add('active');
        }
      }
    })
  }*/

  return (
    <div>
     <section className='shop-image'>
       <ul>
         <li className={toggleState === 1 ? "list active" : "list"} data-filter="all" onClick={() => toggleTab(1)}>All</li>
         <li className={toggleState === 2 ? "list active" : "list"} data-filter="house sofa" onClick={() => toggleTab(2)}>House Sofa</li>
         <li className={toggleState === 3 ? "list active" : "list"} data-filter="working table" onClick={() => toggleTab(3)}>Working Table</li>
         <li className={toggleState === 4 ? "list active" : "list"} data-filter="corner table" onClick={() => toggleTab(4)}>Corner Table</li>
         <li className={toggleState === 5 ? "list active" : "list"} data-filter="office chair" onClick={() => toggleTab(5)}>Office Chair</li>
         <li className={toggleState === 6 ? "list active" : "list"} data-filter="new wardrope" onClick={() => toggleTab(6)}>New Wardrope</li>
       </ul>
       <div className="product">
         <div className={toggleState === 2 ? "itemBox active-content" : "itemBox"} data-item="house sofa"><img src={img1} alt="" /></div>
         <div className={toggleState === 2 ? "itemBox active-content" : "itemBox"} data-item="house sofa"><img src={img2} alt="" /></div>
         <div className={toggleState === 2 ? "itemBox active-content" : "itemBox"} data-item="house sofa"><img src={img3} alt="" /></div>
         <div className={toggleState === 4 ? "itemBox active-content" : "itemBox"} data-item="corner table"><img src={img4} alt="" /></div>
         <div className={toggleState === 5 ? "itemBox active-content" : "itemBox"} data-item="office chair"><img src={img5} alt="" /></div>
         <div className={toggleState === 5 ? "itemBox active-content" : "itemBox"} data-item="office chair"><img src={img6} alt="" /></div>
         <div className={toggleState === 6 ? "itemBox active-content" : "itemBox"} data-item="new wardrope"><img src={img7} alt="" /></div>
         <div className={toggleState === 6 ? "itemBox active-content" : "itemBox"} data-item="new wardrope"><img src={img8} alt="" /></div>
         <div className={toggleState === 3 ? "itemBox active-content" : "itemBox"} data-item="working table"><img src={img9} alt="" /></div>
         <div className={toggleState === 3 ? "itemBox active-content" : "itemBox"} data-item="working table"><img src={img10} alt="" /></div>
         <div className={toggleState === 4 ? "itemBox active-content" : "itemBox"} data-item="corner table"><img src={img11} alt="" /></div>
         <div className={toggleState === 4 ? "itemBox active-content" : "itemBox"} data-item="corner table"><img src={img12} alt="" /></div>
         <div className={toggleState === 3 ? "itemBox active-content" : "itemBox"} data-item="working table"><img src={img13} alt="" /></div>
         <div className={toggleState === 5 ? "itemBox active-content" : "itemBox"} data-item="office chair"><img src={img14} alt="" /></div>
         <div className={toggleState === 6 ? "itemBox active-content" : "itemBox"} data-item="new wardrope"><img src={img15} alt="" /></div>

         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="house sofa"><img src={img1} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="house sofa"><img src={img2} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="house sofa"><img src={img3} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="corner table"><img src={img4} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="office chair"><img src={img5} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="office chair"><img src={img6} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="new wardrope"><img src={img7} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="new wardrope"><img src={img8} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="working table"><img src={img9} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="working table"><img src={img10} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="corner table"><img src={img11} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="corner table"><img src={img12} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="working table"><img src={img13} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="office chair"><img src={img14} alt="" /></div>
         <div className={toggleState === 1 ? "itemBox active-content" : "itemBox"} data-item="new wardrope"><img src={img15} alt="" /></div>

       </div>
     </section>
    </div>
  )
}

export default ShopImage