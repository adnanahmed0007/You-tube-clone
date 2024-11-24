import {Loginuser11} from "../controllers/Loginuser1.js";
import { Register } from "../controllers/Loginuser1.js";
import { Router } from "express";
const Route=Router();
Route.route("/login").post(Loginuser11);
Route.route("/register").post(Register);
export default Route;