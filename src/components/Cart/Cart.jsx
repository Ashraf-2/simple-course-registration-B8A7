/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Cart = ({selectedCourse}) => {
    // console.log('inside cart - course came: ',handleSelectCourse )
    // const {course_title} = selectedCourse;
    // console.log("inside cart - ", {course_title});
    // console.log(selectedCourse);
    return (
        <div className="bg-[#FFF] py-2 pl-5 rounded-xl">
            <h1 className="text-[#2F80ED] text-lg mb-4 font-bold">Credit Hour Remaining 7 hr</h1>
            {/* <p className=" border-b-2 mr-28 "></p> */}
            <hr className="border-b-2 mr-24 mb-2" />
            <p className="font-bold text-xl mb-5">Course Name</p>
            <ol className=" ml-5">
                
                    {
                        selectedCourse.map((course) => (
                            <li className="list-decimal  text-[#1c1b1b99]" key={course.id}>{course.course_title}</li>
                        ))
                    }
                
            </ol>
            <hr className="border-b-2 mr-24 my-2" />
            <h4 className="text-base font-medium">Total Credit Hour: </h4>
            <hr className="border-b-2 mr-24 my-2 " />
            <h4 className="text-base font-medium mb-3">Total Price:  USD</h4>
        </div>
    );
};

export default Cart;