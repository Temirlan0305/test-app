import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postBlogCreate } from "../../../../services/useEndpoints";
import InputField from "../../../ui/Field/InputField/inputField";
type Inputs = {
    title: string;
    text: string;
};

const BlogCreateForm: FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            title: "",
            text: "",
        },
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        postBlogCreate(data);
        navigate("/blogs");
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="w-full mb-[20px]">
                    <Controller
                        name="title"
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
                                error={errors?.title}
                            />
                        )}
                    />
                </div>
                <div className="w-full mb-[20px]">
                    <Controller
                        name="text"
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
                                error={errors?.text}
                            />
                        )}
                    />
                </div>
                <div className="w-full text-center">
                    <button className="bg-main hover:bg-mainHover text-white font-bold py-2 px-4 border-b-4 border-main hover:border-mainHover rounded">
                        Создать
                    </button>
                </div>
            </div>
        </form>
    );
};

export default BlogCreateForm;
