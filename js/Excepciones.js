"use strict";

//Excepciones


export class BaseException extends Error{
    constructor(message = "",fileName,lineNumber) {
        super(message,fileName,lineNumber);
        this.name = 'BaseException';
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, BaseException);
        }
    }
}

export class InvalidAccessConstructorException extends BaseException{
    constructor(fileName,lineNumber) {
        super("Constructor can't be called as a function",fileName,lineNumber);
        this.name = 'InvalidAccessConstructorException';
    }
}

export class EmptyValueException extends BaseException{
    constructor(param,fileName,lineNumber) {
        super("Error: The parameter " + param + "can't be empty.",fileName,
            lineNumber);
        this.param = param;
        this.name = "EmptyValueException";
    }
}

export class InvalidValueException extends BaseException{
    constructor(param,value,fileName,lineNumber) {
        super(`Error: the parameter ${param} has an invalid value. (
        ${param}:${value})`,fileName,lineNumber);
        this.param =param;
        this.name = "InvalidValueException";
    }
}

export class AbstractClassException extends BaseException{
    constructor(className,fileName,lineNumber) {
        super(`Error: The class ${className} is abstract.`,fileName,lineNumber);
        this.className = className;
        this.name = "AbstractClassException";
    }
}

export class InvalidValueObjectException extends BaseException{
    constructor(param,value,fileName,lineNumber) {
        super(`Error: the parameter ${param} is not a valid value. Can't be NULL (
        ${param}:${value})`,fileName,lineNumber);
        this.param =param;
        this.name = "InvalidValueObjectException";
    }
}

export class ObjectTypeException extends BaseException{
    constructor(param,value,fileName,lineNumber) {
        super(`Error: the new Object ${param} type is not valid. (
        ${param}:${value})`,fileName,lineNumber);
        this.param =param;
        this.name = "ObjectTypeException";
    }
}

export class ObjectExistException extends BaseException{
    constructor(param,value,fileName,lineNumber) {
        super(`Error: the new Object it already exists. (
        ${param}:${value})`,fileName,lineNumber);
        this.param =param;
        this.name = "ObjectIndexExistException";
    }
}

export class ObjectNotExistException extends BaseException{
    constructor(param,value,fileName,lineNumber) {
        super(`Error: the new Object does not exist. (
        ${param}:${value})`,fileName,lineNumber);
        this.param =param;
        this.name = "ObjectIndexNotExistException";
    }
}



