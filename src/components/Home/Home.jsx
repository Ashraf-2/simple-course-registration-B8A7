/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { BsBook } from 'react-icons/bs';
import Cart from "../Cart/Cart";
import swal from 'sweetalert';
    



const Home = () => {

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remainingCrHr,setRemainingHr] = useState(20);
    const [totalCrHr,setTotalCrHr] = useState(0);
    let BudgetHour = 20;
    

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCourses(data))
    })
    // console.log("courses: ", courses);
    const handleSelectCourse = (course) => {
        console.log(course);
        const isExist = selectedCourse.find((crs) => crs.id === course.id);
        let price = course?.price;    
        let consumedHour = course.credit_hour;   

        if(isExist){
            // return alert("already selected,try another course");
            return swal("Sorry!","You already selected this course", "error");

        }
        else{
            selectedCourse.forEach((item) =>{
                price += item.price;
                // BudgetHour = BudgetHour-item.credit_hour;
                consumedHour = consumedHour+item.credit_hour;
            });
            BudgetHour = BudgetHour-consumedHour;
            console.log("BudgetHour: ",BudgetHour);
            console.log("consumed hour: ",consumedHour);
            if(consumedHour<20){
                setSelectedCourse([...selectedCourse, course]);

                setTotalPrice(price);
                setRemainingHr(BudgetHour);
                setTotalCrHr(consumedHour);
            }
            if(consumedHour === 20)
            {
                setSelectedCourse([...selectedCourse, course]);

                setTotalPrice(price);
                setRemainingHr(BudgetHour);
                setTotalCrHr(consumedHour);

                return swal("Good Luck!","You purchases All the course Successfully!","success");

            }
            else if(consumedHour>20){
                return swal("Sorry!","You can't purchase more than 20 credit hour.","error");
            }
            // else{
                
            // }
        

        }

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
                                            <div className="flex justify-between">
                                                <p> <i className="fa-solid fa-dollar-sign"></i> <span className="text-[#1c1b1b99]"> Price: {course.price}</span></p>
                                                <p className="flex items-center gap-2"><BsBook></BsBook> <span className="text-[#1c1b1b99]"> Credit: {course.credit_hour}</span></p>
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
                    <Cart key={selectedCourse.id} 
                    selectedCourse={selectedCourse}
                    totalPrice={totalPrice}
                    remainingCrHr={remainingCrHr}
                    totalCrHr={totalCrHr}

                    >

                    </Cart>

                </div>
            </div>

        </div>
    );
};

export default Home;