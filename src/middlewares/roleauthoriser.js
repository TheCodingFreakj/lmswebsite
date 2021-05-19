import { errorMessage, status } from "../helpers/status";
import dbQuery from "../db/dbQuery";

const instructorMiddleware = async (req, res) => {
  const authenticatedname = req.user.user_name;
  const user_status = req.user_status;
  try {
    const createInstructorQuery = `
    SELECT * FROM instructors WHERE user_name = $1 
       
    `;
    let response = await dbQuery.query(createInstructorQuery, [
      req.user.user_name,
    ]);
    if (!response.rows[0] && user_status !== true) {
      errorMessage.error = "This is only accessed by intstrcutirs";
      return res.status(status.error).send(errorMessage);
    }

    req.user = authenticatedname;

    next();
  } catch (error) {}
};
const studentmiddleware = async (req, res) => {
  const authenticatedname = req.user.user_name;
  const user_status = req.user_status;
  try {
    const createstudentQuery = `
      SELECT * FROM instructors WHERE user_name = $1 
         
      `;
    let response = await dbQuery.query(createstudentQuery, [
      req.user.user_name,
    ]);
    if (!response.rows[0] && user_status !== false) {
      errorMessage.error = "This is only accessed by strudents";
      return res.status(status.error).send(errorMessage);
    }

    req.user = authenticatedname;

    next();
  } catch (error) {}
};

export { studentmiddleware, instructorMiddleware };
