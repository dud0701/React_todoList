import React, { Component } from 'react';
import './SettingTemplate.css';

 const SettingTemplate = ({ colors, onChangeFontColor,onChangeFontSize }) => {

     return (
         <div className="setting-template">
             <div className="color-template">
                 {colors.map(
                     ({ id, text }) => {
                         return <div className="color" 
                                     id={id} 
                                     style={{background:text}} 
                                     onClick={(e)=>onChangeFontColor(e, text)}
                                     key={id}>
                                </div>
                     }   
                 )
                }
             </div>
                <div className="font-template">
                    <select onChange={(e)=>onChangeFontSize(e)}>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
             </div>
         </div>




/* {selects.map(
    ({value, label,i}) => {
    return <select
     key={i}
     name={value}
     value={label}
     onChange={()=>onChangeFontSize(label)}
     />
    
})}
 */




     )
 }

export default SettingTemplate;