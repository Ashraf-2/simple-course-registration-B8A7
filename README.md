# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Questions

# 1. Add at least 3 Project features?

Ans: Three Project features of this website:
a. This webpage load data dynamically using web API. and the courses which is selected by user these will be shown at the right side of the webpage in the cart section.
b. User can purchase course and user can't purchase course overall which are more than 20 credit hour. because, all courses have it's own credit hour as per requirements.
c. An user can not purchase a course more than once at a time. when all the courses credit hour will be equibalent of 20 hour , a sweet alart will be shown to the user. and if any user wants to purchase more than 20credit hours course , there will be also shown a sweet alart. that means no one can purchase more than overall 20 credit hours course.



# 2. Discuss how you managed the state in your assignment project?

Ans: I use 5 state in my project.These useState are for courses, selected courses, remaining credit hour for the user, total price of the selected courses which should be paid by the user and overall total credit hour for selected courses. The remaining credit hour state is initially set as 20, because no one can purchase more than 20 credit hour, and total credit hour and total price is initalilly set state as 0 because it will change according to the selection of courses by the user and these will be calculated.
thirdly, the courses and selected courses state are initially set as empty array, because these data will come from the api ,and these data is stored in array of object formet, that's why. That's the way how i manage the state in my assignment project.

## Live Link : (http://ten-shock.surge.sh/)