
class ApiUrl{
    static BASEURL = "http://127.0.0.1:8000/api";

    static HomepageData = this.BASEURL + "/homepage/data";

    static ServicesData = this.BASEURL + "/services";

    static ChartsData = this.BASEURL + "/charts";

    static ClientReviewsData = this.BASEURL + "/client-reviews";

    static CoursesLimitData = this.BASEURL + "/courses/limit";
    static AllCoursesData = this.BASEURL + "/courses";
    static SingleCourseData = this.BASEURL + "/courses/fetch/";

    static CompanyData = this.BASEURL + "/company-data";
    static CompanyProfile = this.BASEURL + "/company-profile";

    static ProjectLimitData = this.BASEURL + "/project/limit";
    static AllProjectsData = this.BASEURL + "/project/all/";
    static SelectedProject = this.BASEURL + "/project-details/";

    static CustomerMessageInsert = this.BASEURL + "/customer/messages/insert";
}
export default ApiUrl;