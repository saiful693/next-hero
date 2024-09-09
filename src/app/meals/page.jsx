import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
    keywords: ["about", "about page"]
};

const MealsPage = () => {
    return (
        <div className={`${headland.className} p-12`}>
            <h1 className='text-3xl font-semibold text-center'>Choose Your Meals</h1>
            <p className={styles.font_tomato} >Choose meals of your choice by searching....</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;