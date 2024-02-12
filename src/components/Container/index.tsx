import { FC, ReactNode } from "react";

interface ContainerState {
    children: ReactNode;
}
const Container: FC<ContainerState> = ({ children }) => {
    return <div className=" max-w-[1200px] mx-auto">{children}</div>;
};

export default Container;
