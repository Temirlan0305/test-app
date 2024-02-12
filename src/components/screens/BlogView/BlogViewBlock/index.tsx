import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBlogsId } from "../../../../services/useEndpoints";
import Container from "../../../Container";
import TitleField from "../../../ui/Field/TitleField/titleField";
import BlogViewForm from "../BlogViewForm";

const BlogViewBlock = () => {
    const { id } = useParams();
    const { data } = useQuery([`blogsId${id}`], () => getBlogsId(Number(id)));

    return (
        <div>
            <Container>
                <div>
                    <TitleField text={`Cписок: ${data && data?.id}`} />
                    <div>
                        <BlogViewForm />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BlogViewBlock;
