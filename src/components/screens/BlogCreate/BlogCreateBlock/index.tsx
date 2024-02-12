import { FC } from "react";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";
import BlogTable from "../BlogCreateForm";

const BlogCreateBlock: FC = () => {
    return (
        <div>
            <Container>
                <div>
                    <TitleField text="Создать список" />
                    <div>
                        <BlogTable />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogCreateBlock;
