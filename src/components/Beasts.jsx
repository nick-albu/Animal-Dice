import './Beasts.scss';
import React, { useEffect } from 'react';


function Beasts ({ filteredBeasts }) {

    useEffect(()=>{
        console.log(filteredBeasts)
    },[filteredBeasts])
    

    function handleExpand(containerID) {
        const element = document.getElementById(containerID);
        if (element.classList[0] === "beasts__actionContainer--closed") {
          element.classList.remove("beasts__actionContainer--closed");
          element.classList.add("beasts__actionContainer");
        } else {
          element.classList.remove("beasts__actionContainer");
          element.classList.add("beasts__actionContainer--closed");
        }
      }

    return (
        <>
            <div className='beasts'>
                {filteredBeasts.map((beast, i) => {
                    const id = beast.index
                    return (
                            <div key={i}>
                                <button type="button" className="gallery__filterCategoryButton"
                                    onClick={() => {
                                        handleExpand(id);
                                    }}>{beast.index}</button>
                                <div id={id} className='beasts__actionContainer--closed'>
                                    {beast.actions.map((action, i)=>{
                                        return(
                                            <div key={i} className='beasts__action'>
                                                <p className='beasts__actionName'>{action.name}</p>
                                                <span>+</span>
                                                <span>/</span>
                                                <span>-</span> 
                                                <p className='beasts__actionCount'>0</p>
                                            </div>
                                        )
                                    })}
                                    <button className='beasts__submit'>Roll</button>
                                </div>          
                            </div>    
                    )
                })}
            </div>
        </>
    )
}

export default Beasts;
