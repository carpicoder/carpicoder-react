import CHcourses from "../data/CHcourses.json";
import courses from "../data/courses.json";

export const searchCHCourse = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(CHcourses);
        }, 500)
    })
}

export const searchCHCourseById = (id) => {
    return new Promise((resolve, reject) => {

        const course = CHcourses.find((el) => el.id === id);

        if (course) {
            resolve(course);
        } else {
            reject({
                error: "No se encontró el curso"
            })
        }

    })
} 

export const searchCourse = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(courses);
        }, 500)
    })
}

export const searchCourseById = (id) => {
    return new Promise((resolve, reject) => {

        const course = courses.find((el) => el.id === id);

        if (course) {
            resolve(course);
        } else {
            reject({
                error: "No se encontró el curso"
            })
        }

    })
} 