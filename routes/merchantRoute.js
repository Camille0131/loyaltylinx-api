import * as merchant from "../controllers/merchantController.js";
import { Router } from "express";
import {
  protect,
  protectByRole,
  merchantProtect,
} from "../middlewares/protect.js";
import { merchantRole } from "../constants/globalConst.js";

const router = Router();

router.post("/register", merchant.createMerchant);
// router.post(
//   "/first-login",
//   protectByRole(merchantRole),
//   merchant.firstTimeLogin
// );
router.post("/login", protectByRole(merchantRole), merchant.loginMerchant);
router.get("/get-all", protect, merchant.getAllMerchant);

router.get(
  "/get-borrower-requests",
  merchantProtect,
  merchant.getAllBorrowerRequests
);

router.get(
  "/get-borrower-requests/:id",
  merchantProtect,
  merchant.getBorrowerRequestsById
);

export default router;
