import { appleLogin, appleSignup, changePassword, facebookLogin, facebookSignup, googleLogin, googleSignup, login, logout, register, resetPassword, sendOtp, verifyOTP } from "../../controllers";
import { Router } from "express";
import { appleValidation, changePasswordValidation, facebookValidation, googleValidation, loginValidation, otpValidation, otpVerifyValidation, registerValidation, resetPasswordValidation } from "../../validator";
import authMiddleware from "../../middlewares/auth.middleware";
import { ROLES } from "../../utils/constants";

export default class AuthAPI {

    constructor(private readonly router: Router) {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.post('/register',registerValidation,register);
        this.router.post('/login',loginValidation ,login);
        this.router.post('/otp/generate',otpValidation,sendOtp);
        this.router.put('/otp/verify',otpVerifyValidation,verifyOTP);
        this.router.post('/google/login',googleValidation,googleLogin)
        this.router.post('/google/register',googleValidation,googleSignup)
        this.router.post('/facebook/login',facebookValidation,facebookLogin)
        this.router.post('/facebook/register',facebookValidation,facebookSignup)
        this.router.post('/apple/login',appleValidation,appleLogin)
        this.router.post('/apple/register',appleValidation,appleSignup)

        // below routes use authMiddleware
        this.router.put('/reset-password',authMiddleware(Object.values(ROLES)),resetPasswordValidation,resetPassword);
        this.router.post('/change-password',authMiddleware(Object.values(ROLES)),changePasswordValidation,changePassword);
        this.router.post('/logout',authMiddleware(Object.values(ROLES)),logout)
        
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/auth';
    }
}