import { useEffect, useState } from "react";

const Home = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCourses(data))
    })
    // console.log("courses: ", courses);
    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Course Registration</h1>
            <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-2/3 bg-gray-300">
                    <h1>courses</h1>
                    <div className="card-container grid md:grid-cols-3 gap-5">
                        {
                            courses.map((course) => (
                                // <p>{actor.id}</p>
                                <div key={course.id}>
                                    
                                    <div className="card card-compact bg-base-100 shadow-xl">
                                        <img className="md:h-36" src={course.cover_img} alt={course.course_title} />
                                        <div className="card-body">
                                            <h2 className="font-bold text-base">{course.course_title}</h2>
                                            <p>{course.course_description.slice(0,80)}..</p>
                                            <div className="text-center w-full">
                                                <button className="btn btn-primary w-full">Select</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>







                            ))
                        }

                    </div>
                </div>
                <div className="w-full md:w-1/3 cart-section bg-gray-200 w-1/3">
                    <h1>carts</h1>

                </div>
            </div>

        </div>
    );
};

export default Home;