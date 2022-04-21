import { useEffect, useState } from 'react';
import { CategoryItem } from '../../components/CategoryItem';
import { api } from '../../services/api';
import {
    Container,
    Category,
    CategoryList,

} from './styles';
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
    const [categories, setCategories] = useState<ICategories[]>([])
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        (async () => {
            const { data } = await api.get('/categories')
            if (data.error === '') {
                setCategories(data.result)
            }
        })()
    }, [])

    console.log(categories)
    return (
        <Container>
            {categories.length > 0 && (
                <Category>
                    <p>Selecione uma categoria</p>
                    <CategoryList>
                        <CategoryItem data={everyCategories} active={activeCategory} />
                        {categories.map((c) => (
                            <CategoryItem key={String(c.id)} data={c} active={activeCategory} />
                        ))}
                    </CategoryList>
                </Category>
            )}

        </Container>
    );
}