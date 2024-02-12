import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
    setCountMinus,
    setCountPlus,
} from "../../../../redux/slices/counterSlice";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";

const CounterBlock: FC = () => {
    const { count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();
    const onClickPlus = () => {
        dispatch(setCountPlus(1));
    };
    const onClickMinus = () => {
        dispatch(setCountMinus(1));
    };

    return (
        <div>
            <Container>
                <div className="flex flex-col items-center">
                    <TitleField text="Счетчик" />
                    <div className="flex items-center">
                        <button
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                            onClick={onClickMinus}
                        >
                            -
                        </button>
                        <h3 className="mx-[20px] font-medium text-[32px">
                            {count}
                        </h3>
                        <button
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                            onClick={onClickPlus}
                        >
                            +
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CounterBlock;
