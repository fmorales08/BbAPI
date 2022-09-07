import axios from "axios";

const limitPage = 27;

export const getCharacters = async (setState, page) => {
	try {
		const getData = await axios.get(
			`https://www.breakingbadapi.com/api/characters?limit=${limitPage}&offset=${
				page * limitPage
			}`
		);
		setState(getData.data);
	} catch (e) {
		console.log("error", e);
	} finally {
		console.log("process done");
	}
};

export const getCharacter = async (setState, id) => {
	try {
		const getData = await axios.get(
			"https://www.breakingbadapi.com/api/characters/" + id
		);
		setState(getData.data[0]);
	} catch (e) {
		console.log("error", e);
	} finally {
		console.log("process done");
	}
};
