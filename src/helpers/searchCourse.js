import CHcourses from "../data/CHcourses.json";

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