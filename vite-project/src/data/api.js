import { data } from "autoprefixer";

export default () => ({
    facts: [],
    async getFacts(limit) {
        try {
            let response = await fetch(`https://dogapi.dog/api/v2/facts?limit=${limit}`);

            if (!response.ok) {
                throw new Error
            }

            let data = await response.json()

            this.facts = data
        }
        catch (error) {
            console.error('Error:', error)
        }
    }
})