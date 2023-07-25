import 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const categories = useLoaderData()
    const category = categories.data;
    const {name, Detail, img} = category;
    console.log(name);
    return (
        <div >
            {
                <div className='bg-slate-600 ps-8'>
                    <h1 className='text-2xl mb-3 text-blue-300 '>{name}</h1>
                    <img src={img} className='rounded-lg  w-96 h-96 justify-center content-center' alt="" />
                    <p className='pt-3  text-xl text-blue-300'>{Detail}</p>
                    <Link to='/checkout'><button className='btn rounded-2xl bg-red-300 text-green-200'>Buy Plan</button></Link>
                </div>

            }
        </div>
    );
};

export default Category;