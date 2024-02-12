import { FC } from "react";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";
import AuthForm from "../AuthForm";

const AuthBlock: FC = () => {
    return (
        <div className="w-full">
            <Container>
                <div className="flex justify-center items-center">
                    <div className="w-[400px] shadow-lg p-[20px]">
                        <TitleField text="Войти" />
                        <AuthForm />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AuthBlock;
