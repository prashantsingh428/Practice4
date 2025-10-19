const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((err) => next(err));
  };  

export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (fn) => async (req,res,next) => {   //asyncHandler = “Try–catch wrapper” for async route functions that automatically forwards errors to Express.



// try {
//         await fn(req,res,next)
//     }catch(error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


//It’s a higher-order function called asyncHandler, 
// and it’s used to handle errors in async route 
// functions — so you don’t have to wrap every route 
// in a try...catch.