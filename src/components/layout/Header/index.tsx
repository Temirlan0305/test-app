import { Link } from "react-router-dom";
import Container from "../../Container";

const Header = () => {
    return (
        <div className="bg-main mb-[30px]">
            <Container>
                <div className="w-full flex justify-center py-[20px]">
                    <ul className="flex gap-x-[50px]">
                        <li>
                            <Link
                                to="/blogs"
                                className="font-medium text-[16px] text-white cursor-pointer"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/counter"
                                className="font-medium text-[16px] text-white cursor-pointer"
                            >
                                Counter
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fake-api"
                                className="font-medium text-[16px] text-white cursor-pointer"
                            >
                                FakeApi
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Header;
