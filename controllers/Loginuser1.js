import { LoginUserschema } from "../models/Login.js";
import bcrypt from "bcrypt"
export async function Loginuser11(req, res, error) {

    const { name, phoneNumber, Email, Password } = req.body;
    if (name && phoneNumber && Email && Password) {
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);
        const newUser1 = await LoginUserschema(
            {
                name,
                phoneNumber,
                Email,
                Password: hashedPassword

            }
        )


        const Check = await newUser1.save();
         console.log(Check)
        if (Check) {
            return res
                .status(200)
                .json(
                    {
                        message: "All detail saved successfully",
                        detail: newUser1,


                    }
                )
        }
    }



}
export async function Register(req, res, error) {
    const { Email, Password } = req.body;
    if (Email && Password) {
        const find = await LoginUserschema.findOne({ Email });
        if (find) {
            const passq = find.Password;
            const check = await bcrypt.compare(Password, passq);
            if (check) {
                return res
                    .status(200)
                    .json(
                        {
                            message: "your passwword is correct",
                            data: find,



                        }
                    )
            }
            

        }
        else if(!find) {
            return res
                .status(401)
                .json(
                    {
                        message: `we cant find your email in our databse please resgister this email firsts:: ${Email}`,
                    }
                )
                 
        }

         

    }
    else if(Email&&!Password){
        return res
        .status(301)
        .json(
            {
                message:"enter all the detail",
                data:`Email is there ${Email} please enter the password `

            }
        )
    }

}
