import React from 'react';


const Stars = ({score}) => {
    
      const reward = () => {
          let stars = ""; 
          for(let i = 0; i < score; i++) { 
          stars += "⭐";
          }
          return stars
      }
console.log(reward())


return (  
    <span>{reward()}</span> 
)

}

export default Stars;