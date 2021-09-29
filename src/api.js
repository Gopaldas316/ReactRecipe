const base_url = "https://api.spoonacular.com/recipes/";
const api_key = "eeea2dd355654ec89dbe2deef9731879";

const random_dishes = "random";

export const getRandom = () => `${base_url}${random_dishes}?apiKey=${api_key}&number=12`;
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
export const getSearched = (item) => `${base_url}complexSearch?apiKey=${api_key}&number=12&query=${item}`;

//https://api.spoonacular.com/recipes/{id}/information
export const getDetails = (id) => `${base_url}${id}/information?apiKey=${api_key}`;