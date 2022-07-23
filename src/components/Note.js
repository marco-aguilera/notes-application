import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
    return <div className='note'>
        <span> Hello! This is our first note! Hurray!</span>
        <div className='note-foorter'>
            <small> 12/12/2012 </small>
            <MdDeleteForever className='delete-icon' size='1.3' />
        </div>
    </div>;
};

export default Note;