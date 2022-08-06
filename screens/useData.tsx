import { useEffect, useState } from "react";

export type Comment = {
    id: number;
    title: string;
    email: string;
    body: string;
    photo: string;
}

export const useData = (): [Comment[], boolean] => {
    const [loadingData, setLoading] = useState(false);
    const [data, setData] = useState<Comment[]>([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const json = await response.json();
            setData(json.map((item: any) => ({
                id: item.id,
                title: item.name,
                email: item.email,
                body: item.body,
                photo: 'https://picsum.photos/200?random=' + item.id
            })));
            setLoading(false);
        }

        fetchData();
    }, []);

    return [data, loadingData];
}