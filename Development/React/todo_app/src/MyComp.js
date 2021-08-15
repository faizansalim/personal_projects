// FUNCtION COMPONENT



// let MyComp = () => {
//     return(
//         <div>
//             <h1>this is h1</h1>
//             <p>this is a paragraph</p>
//             <ul>
//                 <li>i am coffee</li>
//                 <li>i am tea</li>
//                 <li>i am juice</li>
//             </ul>
//         </div>
//     );
// };

//CLASS BASED COMPONENT

import React from "react";
 class MyComp extends React.Component{

    state = {
        SomeNumber: 999*999,
    }
    render = () => {
        return(
            <div>
                <button onCLick=  { () =>{
                        console.log("Button Pressed");
                    } }>
                        Click Me  </button>
            </div>
        );
    };
}


export default MyComp;
