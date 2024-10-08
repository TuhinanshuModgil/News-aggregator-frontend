export async function load({ fetch }){
    const getAllNews = async ()=>{
        try {
            const res = await fetch(`/apis/news`);
			if(!res.ok){
				throw new Error('Data not found')
			}
			if(res.status!==200){
				throw new Error('Data not found')
			}
		const data = await res.json();
		if (data?.length===0|| Object.keys(data)?.length===0) {
			throw new Error('Data not found')
		}
        // console.log("This is data from backend", data)
		return data
        } catch (error) {
            return { error: err.message }
        }
    }

    return {
        allNews: await getAllNews()
    }
}