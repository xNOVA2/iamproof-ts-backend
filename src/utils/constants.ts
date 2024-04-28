export enum STATUS_CODES {
    SUCCESS = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500
}

export enum ROLES {
    USER = 'user',
    ADMIN = 'admin',
    SUB_ADMIN = "sub-admin"

}

  
  export const REGISTER_TYPE = Object.freeze({
    GOOGLE: "google",
    FACEBOOK: "facebook",
    APPLE: "apple",
    MANUAL: "manual",
  });
export const HEIGHT_UNITS = Object.freeze({
    METRIC: 'cm',
    IMPERIAL: 'in'
  });
  
  // Define and freeze  for weight units
   export const WEIGHT_UNITS = Object.freeze({
    METRIC: 'kg',
    IMPERIAL: 'lbs',
  });
  
  // Define and freeze  for gender
   export const GENDER_TYPES = Object.freeze({
    MALE: 'male',
    FEMALE: 'female',
  });
  
  // Define and freeze  for activity levels
export const ACTIVITY_LEVELS = Object.freeze({
    DAILY: 'daily',
    OFTEN: 'often',
    SOMETIMES:'sometimes',
    RARELY: 'rarely',
  });

  export const generateRandomOTP = () => {
    return Math.floor(10000 + Math.random() * 90000);
}