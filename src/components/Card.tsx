import {FC,ReactNode,ReactChild, useState}  from 'react'

export enum CardVariant {
   outlined='outlined',
   primary='primary'
}

interface CardProps {
   width?: string;
   height?:string;
   variant:CardVariant;
   children?: ReactNode | ReactChild;
   onClick:(num:number)=>void;
}

const Card: FC<CardProps> = ({width, height,children, variant,onClick}) => {
   const [first] = useState(0)
  return (
   <div style={{
      width,
      height,
      border: variant ===CardVariant.outlined ?'1px solid gray':'none',
      background:variant===CardVariant.primary?  'lightgray' : ''
      }}
      onClick={()=>onClick(first)}>
      {children}
   </div>
  )
}

export default Card