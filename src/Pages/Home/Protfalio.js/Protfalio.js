import React from 'react';
import { Link } from 'react-router-dom';

const Protfalio = () => {
    return (
        <div>
            <div className='bg-gray-200' >
                <div class="card lg:card-side bg-gray-500 shadow-xl mt-10">
                    <figure>
                        <img src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/279916286_1445485715870331_1574230636522700003_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHnZbMmvxz8hAYYXyKh_Z5W45yq-U7raOXjnKr5Tuto5XNITWSgJLvirFCk_XINQA0Jn494xyxtYhKXqH6-HLam&_nc_ohc=ALFXmpRGh6gAX_BVABE&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AT8eKzmXG_94RZWG1LPduQUgVsUwBzJ6xdL2BRIEGVUPpA&oe=62A5ECDD" alt="" height="80" />

                    </figure>
                    <div class="card-body  text-white">
                        <h2 class=" text-3xl text-center">Hello!</h2>
                        <h1 className='text-3xl text-center text-red-400 font-bold'>I Am Front End Developer</h1>
                        <h1 className='text-3xl text-center font-bold'>My Name Is </h1>
                        <h1 className='text-3xl text-center font-bold'>Md. Naiem Islam Redoy</h1>
                        <div class="card-actions px-20">
                            <a className='btn btn-primary' href="https://drive.google.com/file/d/1WAc-AbnFfgKkwLoSezzs2S_yy3BiGUCC/view?usp=sharing">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-64 py-10'>
                <h1 className='text-center text-primary text-3xl font-bold mb-5 mt-10 '>About me</h1>
                <div class="card w-96 bg-base-100 shadow-xl">
                   <div>
                   <div class="card-body">
                       
                        <p>My name is Md. Naiem islam. I'm a Front End Engineer based in Bangladesh ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.</p>
                       <h1 className='text-xl font-bold'> Full Name : Md. Naiem Islam</h1>
                       <h1 className='text-xl font-bold'> Age :20</h1>
                       <h1 className='text-xl font-bold'>Address: Pabna, Bangladesh. </h1>
                       <h1 className='text-xl font-bold'> Phone: +8801704-487171</h1>
                       <h1 className='text-xl font-bold'>Email: nayemislam30964@gmail.com</h1>
                    </div>
                   </div>
                </div>

            </div>
            <div>
                <h1 className='text-center text-primary text-3xl font-bold mb-5 mt-10'>My skills</h1>
               <div className='d-flex'>
               <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="" />
               </div>
               <div>
                   <h1>html</h1>
               </div>
            </div>
        </div>
    );
};
export default Protfalio;