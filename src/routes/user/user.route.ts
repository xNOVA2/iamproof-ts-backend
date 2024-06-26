import { Router } from "express";
import { createProfile, currentUser, editGoals, fetchAllUsers, selectWearable, updateProfile } from "../../controllers";
import authMiddleware from "../../middlewares/auth.middleware";
import { ROLES } from "../../utils/constants";
import { createProfileValidation, selectWearableValidation, updateProfileValidation } from "../../validator";

export default class UserAPI {
    constructor(private readonly router: Router) {
        this.router = Router();
        this.setupRoutes();
    }

    setupRoutes() {
        this.router.get('/all-users', fetchAllUsers);
        this.router.get('/', authMiddleware(Object.values(ROLES)),currentUser);
        this.router.post('/profile/create',authMiddleware(Object.values(ROLES)), createProfileValidation,createProfile);
        this.router.put('/profile/update',authMiddleware(Object.values(ROLES)),updateProfileValidation,updateProfile);
        this.router.put('/wearable',authMiddleware(Object.values(ROLES)),selectWearableValidation,selectWearable);
        this.router.put('/edit-goal',authMiddleware(Object.values(ROLES)),editGoals);
    }

    getRouter() {
        return this.router;
    }

    getRouterGroup() {
        return '/user';
    }
}