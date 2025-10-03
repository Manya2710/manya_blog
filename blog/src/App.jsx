import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PiStudentBold } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";



function App() {

  return (
    <>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">

            <h1 className=' font-bold text-2xl'>Manya Kumar</h1>
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Blog</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Project</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Contact</a>
            </li>

          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>



      <div className="flex max-w-screen flex-col gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <h1 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
          <PiStudentBold />
          <h2>Introduction</h2>
        </h1>
        <p className="flex-1 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt pariatur dolores dolor quisquam sit tenetur esse, asperiores, aliquid veniam enim error itaque tempora, odit doloremque. Perferendis reiciendis voluptatem expedita corporis labore magni aliquid tempore dolorem non repudiandae repellendus necessitatibus sunt rem quaerat earum similique, quidem repellat laboriosam quisquam magnam nesciunt excepturi vel. Fugiat voluptatibus consequuntur quos odio, minus dicta accusantium, reprehenderit excepturi consequatur, porro temporibus placeat ullam sed deserunt accusamus? Ipsum, dolore? Nemo aliquid at alias mollitia nam sint, corporis doloribus magnam cum incidunt dolor aspernatur ea ex tempore unde ab pariatur aperiam impedit temporibus. Amet consectetur distinctio quo fuga, minus sapiente. Ipsa ex ipsam, similique et incidunt ducimus accusantium quaerat harum possimus distinctio corrupti rerum nihil sed aut atque esse, vero at vel? Sed voluptates quam similique beatae nisi cupiditate aliquam non debitis, iusto nesciunt, vitae ratione esse nemo, at iste. Quibusdam quod ducimus dolorum odio atque provident aut repellat ipsam fugit quam impedit, necessitatibus, molestias nobis nemo voluptate consequuntur. Natus eius eaque tempora ipsa alias vitae sunt cum nemo, at corrupti voluptatibus amet minima non fugiat doloremque incidunt magni ea autem ex nobis distinctio dolorum. Commodi laborum molestiae et quibusdam, ab maiores eveniet harum hic ratione. Voluptas, minus.</p>

      </div>






      <section className="py-3 sm:py-2 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">My Blog's</h2>
            <p className="font-serif text-xl dark:text-gray-600">Mettalury</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>

          </div>
        </div>

        <div class="text-right">
          <button type="button" className="px-8 py-3 rounded-lg 
           transform transition duration-300 ease-in-out 
           hover:scale-110 hover:bg-blue-600 cursor-pointer  right-12 relative  font-semibold rounded  dark:bg-blue-800 dark:text-gray-100">All Blog</button>
        </div>


      </section>









      <section className="py-3 sm:py-2 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">My Project</h2>
            <p className="font-serif text-xl dark:text-gray-600">Mettalury</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col cursor-pointer dark:bg-gray-50 transform transition-transform duration-200 ease-in-out 
         active:scale-110 hover:scale-105 rounded-2xl">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                <img alt="" className="rounded-xl object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
              </a>
              <div className="flex flex-col flex-1 p-6 bg">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                  <span className=' font-bold'>June 1, 2020</span>
                </div>
              </div>
            </article>

          </div>
        </div>

        <div class="text-right">
          <button type="button" className="px-8 py-3 rounded-lg 
           transform transition duration-300 ease-in-out 
           hover:scale-110 hover:bg-blue-600 cursor-pointer  right-12 relative  font-semibold rounded  dark:bg-blue-800 dark:text-gray-100">All Project</button>
        </div>


      </section>


      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@business.com</span>
				</p>
			</div>
		</div>
		<form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
			</label>
			<button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
		</form>
	</div>
</section>Play the song. 
     

    </>
  )
}

export default App
