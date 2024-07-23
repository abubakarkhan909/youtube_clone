export const Api_Key = 'AIzaSyBpKUDyN1EBuvs5q_wochiM5Whe0wcY66k';

export const value_converter = (value)=>{
  if (value>=1000000) {
    return Math.floor(value/1000000)+ "M";
  }
  else if(value>=1000){
    return Math.floor(value/1000)+ "K";
  }
  else{
    return value;
  }
}