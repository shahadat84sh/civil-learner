import 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from './Course';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    
    useEffect(() =>{
        fetch('https://for-courses.vercel.app/courses')
        .then(res => res.json())
        .then( data => setCourses(data))
    }, []);

    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://coursesxpert.com/wp-content/uploads/2020/12/Civil-Engineering-Course-India.jpg)'}}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="text-center text-neutral-content grid grid-cols-6">
                <div className='col-span-2'>
                <p className='text-bold text-4xl text-yellow-500'>List of All Courses</p>
                {
                    courses.map(course => <p className='text-yellow-400 text-2xl py-2' key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                    
                }
                </div>
                <div className='col-span-4'>
                    {
                        courses.map(course => <Course
                            key={course.id} course={course}
                        ></Course>)
                    }
                </div>
           
                {/* <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div> */}
            </div>
            </div>
        </div>
    );
};

export default Courses;