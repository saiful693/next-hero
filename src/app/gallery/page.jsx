import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <h6>This is gallery page</h6>
            <Image src="/images/wolf.jpg" height="1080" width="1080" alt="" />
        </div>
    );
};

export default page;