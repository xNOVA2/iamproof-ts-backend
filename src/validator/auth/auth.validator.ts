import joi from 'Joi';
import { validateRequest } from '../../middlewares/validation.middleware';
import { emailExist } from './common.validation';

const registerValidator = joi.object({
    email: joi.string().email({minDomainSegments:2}).required().trim(),
    password: joi.string().min(6).required(),
    name: joi.string().required(),
    role: joi.string().valid('user','admin').default('user'),
    fcmToken: joi.string().required(),
});

const loginValidator = joi.object({
    email: joi.string().email({minDomainSegments:2}).required().trim(),
    password: joi.string().min(6).required(),
    fcmToken: joi.string().optional(),
});

const googleValidator = joi.object({
    name: joi.string().optional(),
    email: joi.string().email().required().trim(),
    socialId: joi.string().required(),
    role: joi.string().valid('user','admin').default('user').optional(),
    fcmToken: joi.string().required(),
});

const facebookValidator = joi.object({
    name: joi.string().optional(),
    email: joi.string().email().required().trim(),
    socialId: joi.string().required(),
    role: joi.string().valid('user','admin').default('user').optional(),
    fcmToken: joi.string().required(),
});

const appleValidator = joi.object({
    name: joi.string().required(),
    email: joi.string().email().optional().trim(),
    socialId: joi.string().required(),
    role: joi.string().valid('user','admin').default('user').optional(),
    fcmToken: joi.string().required(),
});

const otpValidator = joi.object({
    email: joi.string().email({minDomainSegments:2}).required().trim(),
});

const otpVerifyValidator = joi.object({
    email: joi.string().email({minDomainSegments:2}).required().trim(),
    otp: joi.string().required(),
});

const resetPasswordValidator = joi.object({
    password: joi.string().min(8).max(30).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

const changePasswordValidator = joi.object({
    oldPassword: joi.string().max(30).required(),
    newPassword: joi.string().max(30).required(),
    confirmPassword: joi.string().valid(joi.ref('newPassword')).required(),
});

const registerValidation = [emailExist,validateRequest(registerValidator)];
const loginValidation = validateRequest(loginValidator);
const googleValidation = validateRequest(googleValidator);
const facebookValidation = validateRequest(facebookValidator);
const appleValidation = validateRequest(appleValidator)
const otpValidation = validateRequest(otpValidator);
const otpVerifyValidation = validateRequest(otpVerifyValidator);
const resetPasswordValidation = validateRequest(resetPasswordValidator);
const changePasswordValidation = validateRequest(changePasswordValidator);


export {registerValidation,loginValidation,googleValidation,facebookValidation,appleValidation,otpValidation,otpVerifyValidation,resetPasswordValidation,changePasswordValidation};