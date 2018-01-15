import React from 'react';

var WeChatPay=(props)=>{
  var _dom=[];
  for(var item in props.info){
      _dom.push(props.info[item])
  }

  return (
      <div style={{color:"#fff"}}>
          {_dom.map(function(obj,key){
              return(<span key={key}>{obj.id}</span>)
          })}
      </div>
  )
}
export default WeChatPay;