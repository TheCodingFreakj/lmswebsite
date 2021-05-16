const successMessage = { status: "success" };
const errorMessage = { status: "error" };

//this is an object status this is properties as http codes
const status = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204,
};

const trip_statuses = {
  active: 1.0,
  cancelled: 2.0,
};
export { successMessage, errorMessage, status, trip_statuses };


//helper function
//status codes
//route requies authentication to access 
      //once user is logged each subsequent request will include the JWT
//protected routes
//routes for student access
//routes for instructor access


/**********generating the token ******** */


// The first function jwt.sign() will generate a JWT token,
//  assign it to a user object, 
//  and then return that JWT token so we can pass it 
//  where ever we may need. 
//  It can be either asynchronous or synchronous depending
//   if a callback is supplied. 
//   The payload parameter will be the user object in our case,
//    the secretkey is made up by you, and it can be anything.
//     The callback parameter is where we handle sending our token, 
//     and the options parameter
//  will be where can set an expiration time among other things.


/************Verify the token*********** */

// jwt.verify() will verify the users token when a protected route is accessed.
//  It takes in the token as one parameter, 
//  the secret key that you defined in the jwt.sign() function, 
//  and then you have the options and callback parameters. 
// The callback will be where we can access and send protected data.