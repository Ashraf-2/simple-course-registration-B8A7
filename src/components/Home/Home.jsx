/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
// import { BsBook } from 'react-icons/fa';
import Cart from "../Cart/Cart";



const Home = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);

    

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCourses(data))
    })
    // console.log("courses: ", courses);
    const handleSelectCourse = (course) => {
        console.log(course);
        setSelectedCourse([...selectedCourse, course]);
    }




    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Course Registration</h1>
            <div className="flex flex-col md:flex-row mt-5 gap-5">
                <div className="w-full md:w-2/3 ">
                    <div className="card-container grid md:grid-cols-3 gap-3">
                        {
                            courses.map((course) => (
                                // <p>{actor.id}</p>
                                <div key={course.id}>
                                    
                                    <div className="bg-base-100 shadow-xl p-2 rounded-xl">
                                        <img className="w-full md:h-36 p-0 m-0" src={course.cover_img} alt={course.course_title} />
                                        <div className="py-2 ">
                                            <h2 className="font-bold text-base pt-2">{course.course_title}</h2>
                                            <p title={course.course_description} className="py-1 text-[#1c1b1b99]">{course.course_description.slice(0,80)}..</p>
                                            {/* <p className="py-1 h-20 overflow-hidden text-[#1c1b1b99]">{course.course_description}</p> */}
                                            <div className="flex flex-row justify-between">
                                                <p> <i className="fa-solid fa-dollar-sign"></i> <span className="text-[#1c1b1b99]"> Price: {course.price}</span></p>
                                                <p><i className="fa-regular fa-book-open"></i> <span className="text-[#1c1b1b99]"> Credit: {course.credit_hour}</span></p>
                                                {/* <p> <BsBook/>Credit: {course.credit_hour}</p> */}
                                            </div>
                                            <div className="text-center w-full pt-4">
                                                <button onClick={() => handleSelectCourse(course)} className="btn btn-primary w-full">Select</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
                
                <div className="w-full md:w-1/3">
                    <Cart key={selectedCourse.id} selectedCourse={selectedCourse}></Cart>

                </div>
            </div>

        </div>
    );
};

export default Home;