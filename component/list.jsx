import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const List = ( {con,remove }) => {
    const [isclicked, setclick] = React.useState(false);
    const HandleClick = (e) => {
        setclick(!isclicked)
        if (isclicked) return e.target.checked = false;
    }
    return (

        <div className='flex justify-between items-center mx-4 my-4'>
            <div className='flex gap-4'><input className='cursor-pointer' type="Radio" onClick={HandleClick} />
            <p className={`break-all text-wrap font-semibold text-[18px] ${isclicked && 'line-through decoration-gray-300 text-gray-400'}`}>{con}</p>
            </div>
            {isclicked && <DeleteOutlineIcon fontSize='small' className='cursor-pointer' onClick={() => {remove(); setclick(false)}} />}
        </div>

    );
}

export default List;
