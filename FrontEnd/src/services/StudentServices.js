import axios from 'axios'

const student_api= "http://localhost:8081/api/allstudent";
// let searchId;
// let searchName;
// const find_studentId_api = "http://localhost:8081/api/student/" + searchId;
// const find_studentName_api = "http://localhost:8081/api/student/" + searchName;
// const remove_api = "http://localhost:8081/api/allstudent" + searchId;
// const update_info = "http://localhost:8081/api/student/" + searchId;
class StudentServices {
    getStudents(){
        //axios is a promise meaning its async therefore it will take some time to get the data
        return axios.get(student_api);
    }

    // findStudent(){
    //     return axios.get(find_studentId_api || find_studentName_api);
    // }

    // removeStudent()
    // {
    //     return axios.get(remove_api);
    // }

    // updateStudentInfo()
    // {
    //     return axios.get(update_info);
    // }
}
//this is a creating an object/instance of a class
export default new StudentServices();
