import { FC, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogsId, putBlogFix } from "../../../../services/useEndpoints";
import InputField from "../../../ui/Field/InputField/inputField";
type Inputs = {
    titleField: string;
    textField: string;
};

const BlogViewForm: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: dataBlog } = useQuery([`blogsId${id}`], () =>
        getBlogsId(Number(id))
    );
    const [isFixed, setIsFixed] = useState(true);
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            titleField: dataBlog && dataBlog?.title,
            textField: dataBlog && dataBlog?.text,
        },
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const title = data.titleField;
        const text = data.textField;
        const proId = Number(id);
        putBlogFix(proId, title, text);
        navigate("/blogs");
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="w-full mb-[20px]">
                        <Controller
                            name="titleField"
                            control={control}
                            rules={{
                                required: "Поле обязательно для заполнения",
                                min: {
                                    value: 3,
                                    message:
                                        "Данное поле некорректно заполнено",
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    {...field}
                                    placeholder={"title"}
                                    className="shadow-sm bg-white border border-borderInput text-sm rounded-lg focus:violet focus:violet block w-full p-2.5"
                                    error={errors?.titleField}
                                    value={
                                        dataBlog && isFixed
                                            ? dataBlog?.title
                                            : field.value
                                    }
                                    disabled={isFixed}
                                />
                            )}
                        />
                    </div>
                    <div className="w-full mb-[20px]">
                        <Controller
                            name="textField"
                            control={control}
                            rules={{
                                required: "Поле обязательно для заполнения",
                                min: {
                                    value: 3,
                                    message:
                                        "Данное поле некорректно заполнено",
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    {...field}
                                    placeholder={"text"}
                                    className="shadow-sm bg-white border border-borderInput text-sm rounded-lg focus:violet focus:violet block w-full p-2.5"
                                    error={errors?.textField}
                                    value={
                                        dataBlog && isFixed
                                            ? dataBlog?.text
                                            : field.value
                                    }
                                    disabled={isFixed}
                                />
                            )}
                        />
                    </div>
                    <div className="w-full text-center">
                        {!isFixed && (
                            <button className="bg-main hover:bg-mainHover text-white font-bold py-2 px-4 border-b-4 border-main hover:border-mainHover rounded">
                                Отправить
                            </button>
                        )}
                    </div>
                </div>
            </form>

            <div className="w-full text-center">
                {isFixed && (
                    <button
                        className="bg-main hover:bg-mainHover text-white font-bold py-2 px-4 border-b-4 border-main hover:border-mainHover rounded"
                        onClick={() => setIsFixed(false)}
                    >
                        Редактировать
                    </button>
                )}
            </div>
        </>
    );

    return <></>;
};

export default BlogViewForm;
