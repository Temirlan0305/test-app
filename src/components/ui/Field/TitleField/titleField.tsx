import { FC } from "react";

interface TitleFieldState {
    text: string;
}
const TitleField: FC<TitleFieldState> = ({ text }) => {
    return (
        <h3 className="text-center text-[32px] font-medium mb-[30px]">
            {text}
        </h3>
    );
};

export default TitleField;
