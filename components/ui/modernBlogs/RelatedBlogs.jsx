import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const RelatedBlogs = ({blogs}) => {
  return (
    <div className="mt-10">
        <div className="flex justify-center items-center w-full mb-5">
           <span  className='text-lg font-bold text-primary'>ذات صلة</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-4">
             
        {
                    blogs?.slice(0 , 3).map((item) => {
                        return (
                            <div className={cardStyle} key={item?.id}>
                            <div className='w-[100%] h-[220px]'>
                            <Image
                                src={item?.img} 
                                alt="feat"
                                width={400} // Specify a width
                                height={220} // Specify a height matching your design
                                quality={100} 
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                className="rounded"
                                priority
                            />
                            </div>
                            <div className='p-4'>
                            <div className="py-4">
                            <h2 className=" text-[#2C2C2E] font-semibold mb-2">{item?.title} </h2>
                            <div>
                                <p className="text-[#69696A] text-[12px]"> {item?.details?.slice(0 , 70)}</p>
                                </div> 
                            </div>
                            <div>
                            <Link className="py-1 inline-block rounded px-6 bg-primary text-white" href={`/pressReleases/${item.id}`}>قراءه المدونة</Link>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
           
            
          
        </div>
      
    </div>
   
  )
}
const cardStyle = "h-auto bg-white rounded shadow-lg border-1 border-gray-600 flex flex-col items-start mb-5";

export default RelatedBlogs