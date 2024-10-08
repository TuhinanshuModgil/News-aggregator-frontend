import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
        let upvoteData = await request.json()
		const res = await fetch(`https://news-aggregator-backend-orpin.vercel.app/news/upvote-news`, {
			method: 'POST',
			body: JSON.stringify(upvoteData),
			headers: {
				'content-type': 'application/json'
			}
		});
        const data = await res.json()
        console.log("This is data", data)
        return json(data);
	} catch (error) {
        console.log("Error in upvote: ", error.message)
    }
	// return json(a + b);
}
