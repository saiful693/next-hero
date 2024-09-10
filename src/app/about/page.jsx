import React from 'react';


// get the time
// const getTime = async () => {
//     const res = await fetch("http://localhost:3000/time", { next: { revalidate: 5 } }); // { cache: 'no-store' }
//     const data = await res.json()
//     return data.currentTime
// }

const page = () => {

    // const currentTime = getTime();
    return (
        <div>
            <h6>About page</h6>
            <h3 className='text-3xl text-red-400 mt-12'>Time:  </h3>
        </div>
    );
};

export default page;