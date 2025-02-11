import { validationResult } from "express-validator";
import { param } from "express-validator";

export const validIDparams = [
  param("id").isMongoId().withMessage("Invalid ID format"),
  param("userId").optional().isMongoId().withMessage("Invalid user ID format"),
  param("donationId")
    .optional()
    .isMongoId()
    .withMessage("Invalid donation ID format"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];


