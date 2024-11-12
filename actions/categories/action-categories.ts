import createAxiosInstance from '@/utils/axiosConfig';
import { CategoryProps } from '@/types/category';

export const createCategory = async (categoryProps: CategoryProps) => {
    try {
        const axiosInstance = createAxiosInstance();
        const data = {
            name: categoryProps.name,
            description: categoryProps.description,
            state: categoryProps.state
        }

        const response = await axiosInstance.post('/category', data);

        return response.data;
    }
    catch(error) {
        console.log('Error:', error);
    }
}