import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setIsAuth } from "../../../../redux/slices/authSlice";
import { getUserName } from "../../../../services/AuthService";
import InputField from "../../../ui/Field/InputField/inputField";
type Inputs = {
    userName: string;
    password: string;
};

const AuthForm: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const getUser = async (username: string, password: string) => {
        await getUserName(username, password).then((data) => {
            if (data && data.length > 0) {
                dispatch(setIsAuth(true));
                toast.success("Успешно");
                navigate("/blogs");
            }
        });
    };
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            userName: "",
            password: "",
        },
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const username = data.userName;
        const password = data.password;
        getUser(username, password);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="w-full mb-[20px]">
                    <Controller
                        name="userName"
                        control={control}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            min: {
                                value: 3,
                                message: "Данное поле некорректно заполнено",
                            },
                        }}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder={"title"}
                                className="shadow-sm bg-white border border-borderInput text-sm rounded-lg focus:violet focus:violet block w-full p-2.5"
                                error={errors?.userName}
                            />
                        )}
                    />
                </div>
                <div className="w-full mb-[20px]">
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: "Поле обязательно для заполнения",
                            min: {
                                value: 3,
                                message: "Данное поле некорректно заполнено",
                            },
                        }}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                placeholder={"text"}
                                className="shadow-sm bg-white border border-borderInput text-sm rounded-lg focus:violet focus:violet block w-full p-2.5"
                                error={errors?.password}
                            />
                        )}
                    />
                </div>
                <div className="w-full text-center">
                    <button className="bg-main hover:bg-mainHover text-white font-bold py-2 px-4 border-b-4 border-main hover:border-mainHover rounded">
                        Войти
                    </button>
                </div>
            </div>
        </form>
    );

    return <></>;
};

export default AuthForm;
