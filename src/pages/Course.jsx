import 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        <div>
            {
                <>
                    <h1 className='text-2xl text-orange-200 text-start py-3'>{course.name}</h1>
                     <h1 className='text-xl text-orange-100 text-start pb-5'>{course.Detail} </h1>
                     <Link to='/checkout'><button type='submit' className='btn bg-slate-200 text-orange-300 hover:bg-yellow-300 hover:text-white hover:ring-1 ring-offset-2'>Buy Plan</button></Link>
                     
                </>
                
            }
           
        </div>
    );
};

export default Course;