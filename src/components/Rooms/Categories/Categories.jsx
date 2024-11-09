import { categories } from "./categoriesData";
import Container from "../../Shared/Container";
import CategoriesBox from "./CategoriesBox";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [params] = useSearchParams();
  const category = params.get("category");
  return (
    <Container>
      <div className="flex items-center justify-between pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox
            key={item.label}
            icon={item.icon}
            label={item.label}
            selected={category === item.label}
          ></CategoriesBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
