import 'react';

const Checkout = () => {
    return (
        <div className='bg-slate-400 flex flex-col justify-center content-center h-full'>
            <h1 className='text-2xl text-center text-green-200'>You are Almost done to Buy this Special course</h1>
            <p className='text-xl text-green-100 text-center'>Just click <strong className='text-green-300 text-2xl'>Buy</strong> button And finish your Buying journey </p>
            <button className='btn bg-lime-500 text-red-300 w-20 justify-center content-center'>Buy</button>
        </div>
    );
};

export default Checkout;