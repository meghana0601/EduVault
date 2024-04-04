import React from "react";

class StudentInformation extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h2>DEPARTMENT OF COMPUTER ENGINEERING</h2>
        <h2>STUDENT INFORMATION FORM</h2>

        <form>
          <label>
            SEM:
            <input type="text" name="sem" />
          </label>
          <span style={{ margin: "0 10px" }}></span>
          <label>
            CLASS:
            <input type="text" name="class" />
          </label>
          <span style={{ margin: "0 10px" }}></span>
          <label>
            UID NO:
            <input type="text" name="uid" maxLength='10'/>
          </label>
          <br /> <br />
          <label>
            Name of the Student:
            <input type="text" name="studentName" />
            <span style={{ margin: "0 10px" }}></span>
            Photograph:
            <input type="file" accept=".pdf,.jpg,.jpeg" />
          </label>
          <br />
          <br />
          <label>
            Branch:
            <input type="text" name="branch" />
          </label>
          <br />
          <br />
          <label>
            Date of Birth:
            <input type="text" name="dob" />
            <span style={{ margin: "0 10px" }}></span>
            Blood Group:
            <input type="text" name="bloodGroup" />
          </label>
          <br />
          <br />
          <label>
            Temporary Address:
            <input type="text" name="tempAddress" />
          </label>
          <br />
          <br />
          <label>
            Permanent Address:
            <input type="text" name="permAddress" />
          </label>
          <br />
          <br />
          <label>
            Phone no of Father:
            <input type="tel" name="fatherPhone" maxLength='10'/>
            <span style={{ margin: "0 10px" }}></span>
            Mother:
            <input type="tel" name="motherPhone" maxLength='10'/>
            <span style={{ margin: "0 10px" }}></span>
            Student:
            <input type="tel" name="studentPhone" maxLength='10' />
          </label>
          <br />
          <br />
          <label>
            Father's Occupation:
            <input type="text" name="fatherOccupation" />
          </label>
          <br />
          <br />
          <label>
            Mother's Occupation:
            <input type="text" name="motherOccupation" />
          </label>
          <br />
          <br />
          <label>
            Hobbies:
            <input type="text" name="hobbies" />
          </label>
          <br />
          <br />
          <label>
            Strength and Weaknesses:
            <input type="text" name="strengthAndWeaknesses" />
          </label>
          <br />
          <br />
          <label>Result: Final Mark (with percentage):</label>
          <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
            <thead>
              <tr>
                <th></th>
                <th>SEM I</th>
                <th>SEM II</th>
                <th>SEM III</th>
                <th>SEM IV</th>
                <th>SEM V</th>
                <th>SEM VI</th>
                <th>SEM VII</th>
                <th>SEM VIII</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CGPA</td>
                <td>
                  <input type="text" name="sem1CGPA"/>
                </td>
                <td>
                  <input type="text" name="sem2CGPA" />
                </td>
                <td>
                  <input type="text" name="sem3CGPA" />
                </td>
                <td>
                  <input type="text" name="sem4CGPA"/>
                </td>
                <td>
                  <input type="text" name="sem5CGPA" />
                </td>
                <td>
                  <input type="text" name="sem6CGPA" />
                </td>
                <td>
                  <input type="text" name="sem7CGPA" />
                </td>
                <td>
                  <input type="text" name="sem8CGPA"/>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <div>
            <label>KT information: Write name of subject(s) only</label>
            <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>SEM I</th>
                  <th>SEM II</th>
                  <th>SEM III</th>
                  <th>SEM IV</th>
                  <th>SEM V</th>
                  <th>SEM VI</th>
                  <th>SEM VII</th>
                  <th>SEM VIII</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Attempt</td>
                  <td>
                    <input type="text" name="sem1" />
                  </td>
                  <td>
                    <input type="text" name="sem2" />
                  </td>
                  <td>
                    <input type="text" name="sem3" />
                  </td>
                  <td>
                    <input type="text" name="sem4" />
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7" />
                  </td>
                  <td>
                    <input type="text" name="sem8" />
                  </td>
                </tr>
                <tr>
                  <td>Second Attempt</td>
                  <td>
                    <input type="text" name="sem1" />
                  </td>
                  <td>
                    <input type="text" name="sem2" />
                  </td>
                  <td>
                    <input type="text" name="sem3" />
                  </td>
                  <td>
                    <input type="text" name="sem4" />
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7" />
                  </td>
                  <td>
                    <input type="text" name="sem8" />
                  </td>
                </tr>
                <tr>
                  <td>Third Attempt</td>
                  <td>
                    <input type="text" name="sem1" />
                  </td>
                  <td>
                    <input type="text" name="sem2" />
                  </td>
                  <td>
                    <input type="text" name="sem3" />
                  </td>
                  <td>
                    <input type="text" name="" />
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7" />
                  </td>
                  <td>
                    <input type="text" name="sem8" />
                  </td>
                </tr>
                <tr>
                  <td>Fourth Attempt</td>
                  <td>
                    <input type="text" name="sem1" />
                  </td>
                  <td>
                    <input type="text" name="sem2" />
                  </td>
                  <td>
                    <input type="text" name="sem3" />
                  </td>
                  <td>
                    <input type="text" name="sem4" />
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7" />
                  </td>
                  <td>
                    <input type="text" name="sem8" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <br />
          <div>
            <label>Defaulter’s subject wise/total attendance details:</label>
            <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th></th>
                  <th>SEM I</th>
                  <th>SEM II</th>
                  <th>SEM III</th>
                  <th>SEM IV</th>
                  <th>SEM V</th>
                  <th>SEM VI</th>
                  <th>SEM VII</th>
                  <th>SEM VIII</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Attendance After First Defaulters</td>
                  <td>
                    <input type="text" name="sem1"/>
                  </td>
                  <td>
                    <input type="text" name="sem"/>
                  </td>
                  <td>
                    <input type="text" name="sem" />
                  </td>
                  <td>
                    <input type="text" name="sem"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7"/>
                  </td>
                  <td>
                    <input type="text" name="sem8"  />
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Second Defaulters</td>
                  <td>
                    <input type="text" name="sem1"/>
                  </td>
                  <td>
                    <input type="text" name="sem2"/>
                  </td>
                  <td>
                    <input type="text" name="sem3"/>
                  </td>
                  <td>
                    <input type="text" name="sem4"/>
                  </td>
                  <td>
                    <input type="text" name="sem5"/>
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7" />
                  </td>
                  <td>
                    <input type="text" name="sem8"/>
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Third List</td>
                  <td>
                    <input type="text" name="sem1"  />
                  </td>
                  <td>
                    <input type="text" name="sem2"  />
                  </td>
                  <td>
                    <input type="text" name="sem3"  />
                  </td>
                  <td>
                    <input type="text" name="sem4" />
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7" />
                  </td>
                  <td>
                    <input type="text" name="sem8" />
                  </td>
                </tr>
                <tr>
                  <td>Attendance After Final List</td>
                  <td>
                    <input type="text" name="sem1"/>
                  </td>
                  <td>
                    <input type="text" name="sem2"/>
                  </td>
                  <td>
                    <input type="text" name="sem3" />
                  </td>
                  <td>
                    <input type="text" name="sem4"/>
                  </td>
                  <td>
                    <input type="text" name="sem5" />
                  </td>
                  <td>
                    <input type="text" name="sem6" />
                  </td>
                  <td>
                    <input type="text" name="sem7"  />
                  </td>
                  <td>
                    <input type="text" name="sem8" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div>
            <label>Area of interest:</label>
            <input type="text" name="AreaOfInterest" />
            <br />
            <br />
            <label>Goals/Future Plans (After BE):</label>
            <input type="text" name="goalsFuturePlans" />
          </div>
          <br />
          <div>
            <label>Achievements:</label>
            <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Award</th>
                  <th>College/State/National/International</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="date" name="date" />
                  </td>
                  <td>
                    <input type="text" name="award" />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="collegeStateNationalInternational"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />

            <label>Any other:</label>
            <input type="text" name="anyOther" />
            <br />
            <br />

            <label>Signature of student</label>
            <input type="file" accept=".pdf,.jpg,.jpeg" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default StudentInformation;
