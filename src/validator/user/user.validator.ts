import joi from 'Joi';
import { validateRequest } from '../../middlewares/validation.middleware';

const selectWearableValidator = joi.object({
    wearable: joi.string().required(),
});

const createProfileValidator = joi.object({
    age: joi.number().required(),
    heightValue: joi.number().required(),
    inches: joi.number().optional(),
    heightUnit: joi.string().valid('cm','in').required(),
    weightValue: joi.number().required(),
    weightUnit: joi.string().valid('kg', 'lbs').required(),
    gender: joi.string().valid('male','female').required(),
    stepsGoal: joi.number().required(),
    goalWeight: joi.number().required(),
    goalWeightUnit: joi.string().valid('kg', 'lbs').required(),
    activityLevel: joi.string().valid('daily', 'often', 'sometimes', 'rarely').required(),
    whyUseIamproof: joi.string().required(),
    address: joi.string().required(),
    dob: joi.date().required(),
})

const updateProfileValidator = joi.object({ 
    firstName: joi.string().optional(),
    lastName: joi.string().optional(),
    email: joi.string().email().optional().trim(),
    dob: joi.date().optional(),
    age: joi.number().optional(),
    heightValue: joi.number().required(),
    inches: joi.number().optional(),
    heightUnit: joi.string().valid('cm','in').required(),
    weightValue: joi.number().required(),
    weightUnit: joi.string().valid('kg', 'lbs').required(),
    // activityLevel: joi.string().valid('daily', 'often', 'sometimes', 'rarely').required(),
    gender: joi.string().valid('male','female').required(),
    address: joi.string().optional(),

})
    
export const createProfileValidation = validateRequest(createProfileValidator);
export const updateProfileValidation = validateRequest(updateProfileValidator);
export const selectWearableValidation = validateRequest(selectWearableValidator);
