import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		const res = await fetch(
			`https://news-aggregator-backend-orpin.vercel.app/news/all-news`
		);
        if(!res.ok){
            throw new Error('Failed to fetch data')
        }

        if (res.status != 200) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();
		if (data?.length ===0 || Object.keys(data)?.length===0) {
			throw new Error('Data not found');
		}
        return json(data)
	} catch (error) {
		return json({ error: error.message })
	}
}
