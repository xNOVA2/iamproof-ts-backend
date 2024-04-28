import { NextFunction, Request, Response } from "express";
import { asyncHandler, generateResponse } from "../../utils/helpers";
import { ROLES, STATUS_CODES } from "../../utils/constants";
import { findUser, getAllUsers, updateUser } from "../../models";

export const selectWearable = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const user = await findUser({ _id: req.user._id });
    
    if(!user) return next({
        status: STATUS_CODES.NOT_FOUND,
        message: 'User not found'
    });

    user.wearable = req.body.wearable;
    await user.save();

    generateResponse(user, 'Wearable selected successfully', res);
})

export const currentUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await findUser({ _id: req.user._id }); 
    generateResponse(user, 'User fetched successfully', res);
});

export const createProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    req.body.profileCompleted = true;
    const user = await updateUser({ _id: req.user._id },req.body);
    generateResponse(user, 'Profile created successfully', res);
});

export const updateProfile = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const isUserExist = await findUser({ $ne: { _id: req.user._id }, email: req.body.email });
    
    if(!isUserExist)return next({
        status: STATUS_CODES.CONFLICT,
        message: 'Email already exists'
    })
    const user = await updateUser({ _id: req.user._id }, req.body);
    generateResponse(user, 'Profile updated successfully', res);
});

// get all users
export const fetchAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const page: number = +(req.query.page || 1);
    const limit = +(req.query.limit || 10);
    const query = { role: { $ne: ROLES.ADMIN } };

    const usersData = await getAllUsers({ query, page, limit });
    if (usersData?.data?.length === 0) {
        generateResponse(null, 'No user found', res);
        return;
    }

    generateResponse(usersData, 'List fetched successfully', res);
});