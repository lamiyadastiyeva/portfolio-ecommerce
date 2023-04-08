import React,{useEffect,useState} from 'react';

const BacktoButton = () => {
const [backbutton, setBackbutton] =useState(false);

useEffect(() =>{
window.addEventListener("scroll",() =>{
if(window.scrollY >100){
setBackbutton(true) 
} else{
setBackbutton(false) 
}
} )
},[])

const scrollUp =() =>{
window.scrollTo({
top:0,
behavior:"smooth"
})
}
return (
<div>
{
backbutton && (
<button 
className='scrolltoUp' onClick={scrollUp}>

<i class="fas fa-arrow-up"></i></button>
)
}
</div>
);
};

export default BacktoButton;