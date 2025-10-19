class ApiError extends Error {
    construtor(
        statusCode,
        message= "Something went wrong",
        error= [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.error = this.error;
        this.stack = stack;
        this.success = false;
        
        if(stack ){
            this.stck = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError};