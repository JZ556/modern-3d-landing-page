import React from 'react';
import { pricing } from '../constants';
import Button from './Button';
import { check } from '../assets';

const PricingList = () => {
    return (
        <div className='flex gap-[1rem] max-lg:flex-wrap justify-between [&>div:nth-child(1)>h4]:text-color-2 [&>div:nth-child(2)>h4]:text-color-1 [&>div:nth-child(3)>h4]:text-color-3'>
            {pricing.map((item) => (
                <div key='item.id' className='w-[30rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:auto even:py-14 odd:py-8 odd:my-4' >
                    <h4 className='h4 mb-4'>{item.title}</h4>
                    <p className='body-2 min-h-[4rem] mb-3 txt-n-1/50'>{item.description}</p>
                    <div className='flex items-center h-[5.5rem] mb-6'>
                        {item.price && (
                            <>
                                <div className='h3'>$</div>
                                <div className='text-[5.5rem] font-bold leading-none'>{item.price}</div>
                            </>
                        )}
                    </div>

                    <Button className='w-full mb-6' href={item.price ? '/pricing' : 'mailto:22065684@students.latrobe.edu.au'} >
                        {item.price ? 'Get Started' : 'Contact Us'}
                    </Button>

                    <ul>
                        {item.features.map((item, index) => (
                            <li key={index} className='flex items-start py-5 border-t border-n-6 '>
                                <img src={check} width={24} height={24} alt="check" />
                                <p className='body-2 ml-4'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default PricingList