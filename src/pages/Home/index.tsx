import { useEffect, useState } from 'react';
import { CategoryItem } from '../../components/CategoryItem';
import { api } from '../../services/api';
import ReactTooltip from 'react-tooltip';
import {
    Container,
    Category,
    CategoryList,
    Product,
    ProductList,
} from './styles';
import { useStore } from '../../context/store';
import { CardProducts } from '../../components/CardProducts';
export interface ICategories {
    id: number;
    name: string;
    image: string;
}

const everyCategories = {
    id: 0,
    name: 'Todas Categories',
    image: 'GiNotebook',
}

export const Home = () => {
    const { ListProducts, products } = useStore();
    const [categories, setCategories] = useState<ICategories[]>([])
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/categories')
            if (data.error === '') {
                setCategories(data.result)
                ReactTooltip.rebuild();
            }

        })()
    }, [])

    useEffect(() => {
        (async () => {
            await ListProducts()
        })()
    }, [activeCategory])

    return (
        <Container>
            {categories.length > 0 && (
                <Category>
                    <p>Selecione uma categoria</p>
                    <CategoryList>
                        <CategoryItem data={everyCategories} active={activeCategory} setActive={setActiveCategory} />
                        {categories.map((c) => (
                            <CategoryItem key={String(c.id)} data={c} active={activeCategory} setActive={setActiveCategory} />
                        ))}
                    </CategoryList>
                </Category>
            )}
            {products.length > 0 && (
                <Product>
                    <ProductList>
                        {products.map((item) => (
                            <CardProducts key={String(item.id)} data={item} />
                        ))}
                    </ProductList>
                </Product>
            )}

        </Container>
    );
}