import * as user from "../controllers/userController.js";
import { Router } from "express";
import { protect, protectByRole } from "../middlewares/protect.js";
import { userRole } from "../constants/globalConst.js";

const router = Router();

router.post("/register", user.createUser);
router.post("/login", protectByRole(userRole), user.loginUser);
// router.post("/first-login", protectByRole(userRole), user.firstLogin);
// router.put("/:id", protect, user.updateUser);
router.put("/update-password/:id", protect, user.updateUserPassword);
router.put("/change-password", user.changePassword);
router.get("/get-all", user.getAllUser);
router.get("/profile", protect, user.getUserProfile);
router.post("/validate-code-login", protect, user.validateCodeFirstTimeLogin);
router.post("/account-verification", protect, user.accountVerification);
router.post("/validate-code", user.validateCode);
router.post("/validate-code-with-token", protect, user.validateCodeWithToken);
router.post("/find-account", user.findUserAccount);
router.post("/refresh-code", protect, user.refreshSecretCode);
router.post("/refresh-qr", protect, user.refreshQrCode);
router.post("/upload-profile-picture", protect, user.saveProfilePicturePath);

router.post("/:id/request-credit", protect, user.creditRequest);

router.post("/send-otp", protect, user.sendOTP);

export default router;
