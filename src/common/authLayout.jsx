import Logo from "../assets/svg/tuksLogo.svg?react"
import sideImg from "../assets/svg/authSideImg.svg"
import Input from "./commonInput.jsx";
import CheckBox from "./commonCheckbox.jsx";

const AuthLayout = () => {
    return (
        <div className="h-screen w-screen">
            <div className="flex h-full">
                <div className="flex-[0_0_40%] flex justify-center items-center">
                    <section>
                        <div className="flex justify-center">
                            <Logo/>
                        </div>
                        <div className="py-8">
                            <h2 className="auth-heading">Welcome back!</h2>
                            <p className="text-center text-dusty-gray pt-3">Let’s get back to your business!</p>
                        </div>
                        <Input placeholder="Enter Your Email" label="Email" type="email"/>
                        <Input placeholder="Enter Your Password" label="Password" type="password"
                               className="pt-8"/>
                        <div className="flex items-center justify-between pt-3">
                            <CheckBox/>
                            <button className="text-dodger-blue font-medium text-sm">Forgot password?</button>
                        </div>
                    </section>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src={sideImg}/>
                </div>
            </div>
        </div>
    )
}
export default AuthLayout;
