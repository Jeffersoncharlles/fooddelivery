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
    ProductPagination,
    ProductPageItem,
} from './styles';
import { useStore } from '../../context/store';
import { CardProducts } from '../../components/CardProducts';
import { Modal } from '../../components/Modal';
import { ProductItem } from '../../components/ProductItem/indext';
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
    const {
        isLoading,
        ListProducts,
        products,
        totalPages,
        currentPage,
        setCurrentPage,
        activeSearch,
        activeCategory,
        setActiveCategory
    } = useStore();

    const [categories, setCategories] = useState<ICategories[]>([])
    const [modalStatus, setModalStatus] = useState<boolean>(false)
    const [modalData, setModalData] = useState({} as any)


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
            await ListProducts({ activeSearch, currentPage, activeCategory })
        })()
    }, [activeCategory, currentPage, activeSearch])

    if (isLoading) {
        return (

            <div></div>
        )
    }

    const handleProductClick = (data: any) => {
        setModalData(data);
        setModalStatus(true)
    }

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
                            <CardProducts
                                key={String(item.id)}
                                data={item}
                                onClick={handleProductClick}
                            //vou pegar os dados que clicou e passar para handleProductCLick
                            />
                        ))}
                    </ProductList>
                </Product>
            )}
            {totalPages > 0 && (
                <ProductPagination >
                    {//criar array com total de pages com conteúdo 0
                        Array(totalPages).fill(0).map((item, index) => (
                            <ProductPageItem
                                key={String(index)}
                                active={currentPage}
                                current={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </ProductPageItem>
                        ))}
                </ProductPagination>
            )}
            <Modal active={modalStatus} close={setModalStatus}>
                <ProductItem
                    // passando as info para ca
                    data={modalData}
                    close={setModalStatus}
                />
            </Modal>
        </Container>
    );
}